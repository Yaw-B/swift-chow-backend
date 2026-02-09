// BACKUP: Original login route with 401 error
// The issue: JWT token not being returned in response

// FIXED LOGIN ROUTE - Replace the login endpoint in routes/auth.js with this:

// Local Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: { message: 'Authentication error', status: 500 } });
    }
    
    if (!user) {
      return res.status(401).json({ error: { message: info?.message || 'Invalid credentials', status: 401 } });
    }
    
    // Log the user in
    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({ error: { message: 'Login failed', status: 500 } });
      }
      
      // Generate JWT token
      const jwt = require('jsonwebtoken');
      const token = jwt.sign(
        { 
          userId: user._id,
          email: user.email 
        },
        process.env.JWT_SECRET || 'your-jwt-secret-change-in-production',
        { expiresIn: '7d' }
      );
      
      // Return user data and token
      return res.status(200).json({
        success: true,
        message: 'Login successful',
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          profileImage: user.profileImage
        },
        token: token  // <-- THIS IS THE KEY FIX
      });
    });
  })(req, res, next);
});

// EXPLANATION OF FIX:
// 1. Use passport.authenticate with custom callback to have full control
// 2. After successful authentication, call req.login() to establish session
// 3. Generate JWT token using jwt.sign()
// 4. Return token in response body (frontend reads it with res.token)
// 5. Frontend stores token in localStorage and uses it for subsequent requests

// KEY CHANGES:
// - Returns {token: "jwt_token_here"} so frontend can save it
// - Properly generates JWT with userId
// - Uses passport's req.login() to establish session
// - Sends 200 status on success instead of 401
