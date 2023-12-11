import React from 'react';

export const AboutImageEnd = ({ width, delay, src, style }) => {
  return (
    <div className="col-6 text-end">
      <img
        className={`img-fluid rounded ${width} wow zoomIn`}
        data-wow-delay={delay}
        src={src}
      />
    </div>
  );
};
