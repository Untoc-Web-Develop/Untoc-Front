import React, { useEffect } from 'react';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import mainBackGround from 'asset/main/mainBackGround.jpg';
import 'css/main/MainInfo.css';

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
    <div
      className="relative h-screen w-full"
      style={{
        backgroundImage: `url(${mainBackGround})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="absolute bg-black backdrop-blur-md bg-opacity-20 h-full w-full" />

      <div className="mainCircle_leftTop backdrop-blur " />
      <div className="mainCircle_leftBtm backdrop-blur" />
      <div className="mainCircle_rightBtm backdrop-blur" />
      <div className="mainCircle_rightTop backdrop-blur" />

      <div className="absolute bottom-52 left-28 text-white flex flex-col space-y-5 text-xl ">
        <div className="text-5xl font-bold " id="welcome-text" />
        <div className="animate-fadeIn ">UntoC은 untouchable, Ceaseless, Carbon 세 단어의 약어로, </div>
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
