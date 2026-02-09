import express from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import User from '../models/User.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

// ============================================
// JWT TOKEN GENERATION
// ============================================

const generateToken = (userId) => {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET || 'your-jwt-secret-change-in-production',
    { expiresIn: '7d' }
  );
};

const setAuthCookie = (res, token) => {
  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
  });
};

// ============================================
// LOCAL AUTHENTICATION (Email + Password)
// ============================================

// Register
router.post('/register', async (req, res) => {
  try {
    const { email, password, firstName, lastName, phone } = req.body;
    
    // Validate input
    if (!email || !password || !firstName) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }
    
    // Check if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({ error: 'User already exists' });
    }
    
    // Create new user
    user = new User({
      email,
      password,
      firstName,
      lastName,
      phone,
      isEmailVerified: false
    });
    
    await user.save();
    
    // Generate token
    const token = generateToken(user._id);
    setAuthCookie(res, token);
    
    res.status(201).json({
      success: true,
      user: user.getPublicProfile(),
      token
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', async (err, user, info) => {
    try {
      if (err) {
        return res.status(500).json({ error: 'Authentication error' });
      }
      
      if (!user) {
        return res.status(401).json({ error: info.message });
      }
      
      // Generate token
      const token = generateToken(user._id);
      setAuthCookie(res, token);
      
      res.json({
        success: true,
        user: user.getPublicProfile(),
        token
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })(req, res, next);
});

// ============================================
// GOOGLE OAUTH
// ============================================

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Generate token
    const token = generateToken(req.user._id);
    setAuthCookie(res, token);
    
    // Redirect to frontend with token
    res.redirect(`/index.html?auth=success&token=${token}`);
  }
);

// ============================================
// FACEBOOK OAUTH
// ============================================

router.get('/facebook',
  passport.authenticate('facebook', { scope: ['email', 'public_profile'] })
);

router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => {
    // Generate token
    const token = generateToken(req.user._id);
    setAuthCookie(res, token);
    
    // Redirect to frontend with token
    res.redirect(`/index.html?auth=success&token=${token}`);
  }
);

// ============================================
// LOGOUT
// ============================================

router.post('/logout', (req, res) => {
  res.clearCookie('token');
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ error: 'Logout failed' });
    }
    res.json({ success: true, message: 'Logged out successfully' });
  });
});

// ============================================
// GET CURRENT USER
// ============================================

router.get('/me', requireAuth, (req, res) => {
  res.json({
    success: true,
    user: req.user.getPublicProfile()
  });
});

// ============================================
// REFRESH TOKEN
// ============================================

router.post('/refresh', requireAuth, (req, res) => {
  const token = generateToken(req.user._id);
  setAuthCookie(res, token);
  
  res.json({
    success: true,
    token
  });
});

// ============================================
// UPDATE PROFILE
// ============================================

router.put('/profile', requireAuth, async (req, res) => {
  try {
    const { firstName, lastName, phone, profileImage } = req.body;
    
    const user = await User.findById(req.user._id);
    
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (phone) user.phone = phone;
    if (profileImage) user.profileImage = profileImage;
    
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
// CHANGE PASSWORD
// ============================================

router.post('/change-password', requireAuth, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const user = await User.findById(req.user._id).select('+password');
    
    // Verify current password
    const isValid = await user.comparePassword(currentPassword);
    if (!isValid) {
      return res.status(401).json({ error: 'Current password is incorrect' });
    }
    
    // Update password
    user.password = newPassword;
    await user.save();
    
    res.json({
      success: true,
      message: 'Password changed successfully'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
