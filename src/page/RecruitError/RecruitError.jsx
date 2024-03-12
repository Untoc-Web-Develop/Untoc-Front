import React from 'react';
import { Link } from 'react-router-dom';

import sorryImg from 'asset/recruit/sorryImg.png';

const RecruitError = () => {
  return (
    <div className="flex justify-center bg-white">
      <div className="mt-20 flex h-[30rem] w-[70rem] items-center justify-center gap-10">
        <div className="w-[30rem]">
          <div className="mb-10 mt-5 text-lg font-semibold leading-10">
            안녕하십니까. UNTOC 회장 정희철입니다.
            <br />
            먼저 죄송하다는 말씀을 드리겠습니다.
            <br />
            현재 웹페이지를 통해 신입회원을 모집하는 과정에서 지원서의 답변 일부가 누락되는 현상이 발견되었습니다.
            <br />
            현재 추정하는 원인은 지원 기간 동안 여러번의 배포를 하는 과정에서 데이터가 누락된 것 같습니다.
            <br />
            다시 한번 죄송하다는 말씀을 드리며, 아래 구글폼 링크를 통해 재지원해주시면 감사하겠습니다.
            <br />
            UNTOC의 지원에 감사를 드리며 죄송합니다.
            <br />
            지원 마감 : 3월 13일 오전 11시
            <br />
            지원 링크 :{' '}
            <a className="text-blue-500" href="https://forms.gle/XPGkBQYMf5dwTUhu7">
              https://forms.gle/XPGkBQYMf5dwTUhu7
            </a>
          </div>
          <div className="flex w-[8rem] items-center justify-center rounded-lg border bg-yellowPoint py-1 font-semibold text-white">
            <Link to="https://forms.gle/XPGkBQYMf5dwTUhu7">지원서로 이동</Link>
          </div>
        </div>
        <div className="w-[30rem]">
          <img src={sorryImg} alt="notFoundImg" />
        </div>
      </div>
    </div>
  );
};

export default RecruitError;
