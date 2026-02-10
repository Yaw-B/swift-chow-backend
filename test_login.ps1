# Test login endpoint
$uri = "https://swift-chow-backend.onrender.com/api/auth/login"

# Test 1: Non-existent user
Write-Host "Test 1: Non-existent user" -ForegroundColor Yellow
$body1 = @{email = "test@example.com"; password = "password123"} | ConvertTo-Json
try {
    $response = Invoke-WebRequest -Uri $uri -Method POST -ContentType "application/json" -Body $body1 -ErrorAction Stop
    Write-Host "SUCCESS: $($response.StatusCode)" -ForegroundColor Green
    $response.Content | ConvertFrom-Json | ConvertTo-Json
} catch {
    $statusCode = $_.Exception.Response.StatusCode.value__
    $streamReader = [System.IO.StreamReader]::new($_.Exception.Response.GetResponseStream())
    $errorBody = $streamReader.ReadToEnd()
    Write-Host "ERROR: Status $statusCode" -ForegroundColor Red
    $errorBody | ConvertFrom-Json | ConvertTo-Json
}

# Test 2: Try with common demo credentials
Write-Host "`nTest 2: Common test user (demo@test.com)" -ForegroundColor Yellow
$body2 = @{email = "demo@test.com"; password = "password"} | ConvertTo-Json
try {
    $response = Invoke-WebRequest -Uri $uri -Method POST -ContentType "application/json" -Body $body2 -ErrorAction Stop
    Write-Host "SUCCESS: $($response.StatusCode)" -ForegroundColor Green
    $response.Content | ConvertFrom-Json | ConvertTo-Json
} catch {
    $statusCode = $_.Exception.Response.StatusCode.value__
    $streamReader = [System.IO.StreamReader]::new($_.Exception.Response.GetResponseStream())
    $errorBody = $streamReader.ReadToEnd()
    Write-Host "ERROR: Status $statusCode" -ForegroundColor Red
    $errorBody
}

# Test 3: Health check
Write-Host "`nTest 3: Health check" -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "https://swift-chow-backend.onrender.com/api/health" -Method GET -ErrorAction Stop
    Write-Host "SUCCESS: $($response.StatusCode)" -ForegroundColor Green
    $response.Content | ConvertFrom-Json | ConvertTo-Json
} catch {
    Write-Host "ERROR: $($_.Exception.Message)" -ForegroundColor Red
}
