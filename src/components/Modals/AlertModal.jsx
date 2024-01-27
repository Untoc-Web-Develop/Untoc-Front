import React from 'react';

import PropTypes from 'prop-types';

import Modal from './Modal';

const AlertModal = ({ children, isOpen, setIsOpen, onClose, outsideClose, closeBtnText }) => {
  const handleClose = () => {
    onClose();
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose} outsideClose={outsideClose}>
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="h-3/4 w-full text-grayDark font-bold text-md flex justify-center items-center">{children}</div>
        <div className="h-1/4 w-full flex justify-center items-center">
          <button
            className="h-1/2 w-1/5 rounded-lg border border-yellowPoint text-yellowPoint font-bold text-md"
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
};

AlertModal.defaultProps = {
  outsideClose: false,
  onClose: () => {},
  closeBtnText: '확인',
};

export default AlertModal;
