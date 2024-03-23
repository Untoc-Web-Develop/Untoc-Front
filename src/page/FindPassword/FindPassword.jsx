import React from 'react';

import { useForm } from 'react-hook-form';
import { IoIosSend } from 'react-icons/io';

const FindPassword = () => {
  const { register, handleSubmit } = useForm();

  const email = register('email');
  const emailVertificationCode = register('emailVertificationCode');

  const sendEmail = (data) => {
    console.log(JSON.stringify(data.email));
  };

  const onSubmit = (data) => {
    console.log(JSON.stringify(data.emailVertificationCode));
  };

  return (
    <div className="w-500 flex h-screen items-center justify-center gap-[15rem] bg-grayLight py-[7rem]">
      <div>
        <div className="text-4xl font-medium">Forgot Password?</div>
        <div className="my-7 text-sm leading-relaxed text-placeHolder">
          이메일 인증이 완료되면 무작위의 비밀번호가 이메일을 통해 주어집니다. <br />
          로그인 후에 원하시는 비밀번호로 변경해주시면 됩니다.
        </div>
        <div>사진</div>
      </div>
      <div className="flex flex-col items-center justify-center rounded-[2rem] bg-white px-[12rem] py-7 shadow-lg">
        <div className="text-5xl font-bold text-yellowPoint">UNTOC</div>
        <div className="my-5 text-sm text-placeHolder">
          입력하신 이메일을 통해
          <br />
          비밀번호 초기화 메일이 발송됩니다
        </div>
        <div className="flex flex-col gap-10">
          <div className="pl-5">
            <label htmlFor="email">
              <span className="text-lg font-medium">Email</span>
              <br />
              <div className="flex">
                <input
                  className="my-2 rounded-lg border border-placeHolder py-1 pl-4 pr-12"
                  id="email"
                  type="email"
                  placeholder="UntoC@pusan.ac.kr"
                  onChange={email.onChange}
                  onBlur={email.onBlur}
                  name={email.name}
                  ref={email.ref}
                />
                <IoIosSend
                  onClick={handleSubmit(sendEmail)}
                  size="25"
                  className="relative bottom-[-0.8rem] right-9 cursor-pointer"
                />
              </div>
            </label>
          </div>
          <div className="pl-5">
            <label htmlFor="emailVertificationCode">
              <span className="text-lg font-medium">Email Vertification Code</span>
              <br />
              <input
                className="my-2 rounded-lg border border-placeHolder py-1 pl-4 pr-12"
                id="emailVertificationCode"
                placeholder="email-vertification-code"
                onChange={emailVertificationCode.onChange}
                onBlur={emailVertificationCode.onBlur}
                name={emailVertificationCode.name}
                ref={emailVertificationCode.ref}
              />
            </label>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-5 flex cursor-pointer items-center justify-center">
              <button className="bg-yellowPoint px-[4.5rem] py-1 font-medium text-white" type="submit">
                제출
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FindPassword;
