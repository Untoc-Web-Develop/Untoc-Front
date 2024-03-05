import React from 'react';

import RecruitDescriptionUser from './RecruitDescriptionUser';
import RecruitFormUser from './RecruitFormUser';

const RecruitUser = () => {
  return (
    <div className="grid h-full w-full grid-cols-2 grid-rows-1 gap-4">
      <div className="mt-16 flex h-full w-full items-start">
        <div className="sticky top-16 h-fit w-full">
          <RecruitDescriptionUser />
        </div>
      </div>
      <div className="mt-16 flex h-full w-full items-start">
        <div className="h-5/6 w-full">
          <RecruitFormUser />
        </div>
      </div>
    </div>
  );
};

export default RecruitUser;
