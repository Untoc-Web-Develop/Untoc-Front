import React from 'react';

import TeamInfoCard from 'components/TeamInfoCard/TeamInfoCard';
import TeamListHeader from 'components/TeamListHeader/TeamListHeader';

const TeamList = () => {
  return (
    <div className="min-h-screen bg-grayLight pb-20">
      <div className="py-10">
        <TeamListHeader content="teamlist" isTeamed={false} />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex w-[80rem] flex-col gap-10">
          <div className="h-[38rem] rounded-[2rem] bg-white">
            <hr className="border border-yellowPoint" />
            <div className="mx-10 mt-3">
              <div className="mx-2 my-5 text-3xl font-bold text-yellowPoint">2023학년도 2학기</div>
              <div className="my-5 flex items-center justify-center">
                <div className="grid grid-cols-4 grid-rows-2 gap-5">
                  <TeamInfoCard title="Lead" content="김세론 김세론2 김세론3 김세론4 김세론5 김세론6 김세론7" />
                  <TeamInfoCard title="Lead" content="김세론 김세론2 김세론3 김세론4 김세론5 김세론6 김세론7" />
                  <TeamInfoCard title="Lead" content="김세론 김세론2 김세론3 김세론4 김세론5 김세론6 김세론7" />
                  <TeamInfoCard title="Lead" content="김세론 김세론2 김세론3 김세론4 김세론5 김세론6 김세론7" />
                  <TeamInfoCard title="Lead" content="김세론 김세론2 김세론3 김세론4 김세론5 김세론6 김세론7" />
                  <TeamInfoCard title="Lead" content="김세론 김세론2 김세론3 김세론4 김세론5 김세론6 김세론7" />
                  <TeamInfoCard title="Lead" content="김세론 김세론2 김세론3 김세론4 김세론5 김세론6 김세론7" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[38rem] rounded-[2rem] bg-white">
            <hr className="border border-placeHolder" />
            <div className="mx-10 mt-3">
              <div className="mx-2 my-5 text-3xl font-bold text-placeHolder">2023학년도 1학기</div>
              <div className="my-5 flex items-center justify-center">
                <div className="grid grid-cols-4 grid-rows-2 gap-5">
                  <TeamInfoCard title="Lead" content="김세론 김세론2 김세론3 김세론4 김세론5 김세론6 김세론7" />
                  <TeamInfoCard title="Lead" content="김세론 김세론2 김세론3 김세론4 김세론5 김세론6 김세론7" />
                  <TeamInfoCard title="Lead" content="김세론 김세론2 김세론3 김세론4 김세론5 김세론6 김세론7" />
                  <TeamInfoCard title="Lead" content="김세론 김세론2 김세론3 김세론4 김세론5 김세론6 김세론7" />
                  <TeamInfoCard title="Lead" content="김세론 김세론2 김세론3 김세론4 김세론5 김세론6 김세론7" />
                  <TeamInfoCard title="Lead" content="김세론 김세론2 김세론3 김세론4 김세론5 김세론6 김세론7" />
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
