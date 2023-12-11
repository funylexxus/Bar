import React from 'react';

export const AboutImage = ({ width, delay, src, style }) => {
  return (
    <div className="col-6 text-start">
      <img
        className={`img-fluid rounded ${width} wow zoomIn`}
        data-wow-delay={delay}
        src={src}
        style={style}
      />
    </div>
  );
};

// function functionName() {
//   //function code
// }

// export const functionName = () => {
//   // function code
// };
