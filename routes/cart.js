import express from 'express';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

// In-memory cart for this session
const userCarts = new Map();

// ============================================
// GET CART
// ============================================

router.get('/', requireAuth, (req, res) => {
  try {
    const userId = req.user._id.toString();
    const cart = userCarts.get(userId) || [];
    
    res.json({
      success: true,
      cart,
      total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// ADD TO CART
// ============================================

router.post('/add', requireAuth, (req, res) => {
  try {
    const { foodId, name, category, price, image, quantity = 1 } = req.body;
    
    if (!foodId || !price) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const userId = req.user._id.toString();
    let cart = userCarts.get(userId) || [];
    
    // Check if item already in cart
    const existingItem = cart.find(item => item.foodId === foodId);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        foodId,
        name,
        category,
        price,
        image,
        quantity
      });
    }
    
    userCarts.set(userId, cart);
    
    res.json({
      success: true,
      cart,
      total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// UPDATE CART ITEM
// ============================================

router.put('/update', requireAuth, (req, res) => {
  try {
    const { foodId, quantity } = req.body;
    
    if (!foodId || !quantity) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const userId = req.user._id.toString();
    let cart = userCarts.get(userId) || [];
    
    const item = cart.find(item => item.foodId === foodId);
    
    if (!item) {
      return res.status(404).json({ error: 'Item not found in cart' });
    }
    
    if (quantity <= 0) {
      cart = cart.filter(item => item.foodId !== foodId);
    } else {
      item.quantity = quantity;
    }
    
    userCarts.set(userId, cart);
    
    res.json({
      success: true,
      cart,
      total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// REMOVE FROM CART
// ============================================

router.delete('/remove/:foodId', requireAuth, (req, res) => {
  try {
    const { foodId } = req.params;
    
    const userId = req.user._id.toString();
    let cart = userCarts.get(userId) || [];
    
    cart = cart.filter(item => item.foodId !== parseInt(foodId));
    userCarts.set(userId, cart);
    
    res.json({
      success: true,
      cart,
      total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// CLEAR CART
// ============================================

router.delete('/clear', requireAuth, (req, res) => {
  try {
    const userId = req.user._id.toString();
    userCarts.delete(userId);
    
    res.json({
      success: true,
      cart: [],
      total: 0
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
