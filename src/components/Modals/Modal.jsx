import React from 'react';

import PropTypes from 'prop-types';

const sizeMap = {
  sm: {
    height: 'h-60',
    width: 'w-[28rem]',
  },
  md: {
    height: 'h-96',
    width: 'w-[36rem]',
  },
  lg: {
    height: 'h-3/4',
    width: 'w-2/3',
  },
};

const Modal = ({ children, isOpen, setIsOpen, onClose, outsideClose, size }) => {
  const { height, width } = sizeMap[size];

  const handleClose = () => {
    onClose();
    setIsOpen(false);
  };

  if (!isOpen) return null;
  return (
    <div
      aria-hidden="true"
      onClick={outsideClose ? handleClose : () => {}}
      className="fixed left-0 top-0 z-[999] flex h-screen w-screen flex-col items-center justify-center bg-black bg-opacity-50"
    >
      <div aria-hidden="true" onClick={(e) => e.stopPropagation()} className={`${height} ${width} bg-white shadow-xl`}>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  outsideClose: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

Modal.defaultProps = {
  onClose: () => {},
  outsideClose: false,
  size: 'sm',
};

export default Modal;
