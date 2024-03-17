import React from 'react';

import { Button } from '@mui/material';

import SearchConditionSideBar from './components/SearchConditionSideBar';
import UserCard from './components/UserCard';

const users = [
  {
    name: 'user 1',
    description: 'user 1 description',
  },
  {
    name: 'user 2',
    description: 'user 2 description',
  },
  {
    name: 'user 3',
    description: 'user 3 description',
  },
  {
    name: 'user 4',
    description: 'user 4 description',
  },
  {
    name: 'user 5',
    description: 'user 5 description',
  },
  {
    name: 'user 6',
    description: 'user 6 description',
  },
  {
    name: 'user 7',
    description: 'user 7 description',
  },
  {
    name: 'user 8',
    description: 'user 8 description',
  },
  {
    name: 'user 9',
    description: 'user 9 description',
  },
  {
    name: 'user 10',
    description: 'user 10 description',
  },
];

const Network = () => {
  return (
    <div className="flex h-content w-full flex-col items-center bg-grayLight">
      <div className="flex h-1/6 w-full items-center">
        <div className="flex h-3/4 w-full flex-col items-center justify-center bg-white">
          <h1 className="text-2xl font-bold">네트워킹</h1>
          <p className="pt-2 text-grayDark">함께 할 팀원을 찾아보세요!</p>
        </div>
      </div>
      <div className="flex h-5/6 w-3/5 min-w-[960px] flex-col ">
        <div className="mb-4 flex h-full w-full justify-between border-t border-yellowPoint">
          <div className="h-full w-1/3 p-4">
            <SearchConditionSideBar />
          </div>
          <div className="h-full w-2/3 p-4">
            <div className="h-full w-full overflow-y-hidden rounded-2xl bg-white p-4 pb-12 shadow">
              <div className="flex h-12 justify-end bg-white">
                <Button variant="contained" color="yellowPoint" sx={{ height: '2rem' }}>
                  내 정보 등록하기
                </Button>
              </div>
              <div className="h-full overflow-y-scroll border-t border-grayPoint pt-4 scrollbar-hide">
                {users.map((user) => {
                  return <UserCard key={user.name} user={user} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
