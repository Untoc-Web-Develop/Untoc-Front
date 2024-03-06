import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetApplyQuestionQuery, usePostApplyMutation } from 'api/applyApi';

const RecruitFormUser = () => {
  const [editApplyQuestions, setEditApplyQuestions] = useState([]);
  const { data: applyQuestions } = useGetApplyQuestionQuery();
  const { mutate: postApply } = usePostApplyMutation();

  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();

  const validateApply = () => {
    if (!name) return false;
    if (studentId.length !== 9) return false;

    const phoneRegExp = /^\d{3}-\d{3,4}-\d{4}$/;
    if (!phoneRegExp.test(phone)) return false;

    const emailRegExp = /^[a-zA-Z0-9._%+-]+@pusan.ac.kr$/;
    if (!emailRegExp.test(email)) return false;

    return true;
  };

  const onSubmitApply = () => {
    const applyValues = editApplyQuestions.map((applyQuestion) => {
      return {
        applyQuestion: applyQuestion.id,
        value: applyQuestion.value,
      };
    });

    if (!validateApply()) {
      alert('지원서 양식이 올바르지 않습니다.');
      return;
    }

    if (window.confirm('지원서를 제출하시겠습니까? 제출된 지원서는 수정이 불가능합니다.') === true) {
      postApply({
        name,
        studentId,
        phoneNumber: phone,
        email,
        applyValues,
      });

      alert('지원서 제출이 완료되었습니다');

      navigate('/');
    }
  };

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
                placeholder={`${new Date().getFullYear().toString().padEnd(9, 0)} (9자리)`}
                className="w-full border border-borderColor p-1 px-3 focus:border-grayDark focus:outline-none"
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
                placeholder="언톡"
                className="w-full border border-borderColor p-1 px-3 focus:border-grayDark focus:outline-none"
                value={name}
                onChange={(e) => setName(() => e.target.value)}
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
                value={phone}
                onChange={(e) => setPhone(() => e.target.value)}
              />
            </label>
          </div>
          {editApplyQuestions.map(({ id, question, description, value }, idx) => {
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
                      setEditApplyQuestions((prev) => [
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
        </div>
        <div className="flex h-1/6 w-full items-center justify-end">
          <button
            onClick={onSubmitApply}
            type="button"
            className="ml-3 h-7 w-1/4 rounded border border-yellowPoint bg-yellowPoint text-white hover:cursor-pointer disabled:border-grayPoint disabled:bg-grayPoint disabled:text-grayDark"
          >
            제출
          </button>
        </div>
      </div>
    </form>
  );
};

export default RecruitFormUser;
