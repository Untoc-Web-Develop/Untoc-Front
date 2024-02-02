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
      className="fixed left-0 top-0 z-[999] flex h-screen w-screen flex-col items-center justify-center bg-black bg-opacity-50"
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
