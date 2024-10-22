#!/bin/bash
# run cmd - bash init.sh

if [ -f "client/package.json" ]; then
   echo "Installing frontend dependencies..."
   npm install --prefix client
   npm run dev --prefix client &
else
   echo "Frontend package.json not found"
fi

# Check and install backend dependencies
if [ -f "server/package.json" ]; then
   echo "Setting up Node environment and installing backend dependencies..."
   npm install --prefix server
   npm run dev --prefix server &
else
   echo "Backend package.json not found"
fi

wait
