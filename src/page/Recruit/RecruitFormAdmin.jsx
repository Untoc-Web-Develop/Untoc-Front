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
        content: '',
      },
    ]);
  };

  const removeQuestion = (index) => {
    setIsChanged(true);
    setApplyQuestions((prev) => {
      prev.filter((applyQuestion, idx) => idx !== index);
    });
  };

  return (
    <>
      {applyQuestions.map(({ id, question, content }, idx) => {
        return (
          <div className="w-full h-32 mb-8" key={id}>
            <label htmlFor={id}>
              <div className="flex justify-between">
                <input
                  className="relative w-9/12 p-1 px-3 mb-3 border-b-2 border-borderColor focus:outline-none focus:border-b-grayDark text-grayDark"
                  value={question}
                  onChange={(e) => {
                    setIsChanged(true);
                    setApplyQuestions((prev) => [
                      ...prev.slice(0, idx),
                      { id, question: e.target.value, content },
                      ...prev.slice(idx + 1),
                    ]);
                  }}
                  placeholder="목록 제목을 입력해주세요"
                />
                <div className="flex justify-end w-1/6 h-full">
                  <button
                    className="w-full font-bold border rounded border-error text-error"
                    type="button"
                    onClick={() => removeQuestion(idx)}
                  >
                    삭제
                  </button>
                </div>
              </div>
              <textarea
                type="text"
                name={id}
                id={id}
                value={content}
                className="w-full p-3 border resize-none h-2/3 border-borderColor focus:outline-none focus:border-grayDark text-grayDark"
                onChange={(e) => {
                  setIsChanged(true);
                  setApplyQuestions((prev) => [
                    ...prev.slice(0, idx),
                    { id, content: e.target.value, question },
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
        className="flex items-center justify-start w-1/3 text-placeHolder hover:underline"
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
      content: PropTypes.string,
    }),
  ).isRequired,
  setApplyQuestions: PropTypes.func.isRequired,
  setIsChanged: PropTypes.func.isRequired,
};

export default RecruitFormAdmin;
