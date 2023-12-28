import React from 'react';

import RecruitDescription from './RecruitDescription';
import RecruitForm from './RecruitForm';

const Recruit = () => {
  return (
    <div className="align-center flex h-content w-screen justify-center overflow-x-hidden bg-grayLight">
      <div className="align-center flex h-fit w-4/5 flex-col justify-center">
        <div className="grid h-full w-full grid-cols-2 grid-rows-1 gap-4">
          <div className="mt-16 flex h-full w-full items-start">
            <div className="sticky top-16 h-fit w-full">
              <RecruitDescription />
            </div>
          </div>
          <div className="mt-16 flex h-full w-full items-start">
            <div className="h-5/6 w-full">
              <RecruitForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruit;
