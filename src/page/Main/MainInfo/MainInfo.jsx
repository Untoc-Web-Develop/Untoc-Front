import React, { useEffect } from 'react';

import { Button } from '@mui/material';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const MainInfo = () => {
  useEffect(() => {
    const textElement = document.getElementById('welcome-text');
    const textContent = 'Welcome to UntoC!!';
    textElement.textContent = '';
    textContent.split('').forEach((char, index) => {
      setTimeout(() => {
        textElement.innerHTML += char;
      }, 100 * index);
    });
  }, []);

  return (
    <div className="relative h-screen w-full bg-backgroundImage bg-cover bg-fixed bg-center bg-no-repeat text-white">
      <div className="md:text-md flex h-full w-full flex-col items-center justify-center space-y-5 bg-black bg-opacity-20 backdrop-blur-md  duration-1000 ease-out xl:text-xl">
        <div className="mb-20 font-bold duration-1000 ease-out md:text-3xl xl:text-6xl" id="welcome-text" />
        <div className="flex flex-col items-start">
          <div className="text-md animate-fadeIn">
            UntoC은 untouchable, Ceaseless, Carbon 세 단어의 약어로, <br />
            남들이 범접할 수 어렵고 끊임없이 노력하여 탄소처럼 꼭 필요한 존재가 되자는 슬로건을 가지고 있습니다.
          </div>
          <div className="!mt-10 w-full">
            <Button
              variant="contained"
              className="h-10 w-full !rounded-full !bg-white !bg-opacity-20 !font-semibold !shadow-none"
            >
              Join this club
              <MdKeyboardDoubleArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
