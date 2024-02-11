import React from 'react';

import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import teamListImg from 'asset/teamlist/teamListImg.png';
import TeamListHeader from 'components/TeamListHeader/TeamListHeader';

const Team = () => {
  return (
    <Card sx={{ width: '15rem' }} elevation={3}>
      <CardActionArea>
        <CardMedia component="img" image={teamListImg} alt="TeamImg" sx={{ height: 100 }} />
        <CardContent sx={{ height: 75 }}>
          <Typography gutterBottom component="div" sx={{ lineHeight: '1.3', fontSize: '1rem' }}>
            LEAD
          </Typography>
          <Typography className="text-placeHolder" sx={{ lineHeight: '1.2', fontSize: '0.6rem' }}>
            김세론 김세론2 김세론3 김세론4 김세론5 <br />
            김세론6 김세론7
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const TeamList = () => {
  return (
    <div className="min-h-screen bg-grayLight pb-20">
      <div className="py-10">
        <TeamListHeader content="teamlist" isTeamed={false} />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex w-[70rem] flex-col gap-10">
          <div className="h-[30rem] rounded-[2rem] bg-white">
            <hr className="border border-yellowPoint" />
            <div className="mx-10 mt-3">
              <div className="mx-2 my-5 text-2xl font-bold text-yellowPoint">2023학년도 2학기</div>
              <div className="my-5 flex items-center justify-center">
                <div className="grid grid-cols-4 grid-rows-2 gap-5">
                  <Team />
                  <Team />
                  <Team />
                  <Team />
                  <Team />
                  <Team />
                  <Team />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[30rem] rounded-[2rem] bg-white">
            <hr className="border border-placeHolder" />
            <div className="mx-10 mt-3">
              <div className="mx-2 my-5 text-2xl font-bold text-placeHolder">2023학년도 1학기</div>
              <div className="my-5 flex items-center justify-center">
                <div className="grid grid-cols-4 grid-rows-2 gap-5">
                  <Team />
                  <Team />
                  <Team />
                  <Team />
                  <Team />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamList;
