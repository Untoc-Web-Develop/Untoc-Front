import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="mx-auto my-auto grid h-content place-items-center">
      <form>
        <h1 className="m-3 mb-10 text-center text-5xl font-bold text-yellowPoint">UntoC</h1>
        <div className="mb-5">
          <label className="block text-sm" htmlFor="email">
            <p>Email</p>
            <input
              className="h-15 mt-2 block w-80 rounded-3xl border border-borderColor p-3 text-sm text-placeHolder"
              type="email"
              id="email"
              placeholder="UntoC@pusan.ac.kr"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-10">
          <label className="block text-sm" htmlFor="password">
            <p>Password</p>
            <input
              className="h-15 mt-2 block w-80 rounded-3xl border border-borderColor p-3 text-sm"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="text-right">
            {/* <p className="mt-2 cursor-pointer text-xs text-grayDark">비밀번호 찾기</p> */}
            {/* 추후에 Link로 변경하여 비밀번호 찾기 페이지로 연결하기 */}
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className={`h-15 mt-2 w-80 rounded-3xl p-3 text-white ${
              email && password ? 'bg-yellowPoint' : 'bg-grayPoint'
            }`}
          >
            로그인
          </button>
        </div>
        {/* <div className="mt-4 text-center text-sm">
          계정이 없으신가요?{' '}
          <Link to="/register" className="text-yellowPoint">
            회원가입
          </Link>
        </div> */}
      </form>
    </div>
  );
};

export default Login;
