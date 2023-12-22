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
      <div className="h-full w-full flex flex-col justify-center items-end">
        <div className="h-3/4 w-full text-grayDark font-bold text-md flex justify-center items-center">{children}</div>
        <div className="h-1/4 w-3/5 flex justify-center items-start">
          <button
            className="h-1/2 w-1/3 rounded-lg border border-borderColor text-grayDark font-bold text-md mr-3"
            type="button"
            onClick={handleClose}
          >
            {closeBtnText}
          </button>
          <button
            className="h-1/2 w-1/3 rounded-lg border border-yellowPoint text-yellowPoint font-bold text-md"
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
