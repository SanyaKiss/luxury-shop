import React from 'react';

import '../scss/sections/Heading.scss';

type HeadingProps = {
  text: string;
};

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <div className="heading">
      <h2 className="heading__title">{text}</h2>
    </div>
  );
};

export default Heading;
