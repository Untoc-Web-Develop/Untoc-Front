import React from 'react';

import PropTypes from 'prop-types';

const RecruitFormUser = ({ applyQuestions, setApplyQuestions }) => {
  return (
    <>
      {applyQuestions.map(({ id, question, description, value }, idx) => {
        return (
          <div className="mb-8 h-32 w-full" key={id}>
            <label htmlFor={id}>
              <p className="relative mb-3 text-grayDark">{question}</p>
              <textarea
                type="text"
                name={id}
                id={id}
                placeholder={description}
                className="h-2/3 w-full resize-none border border-borderColor p-3 text-grayDark focus:border-grayDark focus:outline-none"
                value={value}
                onChange={(e) => {
                  setApplyQuestions((prev) => [
                    ...prev.slice(0, idx),
                    { id, description, question, value: e.target.value },
                    ...prev.slice(idx + 1),
                  ]);
                }}
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
      description: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  setApplyQuestions: PropTypes.func.isRequired,
};

export default RecruitFormUser;
