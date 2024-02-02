import React from 'react';
import { Link } from 'react-router-dom';

import notFoundImg from 'asset/notfound/notfoundImg.png';

const NotFound = () => {
  return (
    <div className="flex justify-center bg-white">
      <div className="mt-20 flex h-[30rem] w-[70rem] items-center justify-center gap-10">
        <div className="w-[30rem]">
          <div className="my-8 text-3xl font-bold text-yellowPoint">NOT FOUND</div>
          <div className="text-lg font-bold">요청하신 페이지를 찾을 수 없습니다</div>
          <div className="mb-10 mt-5 text-[0.9rem] font-semibold">
            존재하지 않는 주소를 입력하셨거나,
            <br />
            요청하신 페이지의 주소가 변경되었을 수 있습니다.
          </div>
          <div className="flex w-[8rem] items-center justify-center rounded-lg border bg-yellowPoint py-1 font-semibold text-white">
            <Link to="/">홈으로 가기</Link>
          </div>
        </div>
        <div className="w-[30rem]">
          <img src={notFoundImg} alt="notFoundImg" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
