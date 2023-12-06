import React from 'react';

import PropTypes from 'prop-types';

import Modal from './Modal';

const ConfirmModal = ({ children, isOpen, setIsOpen, outsideClose, closeText, confirmText, confirmEvent }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} outsideClose={outsideClose}>
      <div className="h-full w-full flex flex-col justify-center items-end">
        <div className="h-3/4 w-full text-grayDark font-bold text-md flex justify-center items-center">{children}</div>
        <div className="h-1/4 w-3/5 flex justify-center items-start">
          <button
            className="h-1/2 w-1/3 rounded-lg border border-borderColor text-grayDark font-bold text-md mr-3"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            {closeText}
          </button>
          <button
            className="h-1/2 w-1/3 rounded-lg border border-yellowPoint text-yellowPoint font-bold text-md"
            type="button"
            onClick={() => {
              setIsOpen(false);
              confirmEvent();
            }}
          >
            {confirmText}
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
  outsideClose: PropTypes.bool,
  closeText: PropTypes.string,
  confirmText: PropTypes.string,
  confirmEvent: PropTypes.func,
};

ConfirmModal.defaultProps = {
  outsideClose: false,
  closeText: '취소',
  confirmText: '확인',
  confirmEvent: () => {},
};

export default ConfirmModal;
