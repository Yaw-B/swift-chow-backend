const jwt = require('jsonwebtoken');
const User = require('../models/User');

/**
 * Middleware to require authentication
 */
const requireAuth = async (req, res, next) => {
  try {
    // Get token from cookie or header
    let token = req.cookies?.token;
    
    if (!token && req.headers.authorization) {
      token = req.headers.authorization.replace('Bearer ', '');
    }
    
    if (!token) {
      return res.status(401).json({ error: 'No authentication token provided' });
    }
    
    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || 'your-jwt-secret-change-in-production'
    );
    
    // Get user from database
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }
    
    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired' });
    }
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};

/**
 * Middleware for optional authentication
 * Sets req.user if authenticated, otherwise continues
 */
const optionalAuth = async (req, res, next) => {
  try {
    let token = req.cookies?.token;
    
    if (!token && req.headers.authorization) {
      token = req.headers.authorization.replace('Bearer ', '');
    }
    
    if (token) {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || 'your-jwt-secret-change-in-production'
      );
      
      const user = await User.findById(decoded.userId);
      if (user) {
        req.user = user;
      }
    }
    
    next();
  } catch (error) {
    // Continue without user if token is invalid
    next();
  }
};

/**
 * Middleware to handle errors
 */
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);
  
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Validation error',
      details: Object.values(err.errors).map(e => e.message)
    });
  }
  
  if (err.name === 'CastError') {
    return res.status(400).json({ error: 'Invalid ID format' });
  }
  
  res.status(500).json({
    error: err.message || 'Internal server error'
  });
};

module.exports = { requireAuth, optionalAuth, errorHandler };
