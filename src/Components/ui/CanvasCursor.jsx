'use client';
import React, { useEffect } from 'react';
import useCanvasCursor from '../../hooks/use-canvasCursor';

const CanvasCursor = () => {
  useCanvasCursor();

  return (
    <canvas 
      id="canvas" 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999
      }}
    />
  );
};

export default CanvasCursor; 