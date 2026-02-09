import express from 'express';
import { requireAuth } from '../middleware/auth.js';
import User from '../models/User.js';

const router = express.Router();

// ============================================
// GET USER PROFILE
// ============================================

router.get('/profile', requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate('addresses')
      .populate('savedPaymentMethods');
    
    res.json({
      success: true,
      user: user.getPublicProfile()
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// UPDATE USER PREFERENCES
// ============================================

router.put('/preferences', requireAuth, async (req, res) => {
  try {
    const { darkMode, newsletter } = req.body;
    
    const user = await User.findById(req.user._id);
    
    if (typeof darkMode !== 'undefined') user.darkMode = darkMode;
    if (typeof newsletter !== 'undefined') user.newsletter = newsletter;
    
    user.updatedAt = new Date();
    await user.save();
    
    res.json({
      success: true,
      user: user.getPublicProfile()
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// FAVORITE ITEMS
// ============================================

router.post('/favorites/:itemId', requireAuth, async (req, res) => {
  try {
    const { itemId } = req.params;
    const user = await User.findById(req.user._id);
    
    if (!user.favoriteItems.includes(parseInt(itemId))) {
      user.favoriteItems.push(parseInt(itemId));
      await user.save();
    }
    
    res.json({
      success: true,
      favoriteItems: user.favoriteItems
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/favorites/:itemId', requireAuth, async (req, res) => {
  try {
    const { itemId } = req.params;
    const user = await User.findById(req.user._id);
    
    user.favoriteItems = user.favoriteItems.filter(id => id !== parseInt(itemId));
    await user.save();
    
    res.json({
      success: true,
      favoriteItems: user.favoriteItems
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// GET USER STATS
// ============================================

router.get('/stats', requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    
    res.json({
      success: true,
      stats: {
        totalOrders: user.totalOrders,
        totalSpent: user.totalSpent,
        accountAge: Math.floor((new Date() - user.createdAt) / (1000 * 60 * 60 * 24)),
        joinedDate: user.createdAt
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
