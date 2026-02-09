#!/bin/bash
cd /tmp/swift-chow-backend-fix
grep -n "router.post('/login'" routes/auth.js
