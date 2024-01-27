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
      <div className="absolute h-full w-full bg-black bg-opacity-20 backdrop-blur-md" />
      <div className="absolute bottom-[30em] left-[30em] rounded-full bg-white bg-opacity-40 backdrop-blur md:h-[15em] md:w-[15em] xl:h-[25em] xl:w-[25em] " />
      <div className="from-opacity-10 to-opacity-20 absolute bottom-[-200px] left-[-200px]  rounded-full bg-gradient-to-b backdrop-blur md:h-[55em] md:w-[55em] xl:h-[65em] xl:w-[65em]" />
      <div className="to-gray absolute bottom-[-200px] left-[-200px] rounded-full bg-gradient-to-b from-white opacity-30 backdrop-blur md:h-[55em] md:w-[55em] xl:h-[65em] xl:w-[65em]" />
      <div className="md:h-[20em]border-[25px] absolute bottom-[500px] right-[-250px] rounded-full  border-solid border-white opacity-20 backdrop-blur md:w-[20em] xl:h-[30em] xl:w-[30em]" />
      <div className="absolute right-[-100px] top-[170px] rounded-full bg-white bg-opacity-40 backdrop-blur md:h-[20em] md:w-[20em] xl:h-[30em] xl:w-[30em]" />

      <div className="md:text-md absolute bottom-52  left-28 flex flex-col space-y-5 duration-1000  ease-out xl:text-xl  ">
        <div className="font-bold duration-1000 ease-out md:text-3xl xl:text-5xl " id="welcome-text" />
        <div className="animate-fadeIn  ">UntoC은 untouchable, Ceaseless, Carbon 세 단어의 약어로, </div>
        <div className="animate-fadeIn  ">
          남들이 범접할 수 어렵고 끊임없이 노력하여 <br />
          탄소처럼 꼭 필요한 존재가 되자는 슬로건을 가지고 있습니다.
        </div>
        <div />
        <div className="!mt-10 text-right">
          <Button variant="contained" className="w-fit !bg-white !bg-opacity-50 !font-semibold ">
            Join this club
            <MdKeyboardDoubleArrowRight />
          </Button>
        </div>
      </div>
      <div className="absolute   right-10 top-96 animate-fadeIn font-bold duration-1000 ease-out  md:text-4xl xl:text-5xl ">
        Let`s UntoC!
      </div>
    </div>
  );
};

export default MainInfo;
