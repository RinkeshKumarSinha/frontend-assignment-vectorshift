// submit.js
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
});

export const SubmitButton = () => {
    const { nodes, edges } = useStore(selector, shallow);

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            alert(
                `Pipeline Analysis:
` +
                `Number of Nodes: ${data.num_nodes}
` +
                `Number of Edges: ${data.num_edges}
` +
                `Is DAG: ${data.is_dag}`
            );
        } catch (error) {
            console.error('Error submitting pipeline:', error);
            alert('Failed to submit pipeline. Check console for details.');
        }
    };

    return (
        <div className="submit-button-container">
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    );
}
