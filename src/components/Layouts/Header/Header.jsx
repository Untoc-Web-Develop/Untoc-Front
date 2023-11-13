import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from 'asset/logo/logo.svg';
import useRoleCheck from 'hooks/useRoleCheck';
import { BsPersonCircle as PersonCircle } from 'react-icons/bs';
import { PiMagnifyingGlassBold as Search } from 'react-icons/pi';
import { VscBell as Bell } from 'react-icons/vsc';

import HeaderTab from './HeaderTab/HeaderTab';

const Header = () => {
  const { isLogin, OnlyLogin } = useRoleCheck();

  return (
    <div className="flex place-items-center w-screen h-10 bg-white shadow-lg px-40 py-2">
      <Link to="/">
        <Logo />
      </Link>
      <div className="border-l h-full border-gray-400 mx-8" />
      <HeaderTab />
      <div className="ml-auto grid grid-flow-col gap-x-5 place-items-center">
        <OnlyLogin>
          <button type="button">
            <Search className="text-lg" />
          </button>
          <button type="button">
            <Bell className="text-lg" />
          </button>
        </OnlyLogin>
        <Link to={isLogin ? '/profile' : '/login'}>
          <PersonCircle className="text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
