import React from 'react';

const Slide = ({title, subtitle, children}) => (
  <div className="slide">
    {title && <h1 className="slide-title">{title}</h1>}
    {subtitle && <div className="slide-subtitle">{subtitle}</div>}
    <div className="slide-content">{children}</div>
  </div>
);

export default Slide;
