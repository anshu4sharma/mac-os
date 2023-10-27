import React from "react";
import Draggable from "react-draggable";

const MakeDraggable = ({ children }: { children: React.ReactNode }) => {
    // Calculate the initial position to center the element in the window
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const elementWidth = 576; // Change this to the width of your draggable element
    const elementHeight = 256; // Change this to the height of your draggable element
    const initialX = (windowWidth - elementWidth) / 2;
    const initialY = (windowHeight - elementHeight) / 2;
  return (
    <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{ x: initialX, y: initialY }}
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

