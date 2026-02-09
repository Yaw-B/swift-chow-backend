import passport from 'passport';
import LocalStrategy from 'passport-local';
import GoogleStrategy from 'passport-google-oauth20';
import FacebookStrategy from 'passport-facebook';
import JwtStrategy from 'passport-jwt';
import User from '../models/User.js';

// ============================================
// LOCAL STRATEGY (Email + Password)
// ============================================

passport.use('local', new LocalStrategy.Strategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email }).select('+password');
      
      if (!user) {
        return done(null, false, { message: 'User not found' });
      }
      
      const isValidPassword = await user.comparePassword(password);
      if (!isValidPassword) {
        return done(null, false, { message: 'Invalid password' });
      }
      
      user.updateLastLogin();
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
));

// ============================================
// GOOGLE OAUTH STRATEGY
// ============================================

passport.use('google', new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL || '/api/auth/google/callback'
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Check if user exists with Google ID
      let user = await User.findOne({ googleId: profile.id });
      
      if (user) {
        user.updateLastLogin();
        return done(null, user);
      }
      
      // Check if user exists with email
      user = await User.findOne({ email: profile.emails[0].value });
      
      if (user) {
        // Link Google account to existing user
        user.googleId = profile.id;
        user.googleProfile = {
          picture: profile.photos[0]?.value,
          locale: profile.locale
        };
        await user.save();
        user.updateLastLogin();
        return done(null, user);
      }
      
      // Create new user with Google profile
      const newUser = new User({
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value,
        googleId: profile.id,
        googleProfile: {
          picture: profile.photos[0]?.value,
          locale: profile.locale
        },
        isEmailVerified: true,
        profileImage: profile.photos[0]?.value
      });
      
      await newUser.save();
      return done(null, newUser);
    } catch (error) {
      return done(error);
    }
  }
));

// ============================================
// FACEBOOK OAUTH STRATEGY
// ============================================

passport.use('facebook', new FacebookStrategy(
  {
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL || '/api/auth/facebook/callback',
    profileFields: ['id', 'emails', 'name', 'picture', 'locale']
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Check if user exists with Facebook ID
      let user = await User.findOne({ facebookId: profile.id });
      
      if (user) {
        user.updateLastLogin();
        return done(null, user);
      }
      
      // Check if user exists with email
      const email = profile.emails?.[0]?.value;
      if (email) {
        user = await User.findOne({ email });
        
        if (user) {
          // Link Facebook account to existing user
          user.facebookId = profile.id;
          user.facebookProfile = {
            picture: profile.photos[0]?.value,
            locale: profile.locale
          };
          await user.save();
          user.updateLastLogin();
          return done(null, user);
        }
      }
      
      // Create new user with Facebook profile
      const newUser = new User({
        firstName: profile.name?.givenName || profile.displayName?.split(' ')[0],
        lastName: profile.name?.familyName || profile.displayName?.split(' ')[1],
        email: email || `fb_${profile.id}@swiftchow.local`,
        facebookId: profile.id,
        facebookProfile: {
          picture: profile.photos[0]?.value,
          locale: profile.locale
        },
        isEmailVerified: !!email,
        profileImage: profile.photos[0]?.value
      });
      
      await newUser.save();
      return done(null, newUser);
    } catch (error) {
      return done(error);
    }
  }
));

// ============================================
// JWT STRATEGY (for API authentication)
// ============================================

const JwtStrategyConfig = {
  jwtFromRequest: (req) => {
    if (req?.cookies?.token) {
      return req.cookies.token;
    }
    if (req?.headers?.authorization) {
      return req.headers.authorization.replace('Bearer ', '');
    }
    return null;
  },
  secretOrKey: process.env.JWT_SECRET || 'your-jwt-secret-change-in-production'
};

passport.use('jwt', new JwtStrategy(JwtStrategyConfig, async (payload, done) => {
  try {
    const user = await User.findById(payload.userId);
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  } catch (error) {
    return done(error);
  }
}));

// ============================================
// SERIALIZE & DESERIALIZE USER
// ============================================

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (userId, done) => {
  try {
    const user = await User.findById(userId);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

export default passport;
