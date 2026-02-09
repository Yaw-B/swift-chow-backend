#!/bin/bash
set -e

# Use npm, not yarn
npm install --production=false

echo "Build completed successfully!"
