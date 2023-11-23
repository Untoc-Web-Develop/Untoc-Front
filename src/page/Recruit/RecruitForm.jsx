import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import RecruitFormAdmin from './RecruitFormAdmin';
import RecruitFormUser from './RecruitFormUser';

const RecruitForm = () => {
  const { type: role } = useSelector((state) => state.user);
  const [applyQuestions, setApplyQuestions] = useState([]);
  const [originalApplyQuestions, setOriginalApplyQuestions] = useState([]);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    setOriginalApplyQuestions(() => [
      {
        id: '1',
        question: '동아리 지원 동기 (300자 이내)',
        content: 'UntoC 동아리를 지원하게 된 이유에 대해 설명해주세요.최소 30자 이상의 내용이 필요합니다.',
      },
      {
        id: '2',
        question: '동아리에서 하고 싶은 활동 (300자 이내)',
        content:
          'UntoC 동아리에 들어오게 된다면 하고싶은 활동에 대해 적어주세요.위 내용을 바탕으로 동아리에 기여할 수 있는 아이디어를 제공하고,스터디 및 팀을 구성할 때 참고자료가 될 수 있습니다.',
      },
    ]);
    setApplyQuestions(() => [
      {
        id: '1',
        question: '동아리 지원 동기 (300자 이내)',
        content: 'UntoC 동아리를 지원하게 된 이유에 대해 설명해주세요.최소 30자 이상의 내용이 필요합니다.',
      },
      {
        id: '2',
        question: '동아리에서 하고 싶은 활동 (300자 이내)',
        content:
          'UntoC 동아리에 들어오게 된다면 하고싶은 활동에 대해 적어주세요.위 내용을 바탕으로 동아리에 기여할 수 있는 아이디어를 제공하고,스터디 및 팀을 구성할 때 참고자료가 될 수 있습니다.',
      },
    ]);
  }, []);

  return (
    <form className="relative w-full p-12 text-sm font-normal bg-white shadow-lg h-fit rounded-3xl">
      <div className="absolute left-0 flex items-center justify-center h-16 text-lg bg-white w-52 -top-11 rounded-t-xl text-yellowPoint">
        Fill out this form
      </div>
      <div className="relative flex flex-col items-center justify-between w-full h-full">
        <div className="w-full h-5/6">
          <div className="grid w-full h-24 grid-cols-2 mb-3">
            <label htmlFor="studentId" className="w-60">
              <p className="mb-3 text-grayDark">학번</p>
              <input
                type="text"
                name="studentId"
                id="studentId"
                placeholder="20230001"
                className="w-full p-1 border-2 border-borderColor focus:outline-none focus:border-grayDark"
                disabled={role === 'admin'}
              />
            </label>
            <label htmlFor="name" className="w-60">
              <p className="mb-3 text-grayDark">이름</p>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="홍길동"
                className="w-full p-1 border-2 border-borderColor focus:outline-none focus:border-grayDark"
                disabled={role === 'admin'}
              />
            </label>
          </div>
          <div className="w-full h-24 mb-3">
            <label htmlFor="phone">
              <p className="mb-3 text-grayDark">전화번호</p>
              <input
                type="text"
                name="phone-number"
                id="phone"
                placeholder="010-1234-5678"
                className="w-full p-1 border-2 border-borderColor focus:outline-none focus:border-grayDark"
                disabled={role === 'admin'}
              />
            </label>
          </div>
          {role === 'admin' ? (
            <RecruitFormAdmin
              applyQuestions={applyQuestions}
              setApplyQuestions={setApplyQuestions}
              setIsChanged={setIsChanged}
            />
          ) : (
            <RecruitFormUser applyQuestions={applyQuestions} />
          )}
        </div>
        <div className="flex items-center justify-end w-full h-1/6">
          <input
            type="button"
            value="취소"
            className="w-1/4 border rounded h-7 border-borderColor hover:cursor-pointer text-grayDark"
            onClick={() => {
              setApplyQuestions([...originalApplyQuestions]);
            }}
          />
          <input
            onClick={
              role === 'admin'
                ? () => {
                    setOriginalApplyQuestions([...applyQuestions]);
                  }
                : () => {
                    setApplyQuestions([...originalApplyQuestions]);
                  }
            }
            type="button"
            value={role === 'admin' ? '저장' : '제출'}
            className="w-1/4 ml-3 text-white border rounded h-7 border-yellowPoint bg-yellowPoint hover:cursor-pointer disabled:bg-grayPoint disabled:border-grayPoint disabled:text-grayDark"
            disabled={!isChanged && role === 'admin'}
          />
        </div>
      </div>
    </form>
  );
};

export default RecruitForm;
