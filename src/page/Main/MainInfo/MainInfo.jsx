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
    <div className="relative h-screen bg-backgroundImage w-full bg-cover bg-center bg-fixed bg-no-repeat text-white">
      <div className="absolute bg-black backdrop-blur-md bg-opacity-20 h-full w-full" />
      <div className="absolute bottom-[30em] left-[30em] xl:w-[25em] xl:h-[25em] md:w-[15em] md:h-[15em] bg-white bg-opacity-40 backdrop-blur rounded-full " />
      <div className="absolute bottom-[-200px] left-[-200px] xl:w-[65em] xl:h-[65em]  md:w-[55em] md:h-[55em] bg-gradient-to-b from-opacity-10 to-opacity-20 backdrop-blur rounded-full" />
      <div className="absolute bottom-[-200px] left-[-200px] xl:w-[65em] xl:h-[65em] md:w-[55em] md:h-[55em] bg-gradient-to-b from-white opacity-30 backdrop-blur to-gray rounded-full" />
      <div className="absolute bottom-[500px] right-[-250px] xl:w-[30em] xl:h-[30em]  md:w-[20em] md:h-[20em]border-[25px] border-solid border-white opacity-20 backdrop-blur rounded-full" />
      <div className="absolute top-[170px] right-[-100px] xl:w-[30em] xl:h-[30em] md:w-[20em] md:h-[20em] bg-white bg-opacity-40 backdrop-blur rounded-full" />

      <div className="absolute bottom-52 left-28  flex flex-col space-y-5 xl:text-xl md:text-md  duration-1000 ease-out  ">
        <div className="xl:text-5xl md:text-3xl font-bold duration-1000 ease-out " id="welcome-text" />
        <div className="animate-fadeIn  ">UntoC은 untouchable, Ceaseless, Carbon 세 단어의 약어로, </div>
        <div className="animate-fadeIn  ">
          남들이 범접할 수 어렵고 끊임없이 노력하여 <br />
          탄소처럼 꼭 필요한 존재가 되자는 슬로건을 가지고 있습니다.
        </div>
        <div />
        <div className="!mt-10 text-right">
          <Button variant="contained" className="!bg-white !bg-opacity-50 !font-semibold w-fit ">
            Join this club
            <MdKeyboardDoubleArrowRight />
          </Button>
        </div>
      </div>
      <div className="absolute   xl:text-5xl md:text-4xl right-10 font-bold top-96 animate-fadeIn  duration-1000 ease-out ">
        Let`s UntoC!
      </div>
    </div>
  );
};

export default MainInfo;
