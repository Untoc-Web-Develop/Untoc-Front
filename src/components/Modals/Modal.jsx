import React, { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';

const Modal = ({ children, isOpen, setIsOpen, outsideClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (outsideClose) document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [modalRef, setIsOpen]);

  if (!isOpen) return null;
  return (
    <div className="z-[999] h-screen w-screen fixed top-0 left-0 flex flex-col justify-center items-center bg-opacity-50 bg-black">
      <div ref={modalRef} className="h-60 w-[28rem] bg-white shadow-xl">
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  outsideClose: PropTypes.bool,
};

Modal.defaultProps = {
  outsideClose: false,
};

export default Modal;
