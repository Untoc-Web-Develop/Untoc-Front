import React, { useState } from 'react';

import { Button } from '@mui/material';
import TeamInfoCard from 'components/TeamInfoCard/TeamInfoCard';
import titles from 'mocks/mainTeamTitles';
import { RxDoubleArrowDown } from 'react-icons/rx';

const MainActivity = () => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const onStop = () => setIsMouseEnter(true);
  const onStart = () => setIsMouseEnter(false);

  return (
    <div className="py-20 text-grayDark">
      <div className=" mx-auto mb-24 w-fit space-y-3 text-center">
        <div className="text-3xl ">지난 우리 활동은,</div>
        <div>2023학년 1학기부터 진행된 UntoC의 활동을 소개합니다!</div>
      </div>
      <div className=" flex h-64 items-center overflow-hidden ">
        <ul className="relative flex flex-nowrap" onMouseEnter={onStop} onMouseLeave={onStart}>
          <div
            className={`absolute flex animate-InfinitySlider items-center gap-8 pr-8 ${
              isMouseEnter ? '[animation-play-state:paused]' : ''
            }`}
          >
            {titles.map((items) => (
              <TeamInfoCard key={items.title} title={items.title} content={items.content} />
            ))}
          </div>
          <div
            className={`flex animate-InfinitySlider_copy items-center gap-8 pr-8 ${
              isMouseEnter ? '[animation-play-state:paused]' : ''
            }`}
          >
            {titles.map((items) => (
              <TeamInfoCard key={items.title} title={items.title} content={items.content} />
            ))}
          </div>
        </ul>
      </div>
      <div className=" flex flex-col items-center justify-center ">
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
