import React from 'react';

import RecruitDescription from './RecruitDescription';
import RecruitForm from './RecruitForm';

const Recruit = () => {
  return (
    <div className="h-screen w-screen flex justify-center align-center bg-[#F8F8F9]">
      <div className="h-full w-[1200px] flex justify-center align-center">
        <div className="h-full w-full grid grid-cols-2 gap-4 grid-rows-1">
          <div className="h-full w-full flex">
            <div className="h-5/6 w-full self-center">
              <RecruitDescription />
            </div>
          </div>
          <div className="h-full w-full flex">
            <div className="h-5/6 w-full self-center">
              <RecruitForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruit;
