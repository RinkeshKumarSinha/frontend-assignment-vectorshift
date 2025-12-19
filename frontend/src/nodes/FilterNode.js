// FilterNode.js
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const FilterNode = ({ id, data }) => {
  const [field, setField] = useState(data?.field || '');
  const [condition, setCondition] = useState(data?.condition || 'equals');
  const [value, setValue] = useState(data?.value || '');

  return (
    <BaseNode
      id={id}
      data={data}
      title="Filter"
      handles={[
        { type: 'target', position: Position.Left, id: 'input' },
        { type: 'source', position: Position.Right, id: 'output' }
      ]}
    >
      <label>
        Field:
        <input type="text" value={field} onChange={(e) => setField(e.target.value)} />
      </label>
      <label>
        Condition:
        <select value={condition} onChange={(e) => setCondition(e.target.value)}>
          <option value="equals">Equals</option>
          <option value="contains">Contains</option>
          <option value="greater">Greater Than</option>
          <option value="less">Less Than</option>
        </select>
      </label>
      <label>
        Value:
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      </label>
    </BaseNode>
  );
};
