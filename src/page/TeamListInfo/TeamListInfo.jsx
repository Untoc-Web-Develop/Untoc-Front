import React from 'react';

import teamListImg from 'asset/teamlist/teamListImg.png';
import TeamListHeader from 'components/TeamListHeader/TeamListHeader';

const TeamListInfo = () => {
  return (
    <div className="min-h-screen bg-grayLight pb-10">
      <div className="py-10">
        <TeamListHeader content="teaminfo" isTeamed />
      </div>
      <div className="mt-2 flex items-center justify-center">
        <div className="w-[60rem] rounded-[1.5rem] bg-white pt-9">
          <div className="flex h-[25rem] flex-col items-center justify-end">
            <div className="flex items-center justify-center">
              <img className="h-[25rem] w-[45rem]" src={teamListImg} alt="teamImg" />
            </div>
            <div className="absolute flex w-[60rem] items-center justify-center bg-black/40  text-white backdrop-blur-md">
              <div className="w-[42rem] py-5">
                <div className="mb-3 text-[1.5rem] font-semibold tracking-wider">LEAD</div>
                <div className="text-[0.95rem]">김세론1 김세론2 김세론3 김세론4 김세론5 김세론6</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="mb-10 mt-[4rem] text-sm leading-6 text-grayDark">
              정보컴퓨터 학술동아리 UntoC의 임원진으로 이루어진 동아리입니다.
              <br />
              LEAD는 Leadership, Education, Achievement, and Development의 약자로,
              <br />
              우리 동아리의 멤버들이 학문과 개발 분야에서 자신의 목표를 달성하고, <br />
              동아리를 함께 발전시키고자 하는 열망에서 비롯되었습니다.
              <br />
              <br />
              UntoC 동아리를 운영하면서 겪었던 불편함을 해소하기 위한 자체홈페이지 제작 및 운영을 목표로 팀을
              <br />
              구성하게 되었습니다.
            </div>
            <div className="w-[45rem]">
              <div className="mx-1 text-sm text-yellowPoint">Contact With Us</div>
              <hr className="m-1 border border-yellowPoint" />
              <div className="ml-2 mt-7 h-[6rem]">
                <div className="flex text-sm text-placeHolder">
                  <div>Link1 :&nbsp;</div>
                  <div>http://lead-notion.io/asfsafd113</div>
                </div>
                <div className="flex text-sm text-placeHolder">
                  <div>Link2 :&nbsp;</div>
                  <div>None</div>
                </div>
                <button
                  type="submit"
                  className="relative left-[41rem] top-1 rounded-md border border-error bg-white px-5 py-[0.2rem] text-xs font-semibold text-error"
                >
                  팀 나가기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamListInfo;
