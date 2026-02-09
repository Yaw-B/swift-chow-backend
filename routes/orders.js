const express = require('express');
const { requireAuth } = require('../middleware/auth');
const Order = require('../models/Order');
const User = require('../models/User');

const router = express.Router();

// ============================================
// CREATE ORDER
// ============================================

router.post('/create', requireAuth, async (req, res) => {
  try {
    const { items, deliveryAddress, paymentMethod, specialInstructions } = req.body;
    
    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'Cart is empty' });
    }
    
    if (!deliveryAddress) {
      return res.status(400).json({ error: 'Delivery address is required' });
    }
    
    // Calculate totals
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = 5; // Fixed delivery fee
    const tax = subtotal * 0.05; // 5% tax
    const total = subtotal + deliveryFee + tax;
    
    // Create order
    const order = new Order({
      userId: req.user._id,
      items,
      deliveryAddress,
      deliveryName: req.user.firstName + ' ' + (req.user.lastName || ''),
      deliveryPhone: req.user.phone,
      paymentMethod: paymentMethod || 'cod',
      subtotal,
      deliveryFee,
      tax,
      total,
      specialInstructions,
      estimatedDeliveryTime: 30, // 30 minutes estimate
      statusHistory: [{
        status: 'pending',
        timestamp: new Date(),
        note: 'Order placed'
      }]
    });
    
    await order.save();
    
    // Update user stats
    const user = await User.findById(req.user._id);
    user.totalOrders += 1;
    user.totalSpent += total;
    await user.save();
    
    res.status(201).json({
      success: true,
      order,
      orderId: order.orderId
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// GET USER ORDERS
// ============================================

router.get('/', requireAuth, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id })
      .sort({ createdAt: -1 });
    
    res.json({
      success: true,
      orders
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// GET ORDER BY ID
// ============================================

router.get('/:orderId', requireAuth, async (req, res) => {
  try {
    const { orderId } = req.params;
    
    const order = await Order.findOne({
      $or: [
        { _id: orderId },
        { orderId: orderId }
      ],
      userId: req.user._id
    });
    
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    
    res.json({
      success: true,
      order
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// UPDATE ORDER STATUS (Admin only - for testing)
// ============================================

router.put('/:orderId/status', requireAuth, async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status, note } = req.body;
    
    const validStatuses = ['pending', 'confirmed', 'preparing', 'ready', 'out_for_delivery', 'delivered', 'cancelled'];
    
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }
    
    const order = await Order.findOne({
      $or: [
        { _id: orderId },
        { orderId: orderId }
      ],
      userId: req.user._id
    });
    
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    
    order.status = status;
    order.statusHistory.push({
      status,
      timestamp: new Date(),
      note: note || ''
    });
    
    if (status === 'delivered') {
      order.actualDeliveryTime = new Date();
    }
    
    await order.save();
    
    res.json({
      success: true,
      order
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// RATE ORDER
// ============================================

router.post('/:orderId/rate', requireAuth, async (req, res) => {
  try {
    const { orderId } = req.params;
    const { rating, review } = req.body;
    
    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'Rating must be between 1 and 5' });
    }
    
    const order = await Order.findOne({
      $or: [
        { _id: orderId },
        { orderId: orderId }
      ],
      userId: req.user._id
    });
    
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    
    order.rating = rating;
    order.review = review || '';
    order.reviewedAt = new Date();
    await order.save();
    
    res.json({
      success: true,
      order
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// CANCEL ORDER
// ============================================

router.post('/:orderId/cancel', requireAuth, async (req, res) => {
  try {
    const { orderId } = req.params;
    const { reason } = req.body;
    
    const order = await Order.findOne({
      $or: [
        { _id: orderId },
        { orderId: orderId }
      ],
      userId: req.user._id
    });
    
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    
    if (['delivered', 'cancelled'].includes(order.status)) {
      return res.status(400).json({ error: 'Cannot cancel this order' });
    }
    
    order.status = 'cancelled';
    order.statusHistory.push({
      status: 'cancelled',
      timestamp: new Date(),
      note: reason || 'Cancelled by user'
    });
    
    await order.save();
    
    res.json({
      success: true,
      order
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
