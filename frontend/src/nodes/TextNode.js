// textNode.js
import { useState, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [handles, setHandles] = useState([]);
  const textareaRef = useRef(null);

  // Auto-resize logic
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  // Variable parsing logic
  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = [...currText.matchAll(regex)];
    const variables = matches.map(match => match[1]);
    
    // Create handles for each unique variable
    const uniqueVars = [...new Set(variables)];
    
    const newHandles = uniqueVars.map((v, i) => ({
      type: 'target',
      position: Position.Left,
      id: v,
      style: { top: `${(i + 1) * (100 / (uniqueVars.length + 1))}%` } // Distribute evenly
    }));

    // Add the output handle
    newHandles.push({ type: 'source', position: Position.Right, id: 'output' });

    setHandles(newHandles);
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      title="Text"
      handles={handles}
    >
      <label>
        Text:
        <textarea 
          ref={textareaRef}
          value={currText} 
          onChange={handleTextChange}
          style={{ overflow: 'hidden', resize: 'none', minHeight: '30px' }}
        />
      </label>
    </BaseNode>
  );
}