import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@mui/material';
import FriendImg from 'asset/main/mainFriends.png';
import TeamImg from 'asset/main/mainTeam.png';

import RandomDevTerm from './components/RandomDevTerm';
import ImgTooltip from '../../../components/ImgToolTip/ImgToolTip';

const MainInfo = () => {
  return (
    <div className="h-screen w-full overflow-scroll bg-backgroundImage bg-cover bg-center scrollbar-hide">
      <div className="mx-auto flex w-2/3 items-center justify-between pt-8">
        <ImgTooltip title="https://storyset.com/business" src={TeamImg} alt="teamImg" imgClassName="w-1/2" />
        <div className="flex w-1/2 flex-col items-center gap-5">
          <div className="text-4xl font-semibold text-white">Welcome to UntoC!</div>
          <Link to="/recruit">
            <Button variant="contained" className="!bg-white !bg-opacity-25 !backdrop-blur-sm">
              Join this club &gt;&gt;&gt;
            </Button>
          </Link>
        </div>
        <div />
      </div>
      <div className="px-auto mx-auto flex w-4/5 items-center justify-end pt-8">
        <div className="mr-8 flex w-2/3 flex-col ">
          <RandomDevTerm />
        </div>
        <ImgTooltip title="https://storyset.com/people" src={FriendImg} alt="friendImg" imgClassName="w-1/3" />
        <div />
      </div>
    </div>
  );
};

export default MainInfo;
