# SWIFT CHOW - Final Deployment Steps

## ✅ Backend Status
- **Backend URL:** https://swift-chow-backend.onrender.com
- **Database:** MongoDB Atlas (Connected ✅)
- **Status:** LIVE 🚀

---

## 📋 What You Need to Do Now

### Step 1: Deploy Frontend to Netlify (5 minutes)

1. Go to **https://netlify.com**
2. Click "Sign up" → Connect with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select repo: `Yaw-B/swift-chow-backend` (or create new repo for frontend only)
5. Build command: Leave blank (no build needed)
6. Publish directory: `.` (current directory)
7. Click Deploy

**You'll get a URL like:** `https://your-site.netlify.app`

---

### Step 2: Update Google OAuth Callback URLs

1. Go to **https://console.cloud.google.com**
2. Select your project
3. Go to **APIs & Services** → **Credentials**
4. Click your OAuth 2.0 Client ID
5. Under "Authorized redirect URIs" add:
   ```
   https://swift-chow-backend.onrender.com/api/auth/google/callback
   ```
6. Click Save

---

### Step 3: Update Render Environment Variables

1. Go to **https://render.com**
2. Click your `swift-chow-backend` service
3. Go to **Environment**
4. Find and update:
   ```
   GOOGLE_CALLBACK_URL=https://swift-chow-backend.onrender.com/api/auth/google/callback
   CLIENT_URL=https://your-netlify-site.netlify.app
   ```
5. Click Save → Service will redeploy automatically

---

### Step 4: Update Frontend API URL (if needed)

The frontend is already configured to use the live backend:
```javascript
const API_BASE_URL = 'https://swift-chow-backend.onrender.com/api';
```

If you deployed to Netlify and it shows a different URL, update `js/api.js`:
```javascript
const API_BASE_URL = localStorage.getItem('apiUrl') || 'https://swift-chow-backend.onrender.com/api';
```

---

## 🧪 Testing

Once everything is deployed:

1. Go to your Netlify frontend URL
2. Click "Login"
3. Try Google Sign In
4. Add item to cart
5. Place an order
6. Check MongoDB Atlas to see the order saved

---

## 📱 Your Live Application

- **Frontend:** https://your-site.netlify.app
- **Backend API:** https://swift-chow-backend.onrender.com
- **Database:** MongoDB Atlas (free tier)
- **Authentication:** Google OAuth 2.0 + Local Auth

---

## 🎉 You're Done!

Your SWIFT CHOW website is now a **production-ready application** with:
- ✅ Real backend server
- ✅ Cloud database (MongoDB)
- ✅ Authentication system
- ✅ Order management
- ✅ Global deployment

**Total deployment time:** ~15 minutes

Enjoy! 🚀
