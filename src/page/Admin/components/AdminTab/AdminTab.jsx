import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const tabs = [
  {
    name: '신입회원',
    path: '/admin/newUser',
  },
  {
    name: '회원',
    path: '/admin/user',
  },
  {
    name: '관리자',
    path: '/admin/role',
  },
];

const AdminTab = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex h-16 w-1/2 items-center justify-start">
      {tabs.map(({ name, path }) => (
        <Link
          key={name}
          to={path}
          className={`mr-5 flex h-3/4 w-1/4 items-center justify-center rounded ${
            pathname === path ? 'bg-yellowPoint' : 'bg-grayPoint'
          }`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default AdminTab;
