import React from 'react';

import PropTypes from 'prop-types';

const ApplyForm = ({ question, value }) => {
  return (
    <div className="mb-3 w-full">
      <h3 className="mb-3 text-grayDark">{question}</h3>
      <p className="w-full border border-borderColor p-1 px-3 text-gray-400 focus:border-grayDark focus:outline-none">
        {value}
      </p>
    </div>
  );
};

ApplyForm.propTypes = {
  question: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default ApplyForm;
