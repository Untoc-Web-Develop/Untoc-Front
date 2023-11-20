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
  const personalData = {
    username,
    studentnumber,
    phonenumber,
    password,
  };

  // 오류메세지 상태 저장
  const [phonenumberMessage, setPhonenumberMessage] = useState("숫자 및 '-' 만 사용 가능합니다");
  const [passwordMessage, setPasswordMessage] = useState('8~16자의 영문자 및 숫자를 포함하여 만들어주세요');

  const checkUsername = (username) => {
    const usernameRegExp = /^[가-힣]{2,4}$/;

    if (!usernameRegExp.test(username)) {
      return '이름 형식이 올바르지 않습니다';
    } else {
      return '본명으로 기입해주세요';
    }
  };

  const onStudentnumberHandler = (e) => {
    setStudentnumber(e.target.value);
    console.log(studentnumber);
  };

  const onPhonenumberHandler = (e) => {
    setPhonenumber(e.target.value);
    const phonenumberRegExp = /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/;
    console.log(phonenumber);

    if (!phonenumberRegExp.test(e.target.value)) {
      setPhonenumberMessage("형식을 확인해주세요. 숫자 및 '-'만 사용 가능합니다");
    } else {
      setPhonenumberMessage("숫자 및 '-' 만 사용 가능합니다");
    }
  };

  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
    const passwordRegExp = /^[A-Za-z0-9]{8, 16}$/;
    console.log(password);

    if (!passwordRegExp.test(e.target.value)) {
      setPasswordMessage('8~16자의 영문자 및 숫자를 포함하여 만들어주세요(빨간색)');
    } else {
      setPasswordMessage('8~16자의 영문자 및 숫자를 포함하여 만들어주세요');
    }
  };

  const onConfirmpasswordHandler = (e) => {
    setConfirmpassword(e.target.value);
    console.log(confirmpassword);
  };

  function checkPassword(e) {
    if (password !== confirmpassword) {
      console.log('error!');
      e.preventDefault();
    }
  }

  const onSubmit = (e) => {
    checkPassword(e);
    console.log(personalData);
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
                className="w-80 h-10 rounded-full border border-gray-300 text-sm p-3"
                type="text"
                id="username"
                placeholder="Username"
                required
              />
              <br />
              <span className="text-gray-400 text-xs">{checkUsername(username)}</span>
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
                className="w-80 h-10 rounded-full border border-gray-300 text-sm p-3"
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
                className="w-80 h-10 rounded-full border border-gray-300 text-sm p-3"
                type="text"
                id="phonenumber"
                placeholder="010-0000-0000"
                required
              />
              <br />
              <span className="text-gray-400 text-xs">{phonenumberMessage}</span>
              <br />
            </label>
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="relative">
              <span>Email</span>
              <br />
              <input
                className="w-80 h-10 rounded-full border border-gray-300 text-sm p-3"
                type="email"
                id="email"
                placeholder="UntoC@pusan.ac.kr"
                required
              />
              <button
                className="w-20 h-8 rounded-full border border-gray-300 text-gray-400 text-xs absolute -right-[129.5px] bottom-[26.5px]"
                type="submit"
              >
                전송
              </button>
              <br />
              <span className="text-gray-400 text-xs">부산대학교 이메일을 사용해주세요</span>
              <br />
            </label>
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="relative">
              <span>Email vertification code</span>
              <br />
              <input
                className="w-80 h-10 rounded-full border border-gray-300 text-sm p-3"
                type="text"
                id="emailVertificationCode"
                disabled="true"
              />
              <button
                className="w-20 h-8 rounded-full border border-gray-300 text-gray-400 text-xs absolute -right-[162px] bottom-[26.5px] bg-white"
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
                className="w-80 h-10 rounded-full border border-gray-300 text-sm p-3"
                type="text"
                id="password"
                placeholder="password"
                required
              />
              <br />
              <span className="text-gray-400 text-xs">{passwordMessage}</span>
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
                className="w-80 h-10 rounded-full border border-gray-300 text-sm p-3"
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
            className="w-80 h-10 rounded-full border border-gray-300 text-gray-400 text-xs absolute"
            type="submit"
          >
            회원가입
          </button>
          <br />
          <div className="m-8 text-xs font-semibold text-center">
            <span>계정을 가지고 계신가요?</span>
            <Link to="/login" className="text-yellow-300 ml-3">
              로그인
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
