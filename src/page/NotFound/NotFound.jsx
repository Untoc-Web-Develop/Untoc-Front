import React from 'react';
import { Link } from 'react-router-dom';

import notFoundImg from 'asset/notfound/notfoundImg.png';

const NotFound = () => {
  return (
    <div className="bg-white flex justify-center">
      <div className="w-[70rem] h-[30rem] mt-20 flex gap-10 justify-center items-center">
        <div className="w-[30rem]">
          <div className="text-yellowPoint text-3xl font-bold my-8">NOT FOUND</div>
          <div className="text-lg font-bold">요청하신 페이지를 찾을 수 없습니다</div>
          <div className="text-[0.9rem] font-semibold mt-5 mb-10">
            존재하지 않는 주소를 입력하셨거나,
            <br />
            요청하신 페이지의 주소가 변경되었을 수 있습니다.
          </div>
          <div className="w-[8rem] py-1 flex justify-center items-center border bg-yellowPoint rounded-lg text-white font-semibold">
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
