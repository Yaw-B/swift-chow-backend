@echo off
REM Fix Backend Auth.js and Deploy

REM Copy the fixed auth.js
echo Copying fixed auth.js...
copy "c:\Users\Owner\Downloads\SWIFT CHOW website project\auth-routes-fixed.js" "C:\Users\Owner\AppData\Local\Temp\swift-chow-backend-fix\routes\auth.js"

REM Change to backend directory
cd /d "C:\Users\Owner\AppData\Local\Temp\swift-chow-backend-fix"

REM Add and commit
"C:\Program Files\Git\bin\git.exe" add routes/auth.js
"C:\Program Files\Git\bin\git.exe" commit -m "Fix: Return JWT token in login response - resolves 401 auth errors"

REM Push to GitHub
"C:\Program Files\Git\bin\git.exe" push origin master

echo Done! Render will auto-deploy the fix.
pause
