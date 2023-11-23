import React from 'react';

import PropTypes from 'prop-types';

const RecruitFormUser = ({ applyQuestions }) => {
  return (
    <>
      {applyQuestions.map(({ id, question, content }) => {
        return (
          <div className="w-full h-32 mb-8" key={id}>
            <label htmlFor={id}>
              <p className="relative mb-3 text-grayDark">{question}</p>
              <textarea
                type="text"
                name={id}
                id={id}
                placeholder={content}
                className="w-full p-1 border-2 resize-none h-2/3 border-borderColor focus:outline-none focus:border-grayDark text-grayDark"
              />
            </label>
          </div>
        );
      })}
    </>
  );
};

RecruitFormUser.propTypes = {
  applyQuestions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      question: PropTypes.string,
      content: PropTypes.string,
    }),
  ).isRequired,
};

export default RecruitFormUser;
