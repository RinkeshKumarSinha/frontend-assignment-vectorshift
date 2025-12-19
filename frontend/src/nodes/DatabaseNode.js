// DatabaseNode.js
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const DatabaseNode = ({ id, data }) => {
  const [query, setQuery] = useState(data?.query || 'SELECT * FROM users');

  return (
    <BaseNode
      id={id}
      data={data}
      title="Database Query"
      handles={[
        { type: 'target', position: Position.Left, id: 'params' },
        { type: 'source', position: Position.Right, id: 'result' }
      ]}
    >
      <label>
        Query:
        <textarea 
          value={query} 
          onChange={(e) => setQuery(e.target.value)}
          style={{ minHeight: '60px', fontFamily: 'monospace' }} 
        />
      </label>
    </BaseNode>
  );
};
