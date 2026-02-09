const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Starting deployment...\n');

try {
  // 1. Copy the fixed auth.js
  const sourceFile = 'c:/Users/Owner/Downloads/SWIFT CHOW website project/auth-routes-fixed.js';
  const destFile = 'C:/Users/Owner/AppData/Local/Temp/swift-chow-backend-fix/routes/auth.js';
  
  console.log('1. Copying fixed auth.js...');
  fs.copyFileSync(sourceFile, destFile);
  console.log('   ✓ File copied successfully\n');
  
  // 2. Change to backend directory and run git commands
  const backendDir = 'C:\\Users\\Owner\\AppData\\Local\\Temp\\swift-chow-backend-fix';
  
  console.log('2. Committing changes...');
  execSync(`cd "${backendDir}" && "C:\\Program Files\\Git\\bin\\git.exe" add routes/auth.js`, { 
    stdio: 'inherit' 
  });
  
  execSync(`cd "${backendDir}" && "C:\\Program Files\\Git\\bin\\git.exe" commit -m "Fix: Return JWT token in login response - resolves 401 auth errors"`, { 
    stdio: 'inherit' 
  });
  console.log('   ✓ Changes committed\n');
  
  // 3. Push to GitHub
  console.log('3. Pushing to GitHub...');
  execSync(`cd "${backendDir}" && "C:\\Program Files\\Git\\bin\\git.exe" push origin master`, { 
    stdio: 'inherit' 
  });
  console.log('   ✓ Pushed to GitHub\n');
  
  console.log('✅ Deployment complete!');
  console.log('\nRender will auto-deploy in 1-2 minutes.');
  console.log('Try logging in at: https://swiftchow.netlify.app/\n');
  
} catch (error) {
  console.error('❌ Error during deployment:', error.message);
  process.exit(1);
}
