import React, { useEffect } from 'react';

import devTerm from '../../../constant/devTerm';

const MainInfo2 = () => {
  const randomDevTerm = (devterms) => {
    // const term = devterms[Math.floor(Math.random() * devterms.length)];
    const term = devterms[10];
    return (
      <>
        <div className="mb-2 text-lg  font-semibold">{term.title}</div>
        <div className="text-base">{term.content}</div>
        <div className="mb-2 text-sm">{term.script}</div>
        <div className="text-right text-sm">- {term.author} -</div>
      </>
    );
  };
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
      <div className="md:text-md flex h-full w-full flex-col items-center justify-center space-y-5 bg-black bg-opacity-50 duration-1000 ease-out xl:text-xl">
        {/* <div className="absolute z-0 h-full w-full bg-gradient-to-t from-black bg-opacity-20 opacity-50" /> */}
        <div className="mx-10 text-5xl font-bold duration-1000 ease-out" id="welcome-text" />
        {/* <Button
          variant="contained"
          className="!text-white !bg-white !bg-opacity-30 !rounded-xl h-10 !px-16 !mx-10 !mt-32"
        >
          Join this club
          <MdKeyboardDoubleArrowRight />
        </Button> */}
        <div className="text-md mx-auto max-w-3xl animate-fadeIn p-8">{randomDevTerm(devTerm)}</div>
      </div>
    </div>
  );
};

export default MainInfo2;
