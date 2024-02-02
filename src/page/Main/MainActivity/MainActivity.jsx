import React from 'react';

import { Button } from '@mui/material';
import TeamInfoCard from 'components/TeamInfoCard/TeamInfoCard';
import { RxDoubleArrowDown } from 'react-icons/rx';

const MainActivity = () => {
  const titles = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  return (
    <div className="border-b border-gray-200 pb-10 pt-52 text-grayDark ">
      {/* title */}
      <div className=" mx-auto mb-24 w-fit space-y-3 text-center">
        <div className="text-3xl ">지난 우리 활동은,</div>
        <div>2023학년 1학기부터 진행된 UntoC의 활동을 소개합니다!</div>
      </div>
      {/* content */}
      <div className="animate-slider h-42 absolute mb-10 flex flex-row space-x-7 ">
        {titles.map((title) => (
          <TeamInfoCard key={title} title={title} />
        ))}
      </div>
      <div className="!mt-80 flex flex-col items-center justify-center ">
        <Button variant="contained" className="!mt-10 !w-52 !bg-yellowPoint !font-semibold !shadow-none ">
          전체보기
        </Button>
        <div className=" !mt-20 flex items-center space-x-3">
          <RxDoubleArrowDown className="!h-7 !w-7 !font-light" />
          <div>Scroll down</div>
        </div>
      </div>
    </div>
  );
};

export default MainActivity;
