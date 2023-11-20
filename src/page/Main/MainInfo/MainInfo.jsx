import React, { useEffect } from 'react';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';

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
    <div className="relative h-screen bg-backgroundImage w-full bg-cover bg-center bg-fixed bg-no-repeat">
      <div className="absolute bg-black backdrop-blur-md bg-opacity-20 h-full w-full" />
      <div className="absolute bottom-[30em] left-[30em] w-[25em] h-[25em] bg-white bg-opacity-40 backdrop-blur rounded-full" />
      <div className="absolute bottom-[-200px] left-[-200px] w-[65em] h-[65em] bg-gradient-to-b from-opacity-10 to-opacity-20 backdrop-blur rounded-full" />
      <div className="absolute bottom-[-200px] left-[-200px] w-[65em] h-[65em] bg-gradient-to-b from-white opacity-30 backdrop-blur to-gray rounded-full" />
      <div className="absolute bottom-[500px] right-[-250px] w-[30em] h-[30em] border-[25px] border-solid border-white opacity-20 backdrop-blur rounded-full" />
      <div className="absolute top-[170px] right-[-100px] w-[30em] h-[30em] bg-white bg-opacity-40 backdrop-blur rounded-full" />

      <div className="absolute bottom-52 left-28 text-white flex flex-col space-y-5 text-xl ">
        <div className="text-5xl font-bold " id="welcome-text" />
        <div className="animate-fadeIn duration-1000 ease-out  ">
          UntoC은 untouchable, Ceaseless, Carbon 세 단어의 약어로,{' '}
        </div>
        <div className="animate-fadeIn">
          남들이 범접할 수 어렵고 끊임없이 노력하여 <br />
          탄소처럼 꼭 필요한 존재가 되자는 슬로건을 가지고 있습니다.
        </div>
        <div />
        <div className="!mt-10 text-right">
          <Button variant="contained" className="!bg-white !bg-opacity-50 !font-semibold w-fit ">
            Join this club
            <FontAwesomeIcon icon={faChevronRight} className="ml-5" />
          </Button>
        </div>
      </div>
      <div className="absolute  text-white text-5xl right-10 font-bold top-96">Let`s UntoC!</div>
    </div>
  );
};

export default MainInfo;
