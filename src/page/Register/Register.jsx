/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { usePostRegisterMutation, usePostSendEmailMutation, usePostVerifyEmailCodeMutation } from 'api/registerApi';
import { useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Register = () => {
  const { mutate: postEmail } = usePostSendEmailMutation();
  const { mutate: postEmailVertification } = usePostVerifyEmailCodeMutation();
  const { mutate: postRegister } = usePostRegisterMutation();
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const watchUsername = watch('username');
  const watchStudentNumber = watch('studentNumber');
  const watchPhoneNumber = watch('phoneNumber');
  const watchEmail = watch('email');
  const watchPassword = watch('password');
  const watchConfirmPassword = watch('confirmPassword');

  const [visible, setVisible] = useState({
    passwordVisible: false,
    confirmPasswordVisible: false,
  });

  const [isEmailValidate, setIsEmailValidate] = useState(false);
  const [focus, setFocus] = useState({
    emailFocus: false,
    emailVertificationCodeFocus: false,
  });

  const emailSubmit = (data) => {
    const { email } = data;
    if (email) {
      setIsEmailValidate(true);
      postEmail({
        email,
      });
    }
  };

  const emailVertificationCodeSubmit = (data) => {
    postEmailVertification({
      email: data.email,
      verificationCode: data.emailVertificationCode,
    });
  };

  const registerSubmit = (data) => {
    const { email, password, username, phoneNumber, studentNumber } = data;
    postRegister({
      email,
      password,
      username,
      phoneNumber,
      studentId: studentNumber,
    });
  };

  function emailMessage(errorsParam, isEmailValidateParam) {
    if (errorsParam.email) return errorsParam.email.message;
    if (isEmailValidateParam) return '이메일이 전송되었습니다. 확인해주세요';
    return '부산대학교 이메일을 사용해주세요';
  }

  return (
    <div className="mx-auto my-auto flex h-auto flex-col place-items-center">
      <h1 className="m-8 py-5 text-center text-6xl font-bold text-yellowPoint">UntoC</h1>
      <div>
        <div className="mb-5">
          <label htmlFor="username">
            <span className="font-medium">Username</span>
            <br />
            <input
              className={`mt-2 h-12 w-80 rounded-full border px-4 py-3 text-sm placeholder:text-placeHolder focus:bg-focusColor ${
                errors.username ? 'border-error' : 'border-borderColor'
              }`}
              type="text"
              id="username"
              placeholder="Username"
              {...register('username', {
                pattern: {
                  value: /^[가-힣]+$/,
                  message: '이름 형식이 올바르지 않습니다.',
                },
              })}
            />
            <br />
            <span className={`text-xs ${errors.username ? 'text-error' : 'text-placeHolder'}`}>
              {errors.username ? errors.username.message : '본명으로 기입해주세요'}
            </span>
            <br />
          </label>
        </div>
        <div className="mb-5">
          <label htmlFor="studentnumber">
            <span className="font-medium">StudentNumber</span>
            <br />
            <input
              className="mt-2 h-12 w-80 rounded-full border border-borderColor px-4 py-3 text-sm placeholder:text-placeHolder focus:bg-focusColor"
              type="number"
              id="studentnumber"
              placeholder="StudentNumber"
              {...register('studentNumber')}
            />
            <br />
          </label>
        </div>
        <div className="mb-5">
          <label htmlFor="phonenumber">
            <span className="font-medium">PhoneNumber</span>
            <br />
            <input
              className={`mt-2 h-12 w-80 rounded-full border px-4 py-3 text-sm placeholder:text-placeHolder focus:bg-focusColor ${
                errors.phoneNumber ? 'border-error' : 'border-borderColor'
              }`}
              type="text"
              id="phonenumber"
              placeholder="010-0000-0000"
              {...register('phoneNumber', {
                pattern: {
                  value: /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/,
                  message: "형식을 확인해주세요. 숫자 및 '-'만 사용 가능합니다.",
                },
              })}
            />
            <br />
            <span className={`text-xs ${errors.phoneNumber ? 'text-error' : 'text-placeHolder'}`}>
              {errors.phoneNumber ? errors.phoneNumber.message : "숫자 및 '-'만 사용 가능합니다."}
            </span>
            <br />
          </label>
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="relative">
            <span className="font-medium">Email</span>
            <div
              className={`mt-2 flex h-12 w-80 place-items-center rounded-full border px-1  focus-within:outline ${
                errors.email ? 'border-error' : 'border-borderColor'
              } ${focus.emailFocus && 'bg-focusColor'}`}
            >
              <input
                className="w-60 rounded-l-full px-3 py-2 text-sm outline-none focus:bg-focusColor"
                type="email"
                id="email"
                placeholder="UntoC@pusan.ac.kr"
                {...register('email', {
                  pattern: {
                    value: /^[a-zA-Z0-9+-_.]+@pusan\.ac\.kr$/,
                    message: '이메일 형식이 올바르지 않습니다.',
                  },
                })}
                onFocus={() =>
                  setFocus({
                    ...focus,
                    emailFocus: true,
                  })
                }
                onBlur={() =>
                  setFocus({
                    ...focus,
                    emailFocus: false,
                  })
                }
              />
              <form onSubmit={handleSubmit(emailSubmit)}>
                <button
                  className="h-10 w-20 rounded-full border border-borderColor bg-white text-xs text-placeHolder"
                  type="submit"
                >
                  확인
                </button>
              </form>
            </div>
            <span className={`text-xs ${errors.email || isEmailValidate ? 'text-error' : 'text-placeHolder'}`}>
              {emailMessage(errors, isEmailValidate)}
            </span>
            <br />
          </label>
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="relative">
            <span className="font-medium">Email vertification code</span>
            <div
              className={`mt-2 flex h-12 w-80 place-items-center rounded-full border-borderColor px-1 focus-within:outline ${
                isEmailValidate ? 'border border-borderColor ' : 'bg-grayLight'
              } ${focus.emailVertificationCodeFocus && 'bg-focusColor'}`}
            >
              <input
                className={`w-60 rounded-full px-3 py-2 text-sm outline-none focus:bg-focusColor ${
                  isEmailValidate ? '' : 'bg-grayLight'
                }`}
                type="text"
                id="emailVertificationCode"
                {...register('emailVertificationCode')}
                disabled={!isEmailValidate}
                onFocus={() =>
                  setFocus({
                    ...focus,
                    emailVertificationCodeFocus: true,
                  })
                }
                onBlur={() =>
                  setFocus({
                    ...focus,
                    emailVertificationCodeFocus: false,
                  })
                }
              />
              <form onSubmit={handleSubmit(emailVertificationCodeSubmit)}>
                <button
                  className="h-10 w-20 rounded-full border border-borderColor bg-white text-xs text-placeHolder"
                  type="submit"
                >
                  확인
                </button>
              </form>
            </div>
            <span className="text-xs text-gray-400">이메일 확인 인증 코드입니다</span>
            <br />
          </label>
        </div>
        <div className="mb-1">
          <label htmlFor="password" className="relative">
            <span className="font-medium">Password</span>
            <br />
            <input
              className={`mt-2 h-12 w-80 rounded-full border px-4 py-3 text-sm placeholder:text-placeHolder focus:bg-focusColor ${
                errors.password ? 'border-error' : 'border-placeHolder'
              }`}
              type={visible.passwordVisible ? 'text' : 'password'}
              id="password"
              placeholder="password"
              {...register('password', {
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,
                },
              })}
            />
            <div className="relative bottom-[2.1rem] left-[17rem] text-placeHolder">
              <button
                type="button"
                onClick={() =>
                  setVisible({
                    ...visible,
                    passwordVisible: !visible.passwordVisible,
                  })
                }
              >
                {visible.passwordVisible ? <AiOutlineEye size="22" /> : <AiOutlineEyeInvisible size="22" />}
              </button>
            </div>
            <span className={`relative bottom-5 text-xs ${errors.password ? 'text-error' : 'text-placeHolder'}`}>
              8~16자리의 영문자 및 숫자만 포함하여 만들어주세요
            </span>
          </label>
        </div>
        <div className="mb-5">
          <label htmlFor="confirmPassword">
            <span className="font-medium">ConfirmPassword</span>
            <br />
            <input
              className={`mt-2 h-12 w-80 rounded-full border px-4 py-3 text-sm placeholder:text-placeHolder focus:bg-focusColor ${
                errors.confirmPassword ? 'border-error' : 'border-borderColor'
              }`}
              type={visible.confirmPasswordVisible ? 'text' : 'password'}
              id="confirmPassword"
              {...register('confirmPassword', {
                validate: {
                  check: (val) => {
                    if (getValues('password') !== val) {
                      return '비밀번호가 일치하지 않습니다. 확인해주세요';
                    }
                    return null;
                  },
                },
              })}
            />
            <div className="relative bottom-[2.1rem] left-[17rem] text-placeHolder">
              <button
                type="button"
                onClick={() =>
                  setVisible({
                    ...visible,
                    confirmPasswordVisible: !visible.confirmPasswordVisible,
                  })
                }
              >
                {visible.confirmPasswordVisible ? <AiOutlineEye size="22" /> : <AiOutlineEyeInvisible size="22" />}
              </button>
            </div>
            {errors.confirmPassword && (
              <span className="relative bottom-5 text-xs text-error">{errors.confirmPassword.message}</span>
            )}
          </label>
        </div>
      </div>
      <div className="mt-[4rem]">
        <form onSubmit={handleSubmit(registerSubmit)}>
          <button
            className={`h-12 w-80 rounded-full border-borderColor text-xs font-bold text-white
              ${
                !(
                  watchUsername &&
                  watchStudentNumber &&
                  watchPhoneNumber &&
                  watchEmail &&
                  watchPassword &&
                  watchConfirmPassword
                )
                  ? 'bg-borderColor'
                  : 'bg-yellowPoint'
              }`}
            disabled={
              !(
                watchUsername &&
                watchStudentNumber &&
                watchPhoneNumber &&
                watchEmail &&
                watchPassword &&
                watchConfirmPassword
              )
            }
            type="submit"
          >
            회원가입
          </button>
          <br />
          <div className="m-8 text-center text-xs font-semibold">
            <span>계정을 가지고 계신가요?</span>
            <Link to="/login" className="ml-3 text-yellowPoint">
              로그인
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
