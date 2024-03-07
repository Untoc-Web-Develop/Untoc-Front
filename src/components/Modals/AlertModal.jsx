import React from 'react';

import PropTypes from 'prop-types';

import Modal from './Modal';

const AlertModal = ({ children, isOpen, setIsOpen, onClose, outsideClose, closeBtnText, size }) => {
  const handleClose = () => {
    onClose();
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose} outsideClose={outsideClose} size={size}>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="text-md flex h-5/6 w-full items-center justify-center font-bold text-grayDark">{children}</div>
        <div className="flex h-1/6 w-full items-center justify-center">
          <button
            className="text-md h-8 w-1/5 rounded-lg border border-yellowPoint font-bold text-yellowPoint"
            type="button"
            onClick={handleClose}
          >
            {closeBtnText}
          </button>
        </div>
      </div>
    </Modal>
  );
};

AlertModal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  outsideClose: PropTypes.bool,
  closeBtnText: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

AlertModal.defaultProps = {
  outsideClose: false,
  onClose: () => {},
  closeBtnText: '확인',
  size: 'sm',
};

export default AlertModal;
