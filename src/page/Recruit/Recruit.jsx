import React from 'react';

import RecruitDescription from './RecruitDescription';
import RecruitForm from './RecruitForm';

const Recruit = () => {
  return (
    <div className="flex justify-center w-screen overflow-x-hidden h-content align-center bg-grayLight">
      <div className="flex flex-col justify-center w-4/5 h-fit align-center">
        <div className="grid w-full h-full grid-cols-2 grid-rows-1 gap-4">
          <div className="flex items-start w-full h-full mt-16">
            <div className="sticky w-full top-16 h-fit">
              <RecruitDescription />
            </div>
          </div>
          <div className="flex items-start w-full h-full mt-16">
            <div className="w-full h-5/6">
              <RecruitForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruit;
