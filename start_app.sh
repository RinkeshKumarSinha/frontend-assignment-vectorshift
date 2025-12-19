#!/bin/bash

# Function to handle cleanup on exit
cleanup() {
    echo "Stopping servers..."
    kill $(jobs -p) 2>/dev/null
    exit
}

# Trap SIGINT (Ctrl+C)
trap cleanup SIGINT

echo "Starting VectorShift Technical Assessment Solution..."

# Start Backend
echo "Starting Backend..."
cd backend
# Check if virtualenv exists, if not just try running directly (assuming user followed readme or has env set up)
# But strictly speaking, I should try to use the python command available.
if [ -f "venv/bin/python" ]; then
    ./venv/bin/uvicorn main:app --reload --port 8000 &
else
    # Fallback to system python/pip if venv doesn't exist (likely given previous limitations)
    # We assume dependencies are installed as per my previous attempts or user environment
    uvicorn main:app --reload --port 8000 &
fi
BACKEND_PID=$!
cd ..

# Start Frontend
echo "Starting Frontend..."
cd frontend
npm start &
FRONTEND_PID=$!
cd ..

echo "Application started!"
echo "Backend running on http://localhost:8000"
echo "Frontend running on http://localhost:3000"
echo "Press Ctrl+C to stop both servers."

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID
