// TransformNode.js
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TransformNode = ({ id, data }) => {
  const [transformType, setTransformType] = useState(data?.transformType || 'uppercase');

  return (
    <BaseNode
      id={id}
      data={data}
      title="Transform"
      handles={[
        { type: 'target', position: Position.Left, id: 'input' },
        { type: 'source', position: Position.Right, id: 'output' }
      ]}
    >
      <label>
        Type:
        <select value={transformType} onChange={(e) => setTransformType(e.target.value)}>
          <option value="uppercase">To Uppercase</option>
          <option value="lowercase">To Lowercase</option>
          <option value="trim">Trim Whitespace</option>
        </select>
      </label>
    </BaseNode>
  );
};
