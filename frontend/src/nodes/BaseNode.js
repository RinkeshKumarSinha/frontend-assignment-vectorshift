// BaseNode.js
import { Handle } from 'reactflow';

export const BaseNode = ({ id, data, title, children, handles = [] }) => {
  return (
    <div className="custom-node">
      <div className="custom-node-header">
        <span>{title}</span>
      </div>
      <div className="custom-node-body">
        {children}
      </div>
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
          isConnectable={handle.isConnectable}
        />
      ))}
    </div>
  );
};
