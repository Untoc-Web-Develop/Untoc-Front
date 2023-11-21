import React from 'react';

import RecruitImg from 'asset/recruit/recruitImg.png';

const RecruitDescription = () => {
  return (
    <div className="sticky top-0 flex flex-col items-center justify-start w-full h-full px-12 text-sm font-normal">
      <div className="mb-10 h-2/5">
        <h1 className="mb-16 text-4xl">UntoC 16기 신입회원 모집</h1>
        <h2 className="mb-10 text-base text-yellowPoint">모집기간 : 2023.08.15 ~ 2023.08.31</h2>
        <p>
          지원을 하실 때, 학번 이름, 전화번호를 정확하게 기재해주세요. <br />
          지원 기한 종료 이후에는 해당 데이터를 안전하게 폐기할 예정이오니 <br />
          이점 유의바랍니다.
          <br />
          <br />
          신입회원 모집 관련 문의는 ___@___ 으로 연락주시거나 <br />
          UntoC 카카오톡 오픈 채팅방으로 문의 부탁드립니다. <br />
          감사합니다.
        </p>
      </div>
      <div className="h-2/5">
        <img src={RecruitImg} alt="recruitImg" />
      </div>
    </div>
  );
};

export default RecruitDescription;
