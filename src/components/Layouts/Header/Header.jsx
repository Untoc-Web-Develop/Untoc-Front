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
    <div className="flex h-10 w-screen place-items-center bg-white px-40 py-2 shadow-lg">
      <Link to="/">
        <Logo />
      </Link>
      <div className="mx-8 h-full border-l border-gray-400" />
      <HeaderTab />
      <div className="ml-auto grid grid-flow-col place-items-center gap-x-5">
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
