import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="grid place-items-center mx-auto my-auto h-content">
      <form>
        <h1 className="text-center mb-10 text-5xl text-[#FFBD00] font-bold m-3">UntoC</h1>
        <div className="mb-5">
          <label className="block text-sm" htmlFor="email">
            <p>Email</p>
            <input
              className="block w-80 h-15 mt-2 p-3 border border-gray-300 rounded-3xl text-sm"
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
              className="block w-80 h-15 mt-2 p-3 border border-gray-300 rounded-3xl text-sm"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="text-right">
            <p className="cursor-pointer mt-2 text-xs text-gray-500">비밀번호 찾기</p>{' '}
            {/* 추후에 Link로 변경하여 비밀번호 찾기 페이지로 연결하기 */}
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className={`w-80 h-15 mt-2 p-3 text-white rounded-3xl ${
              email && password ? 'bg-[#FFBD00]' : 'bg-gray-200'
            }`}
          >
            로그인
          </button>
        </div>
        <div className="text-center text-sm mt-4">
          계정이 없으신가요?{' '}
          <Link to="/register" className="text-[#FFBD00]">
            회원가입
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
