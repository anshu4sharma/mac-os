import React from "react";
import Draggable from "react-draggable";

const MakeDraggable = ({ children }: { children: React.ReactNode }) => {
  return (
    <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      position={null as any}
      grid={[25, 25]}
      scale={1}
      // onStart={handleStart}
      // onDrag={handleDrag}
      // onStop={handleStop}
    >
      {children}
    </Draggable>
  );
};

export default MakeDraggable;

