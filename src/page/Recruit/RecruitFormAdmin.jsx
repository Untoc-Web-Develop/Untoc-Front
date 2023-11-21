import React from 'react';

import PropTypes from 'prop-types';
import { CiSquarePlus } from 'react-icons/ci';

const RecruitFormAdmin = ({ applyQuestions, setApplyQuestions }) => {
  const addQuestion = () => {
    setApplyQuestions([
      ...applyQuestions,
      {
        id: `${Math.random() * 100000}`,
        question: '',
        content: '',
      },
    ]);
  };

  const removeQuestion = (index) => {
    setApplyQuestions(applyQuestions.filter((applyQuestion, idx) => idx !== index));
  };

  return (
    <>
      {applyQuestions.map((applyQuestion, idx) => {
        const { id, question, content } = applyQuestion;
        return (
          <div className="w-full h-32 mb-8">
            <label htmlFor={id}>
              <div className="flex justify-between">
                <input
                  className="relative w-9/12 mb-3 border-b-2 border-borderColor focus:outline-none focus:border-b-grayDark"
                  value={question}
                  onChange={(e) => {
                    setApplyQuestions([
                      ...applyQuestions.slice(0, idx),
                      { id, question: e.target.value, content },
                      ...applyQuestions.slice(idx + 1),
                    ]);
                  }}
                  placeholder="목록 제목을 입력해주세요"
                />
                <div className="flex justify-end w-1/6 h-full">
                  <button
                    className="w-full font-bold border-2 rounded border-error text-error"
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
                className="w-full p-1 border-2 resize-none h-2/3 border-borderColor focus:outline-none focus:border-grayDark"
                onChange={(e) => {
                  setApplyQuestions([
                    ...applyQuestions.slice(0, idx),
                    { id, content: e.target.value, question },
                    ...applyQuestions.slice(idx + 1),
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
        <CiSquarePlus size={32} className="mr-2 text-grayDark" />
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
};

export default RecruitFormAdmin;
