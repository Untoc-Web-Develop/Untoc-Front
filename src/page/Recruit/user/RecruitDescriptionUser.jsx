import React from 'react';

import { useGetApplySettingQuery } from 'api/applyApi';
import RecruitImg from 'asset/recruit/recruitImg.png';

const RecruitDescriptionUser = () => {
  const { data: applySetting } = useGetApplySettingQuery();

  const dateToString = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-start px-12 text-sm font-normal">
      <div className="mb-10 h-2/5">
        <h1 className="mb-16 text-4xl">UNTOC {applySetting?.data.generation}기 신입 회원 모집</h1>
        <h2 className="mb-10 text-base text-yellowPoint">
          모집기간 : {dateToString(applySetting?.data.openAt)} ~ {dateToString(applySetting?.data.closeAt)}
        </h2>
        <p className="whitespace-pre-wrap">{applySetting?.data.content}</p>
      </div>
      <div className="h-2/5">
        <img src={RecruitImg} alt="recruitImg" />
      </div>
    </div>
  );
};

export default RecruitDescriptionUser;
