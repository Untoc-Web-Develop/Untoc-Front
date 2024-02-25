import React from 'react';

import PropTypes from 'prop-types';
import { CiSquarePlus } from 'react-icons/ci';

const RecruitFormAdmin = ({ applyQuestions, setApplyQuestions, setIsChanged }) => {
  const addQuestion = () => {
    setIsChanged(true);
    setApplyQuestions((prev) => [
      ...prev,
      {
        id: `${Math.random() * 100000}`,
        question: '',
        description: '',
      },
    ]);
  };

  const removeQuestion = (id) => {
    setIsChanged(true);
    setApplyQuestions((prev) => prev.filter((applyQuestion) => applyQuestion.id !== id));
  };

  return (
    <>
      {applyQuestions?.map(({ id, question, description }, idx) => {
        return (
          <div className="mb-8 h-32 w-full" key={id}>
            <label htmlFor={id}>
              <div className="flex justify-between">
                <input
                  className="relative mb-3 w-9/12 border-b-2 border-borderColor p-1 px-3 text-grayDark focus:border-b-grayDark focus:outline-none"
                  value={question}
                  onChange={(e) => {
                    setIsChanged(true);
                    setApplyQuestions((prev) => [
                      ...prev.slice(0, idx),
                      { id, question: e.target.value, description },
                      ...prev.slice(idx + 1),
                    ]);
                  }}
                  placeholder="목록 제목을 입력해주세요"
                />
                <div className="flex h-full w-1/6 justify-end">
                  <button
                    className="w-full rounded border border-error font-bold text-error"
                    type="button"
                    onClick={() => removeQuestion(id)}
                  >
                    삭제
                  </button>
                </div>
              </div>
              <textarea
                type="text"
                name={id}
                id={id}
                value={description}
                className="h-2/3 w-full resize-none border border-borderColor p-3 text-grayDark focus:border-grayDark focus:outline-none"
                onChange={(e) => {
                  setIsChanged(true);
                  setApplyQuestions((prev) => [
                    ...prev.slice(0, idx),
                    { id, description: e.target.value, question },
                    ...prev.slice(idx + 1),
                  ]);
                }}
                placeholder="목록에 대한 설명을 입력해주세요"
              />
            </label>
          </div>
        );
      })}
      <button
        type="button"
        className="flex w-1/3 items-center justify-start text-placeHolder hover:underline"
        onClick={addQuestion}
      >
        <CiSquarePlus size={32} className="mr-2 text-placeHolder" />
        <p className="h-full hover:underline">지원서 목록 추가</p>
      </button>
    </>
  );
};

RecruitFormAdmin.propTypes = {
  applyQuestions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      question: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
  setApplyQuestions: PropTypes.func.isRequired,
  setIsChanged: PropTypes.func.isRequired,
};

export default RecruitFormAdmin;
