#!/usr/bin/env python3
"""Quick deployment script for auth fix"""
import shutil
import subprocess
import os
import sys

try:
    # Step 1: Copy auth-routes-fixed.js to backend
    src = r'c:\Users\Owner\Downloads\SWIFT CHOW website project\auth-routes-fixed.js'
    backend_path = r'C:\Users\Owner\AppData\Local\Temp\swift-chow-backend-fix'
    dst = os.path.join(backend_path, 'routes', 'auth.js')
    
    print(f"[1/4] Copying {src}")
    print(f"      to {dst}")
    shutil.copy(src, dst)
    print("[OK] File copied successfully")
    
    # Step 2: Stage the changes
    print("\n[2/4] Staging backend changes...")
    os.chdir(backend_path)
    result = subprocess.run(['git', 'add', 'routes/auth.js'], capture_output=True, text=True)
    if result.returncode != 0:
        print(f"[ERROR] {result.stderr}")
        sys.exit(1)
    print("[OK] Changes staged")
    
    # Step 3: Commit
    print("\n[3/4] Committing changes...")
    result = subprocess.run(['git', 'commit', '-m', 'Fix: Return JWT token in login response'], capture_output=True, text=True)
    if result.returncode == 0:
        print("[OK] Committed:", result.stdout.strip())
    else:
        print("Note:", result.stderr.strip())
    
    # Step 4: Push
    print("\n[4/4] Pushing to Render...")
    result = subprocess.run(['git', 'push', 'origin', 'master'], capture_output=True, text=True)
    if result.returncode == 0:
        print("[OK] Pushed successfully!")
        print(result.stdout)
    else:
        print(f"[ERROR] Push: {result.stderr}")
        sys.exit(1)
    
    print("\n" + "="*50)
    print("[SUCCESS] BACKEND DEPLOYMENT COMPLETE")
    print("[INFO] Render will auto-redeploy in 1-2 minutes")
    print("="*50)
    
except Exception as e:
    print(f"[ERROR] {e}")
    sys.exit(1)
