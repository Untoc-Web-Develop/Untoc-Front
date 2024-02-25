import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetApplySettingQuery } from 'api/applyApi';
import RecruitImg from 'asset/recruit/recruitImg.png';
import useRoleCheck from 'hooks/useRoleCheck';

const RecruitDescription = () => {
  const { isLogin } = useRoleCheck('admin');
  const { data: applySetting, isLoading } = useGetApplySettingQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (!applySetting && !isLogin && !isLoading) {
      alert('모집 설정이 없습니다. 관리자에게 문의해주세요.');
      navigate('/', { replace: true });
    }
  }, [applySetting, isLogin, navigate, isLoading]);

  const dateToString = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-start px-12 text-sm font-normal">
      <div className="mb-10 h-2/5">
        <h1 className="mb-16 text-4xl">UntoC {applySetting?.data.generation}기 신입회원 모집</h1>
        <h2 className="mb-10 text-base text-yellowPoint">
          모집기간 : {dateToString(applySetting?.data.openAt)} ~ {dateToString(applySetting?.data.closeAt)}
        </h2>
        <p>{applySetting?.data.content || '모집 설명이 없습니다.'}</p>
      </div>
      <div className="h-2/5">
        <img src={RecruitImg} alt="recruitImg" />
      </div>
    </div>
  );
};

export default RecruitDescription;
