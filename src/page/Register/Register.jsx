import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  // 초기값 세팅 - 이름, 학번, 전화번호, 비번, 비번확인
  const [username, setUsername] = useState('');
  const [studentnumber, setStudentnumber] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [isEmailValidate, setIsEmailValidate] = useState(false);

  const onStudentnumberHandler = (e) => {
    setStudentnumber(e.target.value);
  };

  const onPhonenumberHandler = (e) => {
    setPhonenumber(e.target.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onConfirmpasswordHandler = (e) => {
    setConfirmpassword(e.target.value);
  };

  function checkPassword(e) {
    if (password !== confirmpassword) {
      e.preventDefault();
    }
  }

  const onSubmit = (e) => {
    checkPassword(e);
  };

  return (
    <div className="mx-auto my-auto flex h-content flex-col place-items-center">
      <form onSubmit={onSubmit}>
        <h1 className="m-8 text-center text-5xl font-semibold text-yellowPoint">UntoC</h1>
        <div>
          <div className="mb-5">
            <label htmlFor="username">
              <span>Username</span>
              <br />
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-12 w-80 rounded-full border border-borderColor p-3 text-sm text-placeHolder"
                type="text"
                id="username"
                placeholder="Username"
                required
              />
              <br />
              <span className="text-xs text-placeHolder">본명으로 기입해주세요</span>
              <br />
            </label>
          </div>
          <div className="mb-5">
            <label htmlFor="studentnumber">
              <span>StudentNumber</span>
              <br />
              <input
                value={studentnumber}
                onChange={onStudentnumberHandler}
                className="h-12 w-80 rounded-full border border-borderColor p-3 text-sm text-placeHolder"
                type="text"
                id="studentnumber"
                placeholder="StudentNumber"
                required
              />
              <br />
            </label>
          </div>
          <div className="mb-5">
            <label htmlFor="phonenumber">
              <span>PhoneNumber</span>
              <br />
              <input
                value={phonenumber}
                onChange={onPhonenumberHandler}
                className="h-12 w-80 rounded-full border border-borderColor p-3 text-sm text-placeHolder"
                type="text"
                id="phonenumber"
                placeholder="010-0000-0000"
                required
              />
              <br />
              <span className="text-xs text-placeHolder">숫자 및 &apos;-&apos;만 사용 가능합니다</span>
              <br />
            </label>
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="relative">
              <span>Email</span>
              <div className="flex h-12 w-80 place-items-center rounded-full border border-borderColor px-1 focus-within:outline">
                <input
                  className="w-60 rounded-l-full p-2 text-sm outline-none"
                  type="email"
                  id="email"
                  placeholder="UntoC@pusan.ac.kr"
                  required
                />
                <button
                  className="h-10 w-20 rounded-full border border-borderColor bg-white text-xs text-placeHolder"
                  type="submit"
                  onClick={() => setIsEmailValidate(true)}
                >
                  확인
                </button>
              </div>
              <span className="text-xs text-placeHolder">부산대학교 이메일을 사용해주세요</span>
              <br />
            </label>
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="relative">
              <span>Email vertification code</span>
              <div
                className={`flex h-12 w-80 place-items-center rounded-full border-borderColor px-1 focus-within:outline ${
                  isEmailValidate ? 'border border-borderColor bg-white' : 'bg-grayLight'
                }`}
              >
                <input
                  className={`w-60 rounded-full p-2 text-sm outline-none ${
                    isEmailValidate ? 'bg-white' : 'bg-grayLight'
                  }`}
                  type="text"
                  id="emailVertificationCode"
                  disabled={!isEmailValidate}
                />
                <button
                  className="h-10 w-20 rounded-full border border-borderColor bg-white text-xs text-placeHolder"
                  type="submit"
                >
                  확인
                </button>
              </div>
              <span className="text-xs text-gray-400">이메일 확인 인증 코드입니다</span>
              <br />
            </label>
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="relative">
              <span>Password</span>
              <br />
              <input
                value={password}
                onChange={onPasswordHandler}
                className="h-12 w-80 rounded-full border border-borderColor p-3 text-sm text-placeHolder"
                type="text"
                id="password"
                placeholder="password"
                required
              />
              <br />
              <span className="text-xs text-placeHolder">8~16자리의 영문자 및 숫자를 포함하여 만들어주세요</span>
              <br />
            </label>
          </div>
          <div className="mb-5">
            <label htmlFor="confirmpassword">
              <span>ConfirmPassword</span>
              <br />
              <input
                value={confirmpassword}
                onChange={onConfirmpasswordHandler}
                className="h-12 w-80 rounded-full border border-borderColor p-3 text-sm text-placeHolder"
                type="text"
                id="confirmpassword"
                required
              />
              <br />
            </label>
          </div>
        </div>
        <div className="mt-20">
          <button
            className={`h-12 w-80 rounded-full border-borderColor text-xs font-bold text-placeHolder text-white
              ${
                !username || !studentnumber || !phonenumber || !password || !confirmpassword
                  ? 'bg-borderColor'
                  : 'bg-yellowPoint'
              }`}
            disabled={!username || !studentnumber || !phonenumber || !password || !confirmpassword}
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
        </div>
      </form>
    </div>
  );
};

export default Register;
