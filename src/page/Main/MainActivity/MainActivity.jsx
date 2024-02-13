import React, { useEffect, useState } from 'react';

import { Button } from '@mui/material';
import TeamInfoCard from 'components/TeamInfoCard/TeamInfoCard';
import { RxDoubleArrowDown } from 'react-icons/rx';

const MainActivity = () => {
  const titles = [
    { title: 'LEAD_1', content: '김세론a, 김세론, 김세론c' },
    { title: 'LEAD_2', content: '김세론a, 김세론, 김세론c' },
    { title: 'LEAD_3', content: '김세론a, 김세론, 김세론c' },
    { title: 'LEAD_4', content: '김세론a, 김세론, 김세론c' },
    { title: 'LEAD_5', content: '김세론a, 김세론, 김세론c' },
    { title: 'LEAD_6', content: '김세론a, 김세론, 김세론c' },
    { title: 'LEAD_7', content: '김세론a, 김세론, 김세론c' },
    { title: 'LEAD_8', content: '김세론a, 김세론, 김세론c' },
    { title: 'LEAD_9', content: '김세론a, 김세론, 김세론c' },
  ];

  const [animate, setAnimate] = useState(true);
  const onStop = () => setAnimate(false);
  const onStart = () => setAnimate(true);

  useEffect(() => {
    console.log('? :', animate);
  }, [animate]);

  return (
    <div className="py-40  text-grayDark">
      <div className=" mx-auto mb-24 w-fit space-y-3 text-center">
        <div className="text-3xl ">지난 우리 활동은,</div>
        <div>2023학년 1학기부터 진행된 UntoC의 활동을 소개합니다!</div>
      </div>
      <div className=" flex h-64 items-center overflow-hidden ">
        <ul className="relative flex flex-nowrap" onMouseEnter={onStop} onMouseLeave={onStart}>
          <div className="absolute left-0 flex animate-InfinitySlider flex-nowrap items-center gap-8 pr-8">
            {titles.map((items) => (
              <TeamInfoCard key={items.title} title={items.title} content={items.content} />
            ))}
          </div>
          <div className="flex animate-InfinitySlider_copy flex-nowrap items-center gap-8 pr-8">
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
