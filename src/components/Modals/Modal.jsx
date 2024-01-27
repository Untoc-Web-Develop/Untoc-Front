import React from 'react';

import PropTypes from 'prop-types';

const Modal = ({ children, isOpen, setIsOpen, onClose, outsideClose }) => {
  const handleClose = () => {
    onClose();
    setIsOpen(false);
  };

  if (!isOpen) return null;
  return (
    <div
      aria-hidden="true"
      onClick={outsideClose ? handleClose : () => {}}
      className="z-[999] h-screen w-screen fixed top-0 left-0 flex flex-col justify-center items-center bg-opacity-50 bg-black"
    >
      <div aria-hidden="true" onClick={(e) => e.stopPropagation()} className="h-60 w-[28rem] bg-white shadow-xl">
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
};

Modal.defaultProps = {
  onClose: () => {},
  outsideClose: false,
};

export default Modal;
