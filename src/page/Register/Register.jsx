import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  // 초기값 세팅 - 이름, 학번, 전화번호, 비번, 비번확인
  const [username, setUsername] = useState('');
  const [studentnumber, setStudentnumber] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

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
    <div className="grid place-items-center mx-auto my-auto h-content">
      <form onSubmit={onSubmit}>
        <h1 className="text-5xl text-yellow-300 font-semibold text-center m-8">UntoC</h1>
        <div>
          <div className="mb-5">
            <label htmlFor="username">
              <span>Username</span>
              <br />
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-80 h-12 rounded-full border border-borderColor text-placeHolder text-sm p-3"
                type="text"
                id="username"
                placeholder="Username"
                required
              />
              <br />
              <span className="text-placeHolder text-xs">본명으로 기입해주세요</span>
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
                className="w-80 h-12 rounded-full border border-borderColor text-placeHolder text-sm p-3"
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
                className="w-80 h-12 rounded-full border border-borderColor text-placeHolder text-sm p-3"
                type="text"
                id="phonenumber"
                placeholder="010-0000-0000"
                required
              />
              <br />
              <span className="text-placeHolder text-xs">숫자 및 &apos;-&apos;만 사용 가능합니다</span>
              <br />
            </label>
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="relative">
              <span>Email</span>
              <br />
              <input
                className="w-80 h-12 rounded-full border border-borderColor text-placeHolder text-sm p-3"
                type="email"
                id="email"
                placeholder="UntoC@pusan.ac.kr"
                required
              />
              <button
                className="w-20 h-10 rounded-full border border-borderColor text-placeHolder text-xs absolute -right-[129.5px] bottom-[25.8px]"
                type="submit"
              >
                전송
              </button>
              <br />
              <span className="text-placeHolder text-xs">부산대학교 이메일을 사용해주세요</span>
              <br />
            </label>
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="relative">
              <span>Email vertification code</span>
              <br />
              <input
                className="w-80 h-12 rounded-full border-borderColor text-sm p-3"
                type="text"
                id="emailVertificationCode"
                disabled="true"
              />
              <button
                className="w-20 h-10 rounded-full border border-borderColor text-placeHolder text-xs absolute -right-[162px] bottom-[26.5px] bg-white"
                type="submit"
              >
                확인
              </button>
              <br />
              <span className="text-gray-400 text-xs">이메일 확인 인증 코드입니다</span>
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
                className="w-80 h-12 rounded-full border border-borderColor text-placeHolder text-sm p-3"
                type="text"
                id="password"
                placeholder="password"
                required
              />
              <br />
              <span className="text-placeHolder text-xs">8~16자리의 영문자 및 숫자를 포함하여 만들어주세요</span>
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
                className="w-80 h-12 rounded-full border border-borderColor text-placeHolder text-sm p-3"
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
            className={`w-80 h-12 rounded-full text-white font-bold border-borderColor text-placeHolder text-xs
              ${
                username === '' ||
                studentnumber === '' ||
                phonenumber === '' ||
                password === '' ||
                confirmpassword === ''
                  ? 'bg-borderColor'
                  : 'bg-yellowPoint'
              }`}
            disabled={
              username === '' || studentnumber === '' || phonenumber === '' || password === '' || confirmpassword === ''
            }
            type="submit"
          >
            회원가입
          </button>
          <br />
          <div className="m-8 text-xs font-semibold text-center">
            <span>계정을 가지고 계신가요?</span>
            <Link to="/login" className="text-yellowPoint ml-3">
              로그인
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
