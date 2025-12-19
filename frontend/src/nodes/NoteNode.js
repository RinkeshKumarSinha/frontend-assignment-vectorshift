// NoteNode.js
import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const NoteNode = ({ id, data }) => {
  const [note, setNote] = useState(data?.note || 'Write a note here...');

  return (
    <BaseNode
      id={id}
      data={data}
      title="Note"
      handles={[]} // No handles for a simple note
    >
      <textarea 
        value={note} 
        onChange={(e) => setNote(e.target.value)}
        style={{ minHeight: '80px', background: '#fff9c4', border: 'none' }}
      />
    </BaseNode>
  );
};
