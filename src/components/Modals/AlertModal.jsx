import React from 'react';

import PropTypes from 'prop-types';

import Modal from './Modal';

const AlertModal = ({ children, isOpen, setIsOpen, outsideClose, closeText }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} outsideClose={outsideClose}>
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="h-3/4 w-full text-grayDark font-bold text-md flex justify-center items-center">{children}</div>
        <div className="h-1/4 w-full flex justify-center items-center">
          <button
            className="h-1/2 w-1/5 rounded-lg border border-yellowPoint text-yellowPoint font-bold text-md"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            {closeText}
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
  outsideClose: PropTypes.bool,
  closeText: PropTypes.string,
};

AlertModal.defaultProps = {
  outsideClose: false,
  closeText: '확인',
};

export default AlertModal;
