import React from 'react';

import { Button } from '@mui/material';
import mainBackGround from 'asset/main/mainBackGround.jpg';
import 'css/main/MainInfo.css';

const MainInfo = () => {
  return (
    <div className="relative h-screen">
      <img src={mainBackGround} alt="mainBackGroundImg" className="w-screen h-full object-cover absolute" />
      <div className="absolute  bg-black backdrop-blur-md bg-opacity-20 text-white h-full w-full flex flex-col">
        <div className="welcomeCircle rounded-full bg-opacity-25 backdrop-blur " />
        <div className=" absolute bottom-96 bg-red-200 text-left first:text-right ">
          <div className="text-5xl font-bold mb-10">Welcome to UntoC!!</div>
          <div className="text-xl mb-5">UntoC은 untouchable, Ceaseless, Carbon 세 단어의 약어로, </div>
          <div className="text-xl">
            남들이 범접할 수 어렵고 끊임없이 노력하여 <br />
            탄소처럼 꼭 필요한 존재가 되자는 슬로건을 가지고 있습니다.
          </div>
          <Button
            variant="contained"
            className="!text-right !mr-0 !bg-white !bg-opacity-50 !text-white !font-semibold w-fit"
          >
            Join this club
          </Button>
        </div>
      </div>
      <div className="absolute top-0 right-0 text-white bg-slate-300">Let`s UntoC!</div>
    </div>
  );
};

export default MainInfo;
