# Solution Overview

## Part 1: Node Abstraction
- Created a `BaseNode` component (`frontend/src/nodes/BaseNode.js`) to encapsulate common styling and behavior.
- Refactored `InputNode`, `OutputNode`, `LLMNode`, and `TextNode` to use `BaseNode`.
- Created 5 new nodes demonstrating the abstraction:
    - `FilterNode`
    - `TransformNode`
    - `APINode`
    - `DatabaseNode`
    - `NoteNode`

## Part 2: Styling
- Updated `frontend/src/index.css` with a clean, unified design for nodes, handles, and form elements.

## Part 3: Text Node Logic
- Updated `TextNode` to support:
    - **Auto-resizing:** The textarea grows as you type.
    - **Variables:** detecting `{{variableName}}` creates a new input handle dynamically.

## Part 4: Backend Integration
- **Backend:** Updated `backend/main.py` to:
    - Accept pipeline data (nodes and edges).
    - Calculate the number of nodes and edges.
    - Check if the pipeline is a DAG (Directed Acyclic Graph).
    - Enabled CORS for frontend communication.
- **Frontend:** Updated `frontend/src/submit.js` to:
    - Send the pipeline state to the backend.
    - Display the results (Number of Nodes, Edges, and DAG status) in an alert.

## How to Run
1.  **Frontend:**
    ```bash
    cd frontend
    npm install
    npm start
    ```
2.  **Backend:**
    ```bash
    cd backend
    # Ensure fastapi and uvicorn are installed
    pip install fastapi uvicorn
    uvicorn main:app --reload
    ```
