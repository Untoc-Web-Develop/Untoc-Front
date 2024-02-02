import React from 'react';

import PropTypes from 'prop-types';

import Modal from './Modal';

const ConfirmModal = ({
  children,
  isOpen,
  setIsOpen,
  onClose,
  outsideClose,
  closeBtnText,
  confirmBtnText,
  onConfirm,
}) => {
  const handleClose = () => {
    onClose();
    setIsOpen(false);
  };

  const handleConfirm = () => {
    onConfirm();
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} outsideClose={outsideClose} onClose={onClose}>
      <div className="flex h-full w-full flex-col items-end justify-center">
        <div className="text-md flex h-3/4 w-full items-center justify-center font-bold text-grayDark">{children}</div>
        <div className="flex h-1/4 w-3/5 items-start justify-center">
          <button
            className="text-md mr-3 h-1/2 w-1/3 rounded-lg border border-borderColor font-bold text-grayDark"
            type="button"
            onClick={handleClose}
          >
            {closeBtnText}
          </button>
          <button
            className="text-md h-1/2 w-1/3 rounded-lg border border-yellowPoint font-bold text-yellowPoint"
            type="button"
            onClick={handleConfirm}
          >
            {confirmBtnText}
          </button>
        </div>
      </div>
    </Modal>
  );
};

ConfirmModal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  outsideClose: PropTypes.bool,
  closeBtnText: PropTypes.string,
  confirmBtnText: PropTypes.string,
  onConfirm: PropTypes.func,
};

ConfirmModal.defaultProps = {
  onClose: () => {},
  outsideClose: false,
  closeBtnText: '취소',
  confirmBtnText: '확인',
  onConfirm: () => {},
};

export default ConfirmModal;
