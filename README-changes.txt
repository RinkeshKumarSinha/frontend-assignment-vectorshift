# VectorShift Frontend Technical Assessment - Implementation Summary

## Task 1: Node Abstraction
**Goal:** Create a reusable abstraction for nodes to avoid code duplication and simplify maintenance.

**Implementation:**
- **Base Component:** Created `BaseNode.js` to serve as a skeleton for all nodes. It handles the common layout (container, header, body) and dynamic handle rendering.
- **Refactoring:** Updated existing nodes (`InputNode`, `OutputNode`, `LLMNode`, `TextNode`) to wrapping their unique logic inside the `BaseNode` component.
- **Configuration:** Instead of hardcoding handles, nodes now pass a configuration array (type, position, id) to `BaseNode`, which renders them automatically.
- **New Nodes:** Leveraged this abstraction to quickly create 5 new node types (`Filter`, `Transform`, `API`, `Database`, `Note`) with minimal code.

## Task 2: Styling
**Goal:** Apply a unified, visually appealing design to the application.

**Implementation:**
- **Centralized CSS:** Moved all inline styles to `index.css` to ensure consistency and maintainability.
- **Visual Design:** Implemented a clean, modern aesthetic using a neutral color palette, soft shadows, and rounded corners for nodes.
- **UI Elements:** Styled the toolbar items (`.draggable-node`) and the submit button with hover effects and transitions to improve user interactivity.
- **Standard Classes:** Defined reusable CSS classes (`.custom-node`, `.custom-node-header`) that apply automatically via the `BaseNode` abstraction.

## Task 3: Text Node Logic
**Goal:** Enhance the Text Node with auto-resizing and dynamic variable support.

**Implementation:**
- **Auto-Resizing:** Used a `useEffect` hook to monitor the text content. When text changes, the textarea's height is reset and then immediately adjusted to its scrollHeight, ensuring it grows to fit the content.
- **Variable Detection:** Implemented a Regular Expression (`/\{\{\s*variable\s*\}\}/`) to parse the text for variables enclosed in double curly braces.
- **Dynamic Handles:** Extracted unique variable names and dynamically generated a list of "target" handles. These are passed to `BaseNode`, which renders them on the left side of the node, distributed evenly.

## Task 4: Backend Integration
**Goal:** Connect the frontend to a Python backend to analyze the pipeline (count elements and check for DAG validity).

**Implementation:**
- **Backend API:** Created a `/pipelines/parse` endpoint in FastAPI that accepts the node and edge data.
- **DAG Algorithm:** Implemented Kahn's Algorithm in Python to determine if the graph is a Directed Acyclic Graph (DAG). It calculates in-degrees and attempts to topologically sort the nodes; if all nodes are visited, the graph is acyclic.
- **Frontend Submission:** Created a `SubmitButton` component that retrieves the current flow state (nodes and edges) from the Zustand store.
- **Communication:** configured the frontend to send a POST request to the backend and display the results (Number of Nodes, Number of Edges, Is DAG) in a user-friendly browser alert.
