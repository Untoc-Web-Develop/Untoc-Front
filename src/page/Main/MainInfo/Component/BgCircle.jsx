import React from 'react';

import PropTypes from 'prop-types';

const BgCircle = ({ position, XLsize, Msize }) => {
  // console.log('Aaa : ', position, ' , ', XLsize, ' : ', Msize);
  return (
    <div
      // className={`absolute ${position} xl:w-${XLsize} xl:h-${XLsize} md:w-${Msize} md:h-${Msize} bg-gradient-to-b from-white to-opacity-20 backdrop-blur rounded-full1 overflow-hidden`}
      className={`absolute ${position} xl:w-${XLsize} xl:h-${XLsize}  md:w-${Msize} md:h-${Msize} bg-gradient-to-b from-white to-opacity-20 backdrop-blur rounded-full overflow-hidden`}
    />
  );
};

BgCircle.propTypes = {
  position: PropTypes.string.isRequired,
  XLsize: PropTypes.string.isRequired,
  Msize: PropTypes.string.isRequired,
};

export default BgCircle;
