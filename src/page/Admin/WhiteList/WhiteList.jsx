import React from 'react';

import EnrollWhiteList from './components/EnrollWhiteList';
import ManageWhiteList from './components/ManageWhiteList';

const WhiteList = () => {
  return (
    <div className="flex h-full w-full justify-between pb-8">
      <div className="h-full w-1/3 rounded-xl bg-white p-4 shadow-md">
        <EnrollWhiteList />
      </div>
      <div className="h-full w-3/5 rounded-xl bg-white p-4 shadow-md">
        <ManageWhiteList />
      </div>
    </div>
  );
};

export default WhiteList;
