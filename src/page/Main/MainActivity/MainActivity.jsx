import React from 'react';

import { Button } from '@mui/material';
import TeamInfoCard from 'components/TeamInfoCard/TeamInfoCard';
import { RxDoubleArrowDown } from 'react-icons/rx';

const MainActivity = () => {
  const titles = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  return (
    <div className="pt-52 pb-10 border-b border-gray-200 text-grayDark ">
      {/* title */}
      <div className=" w-fit mx-auto text-center space-y-3 mb-24">
        <div className="text-3xl ">지난 우리 활동은,</div>
        <div>2023학년 1학기부터 진행된 UntoC의 활동을 소개합니다!</div>
      </div>
      {/* content */}
      <div className="flex flex-row mb-10 absolute animate-slider space-x-7 h-42 ">
        {titles.map((title) => (
          <TeamInfoCard key={title} title={title} />
        ))}
      </div>
      <div className="!mt-80 flex flex-col items-center justify-center ">
        <Button variant="contained" className="!mt-10 !font-semibold !shadow-none !w-52 !bg-yellowPoint ">
          전체보기
        </Button>
        <div className=" !mt-40 flex items-center space-x-3">
          <RxDoubleArrowDown className="!w-7 !h-7 !font-light" />
          <div>Scroll down</div>
        </div>
      </div>
    </div>
  );
};

export default MainActivity;
