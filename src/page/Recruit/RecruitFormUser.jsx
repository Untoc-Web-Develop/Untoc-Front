import React from 'react';

import PropTypes from 'prop-types';

const RecruitFormUser = ({ applyQuestions }) => {
  return (
    <>
      {applyQuestions.map(({ id, question, content }) => {
        return (
          <div className="mb-8 h-32 w-full" key={id}>
            <label htmlFor={id}>
              <p className="relative mb-3 text-grayDark">{question}</p>
              <textarea
                type="text"
                name={id}
                id={id}
                placeholder={content}
                className="h-2/3 w-full resize-none border border-borderColor p-3 text-grayDark focus:border-grayDark focus:outline-none"
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
