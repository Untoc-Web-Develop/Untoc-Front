import React from 'react';

import PropTypes from 'prop-types';
import { CiSquarePlus } from 'react-icons/ci';

const RecruitFormAdmin = ({ applyQuestions, setApplyQuestions, onSave }) => {
  const addQuestion = () => {
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
    setApplyQuestions((prev) => prev.filter((applyQuestion) => applyQuestion.id !== id));
  };

  return (
    <form className="relative h-fit w-full rounded-3xl bg-white p-12 text-sm font-normal shadow-lg">
      <div className="absolute -top-11 left-0 flex h-16 w-52 items-center justify-center rounded-t-xl bg-white text-lg text-yellowPoint">
        Fill out this form
      </div>
      <div className="relative flex h-full w-full flex-col items-center justify-between">
        <div className="h-5/6 w-full">
          <div className="mb-3 grid h-24 w-full grid-cols-2">
            <label htmlFor="studentId" className="w-11/12">
              <p className="mb-3 text-grayDark">학번</p>
              <input
                type="text"
                name="studentId"
                id="studentId"
                placeholder={`${new Date().getFullYear().toString().padEnd(9, 0)} (9자리)`}
                className="w-full border border-borderColor p-1 px-3 focus:border-grayDark focus:outline-none"
                disabled
              />
            </label>
            <label htmlFor="name" className="w-11/12 justify-self-end">
              <p className="mb-3 text-grayDark">이름</p>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="언톡"
                className="w-full border border-borderColor p-1 px-3 focus:border-grayDark focus:outline-none"
                disabled
              />
            </label>
          </div>
          <div className="mb-3 h-24 w-full">
            <label htmlFor="email">
              <p className="mb-3 text-grayDark">부산대 이메일</p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="untoc@pusan.ac.kr"
                className="w-full border border-borderColor p-1 px-3 focus:border-grayDark focus:outline-none"
                disabled
              />
            </label>
          </div>
          <div className="mb-3 h-24 w-full">
            <label htmlFor="phone">
              <p className="mb-3 text-grayDark">전화번호</p>
              <input
                type="text"
                name="phone-number"
                id="phone"
                placeholder="010-0000-0000"
                className="w-full border border-borderColor p-1 px-3 focus:border-grayDark focus:outline-none"
                disabled
              />
            </label>
          </div>
        </div>

        {applyQuestions?.map(({ id, question, description }, idx) => {
          return (
            <div className="mb-8 h-32 w-full" key={id}>
              <label htmlFor={id}>
                <div className="flex justify-between">
                  <input
                    className="relative mb-3 w-9/12 border-b-2 border-borderColor p-1 px-3 text-grayDark focus:border-b-grayDark focus:outline-none"
                    value={question}
                    onChange={(e) => {
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
          <p className="h-full hover:underline">질문 목록 추가</p>
        </button>
        <div className="flex h-1/6 w-full items-center justify-end">
          {/* <button
            type="button"
            className="h-7 w-1/4 rounded border border-borderColor text-grayDark hover:cursor-pointer"
          >
            취소
          </button> */}
          <button
            type="button"
            className="ml-3 h-7 w-1/4 rounded border border-yellowPoint bg-yellowPoint text-white hover:cursor-pointer"
            onClick={onSave}
          >
            저장
          </button>
        </div>
      </div>
    </form>
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
  onSave: PropTypes.func.isRequired,
};

export default RecruitFormAdmin;
