import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  useDeleteApplyQuestionQuery,
  useGetApplyQuestionQuery,
  usePatchApplyQuestionQuery,
  usePostApplyQuery,
  usePostApplyQuestionQuery,
} from 'api/applyApi';
import useRoleCheck from 'hooks/useRoleCheck';

import RecruitFormAdmin from './RecruitFormAdmin';
import RecruitFormUser from './RecruitFormUser';

const RecruitForm = () => {
  const { isLogin } = useRoleCheck('admin');
  const [editApplyQuestions, setEditApplyQuestions] = useState([]);
  const { data: applyQuestions, refetch: refetchApplyQuestions } = useGetApplyQuestionQuery();
  const { mutate: postApplyQuestion } = usePostApplyQuestionQuery();
  const { mutate: patchApplyQuestion } = usePatchApplyQuestionQuery();
  const { mutate: deleteApplyQuestion } = useDeleteApplyQuestionQuery();
  const { mutate: postApply } = usePostApplyQuery();
  const [isChanged, setIsChanged] = useState(false);
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (applyQuestions) {
      setEditApplyQuestions(() => applyQuestions.data.applyQuestions);
    }
  }, [applyQuestions]);

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
                placeholder="202412345"
                className="w-full border border-borderColor p-1 px-3 focus:border-grayDark focus:outline-none"
                disabled={isLogin}
                value={studentId}
                onChange={(e) => setStudentId(() => e.target.value)}
              />
            </label>
            <label htmlFor="name" className="w-11/12 justify-self-end">
              <p className="mb-3 text-grayDark">이름</p>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="김언톡"
                className="w-full border border-borderColor p-1 px-3 focus:border-grayDark focus:outline-none"
                disabled={isLogin}
                value={name}
                onChange={(e) => setName(() => e.target.value)}
              />
            </label>
          </div>
          <div className="mb-3 h-24 w-full">
            <label htmlFor="email">
              <p className="mb-3 text-grayDark">전화번호</p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="untoc@pusan.ac.kr"
                className="w-full border border-borderColor p-1 px-3 focus:border-grayDark focus:outline-none"
                disabled={isLogin}
                value={email}
                onChange={(e) => setEmail(() => e.target.value)}
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
                disabled={isLogin}
                value={phone}
                onChange={(e) => setPhone(() => e.target.value)}
              />
            </label>
          </div>
          {
            /**
             * @Todo if elseComponent is added to useRoleCheck, change this code
             */
            isLogin ? (
              <RecruitFormAdmin
                applyQuestions={editApplyQuestions}
                setApplyQuestions={setEditApplyQuestions}
                setIsChanged={setIsChanged}
              />
            ) : (
              <RecruitFormUser applyQuestions={editApplyQuestions} setApplyQuestions={setEditApplyQuestions} />
            )
          }
        </div>
        <div className="flex h-1/6 w-full items-center justify-end">
          <button
            type="button"
            className="h-7 w-1/4 rounded border border-borderColor text-grayDark hover:cursor-pointer"
            onClick={refetchApplyQuestions}
          >
            취소
          </button>
          <button
            onClick={
              isLogin
                ? () => {
                    const createdQuestions = editApplyQuestions.filter(
                      (question) => !applyQuestions.data.find((applyQuestion) => applyQuestion.id === question.id),
                    );
                    const updatedQuestions = editApplyQuestions.filter((question) =>
                      applyQuestions.data.find((applyQuestion) => applyQuestion.id === question.id),
                    );
                    const deletedQuestions = applyQuestions.data.filter(
                      (question) =>
                        !editApplyQuestions.find((editApplyQuestion) => editApplyQuestion.id === question.id),
                    );
                    createdQuestions.forEach((question) => {
                      postApplyQuestion({ question: question.question, description: question.description });
                    });
                    updatedQuestions.forEach((question) => {
                      patchApplyQuestion({
                        id: question.id,
                        question: question.question,
                        description: question.description,
                      });
                    });
                    deletedQuestions.forEach((question) => {
                      deleteApplyQuestion({ id: question.id });
                    });
                    setIsChanged(() => false);
                  }
                : () => {
                    const applyValues = editApplyQuestions.map((applyQuestion) => {
                      return {
                        applyQuestion: applyQuestion.id,
                        value: applyQuestion.value,
                      };
                    });

                    postApply({
                      name,
                      studentId,
                      phoneNumber: phone,
                      email,
                      applyValues,
                    });

                    navigate('/');
                  }
            }
            type="button"
            className="ml-3 h-7 w-1/4 rounded border border-yellowPoint bg-yellowPoint text-white hover:cursor-pointer disabled:border-grayPoint disabled:bg-grayPoint disabled:text-grayDark"
            disabled={!isChanged && isLogin}
          >
            {isLogin ? '저장' : '제출'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default RecruitForm;
