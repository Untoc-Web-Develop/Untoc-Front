import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="bg-grayLight min-h-screen pt-8">
      <div className="h-[5rem] flex flex-col justify-center bg-white">
        <div className="font-semibold text-sm mx-[18rem] mb-[0.2rem]">Hello, 김세론!</div>
        <div className="text-xs text-placeHolder mx-[18rem]">자신을 나타낼 수 있는 한줄소개를 작성해주세요.</div>
      </div>
      <div className="grid grid-rows-[17rem_8rem] grid-cols-[37rem_26rem] gap-x-10 mx-[15rem] mt-[2.5rem]">
        <div>
          <div className="text-grayDark text-lg font-semibold mb-2">Profile</div>
          <div className="bg-white h-[13rem] flex">
            <div className="mx-4 flex flex-col justify-center items-center">
              <img
                className="w-[6.5rem] h-[6.5rem] rounded-full"
                src="https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfMjIg/MDAxNjA0MjI4ODc1MDkx.itxFQbHQ_zAuNQJU7PCOlF0mmstYn2v4ZF4WygunqGIg.3jloNowx-eWU-ztCLACtYubVbATNdCFQLjgvYsynV1og.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%EC%A3%BC%ED%99%A9.jpg?type=w400"
                alt="기본 프로필 이미지"
              />
              <div className="text-yellowPoint my-2">
                <li>active</li>
              </div>
              <div className="bg-grayLight text-grayDark px-4 h-7">
                <Link to="/profile/edit">Edit Profile</Link>
              </div>
            </div>
            <div className="flex-grow">
              <div className="my-3">
                <div className="text-placeHolder text-xs">Name</div>
                <span className="text-grayDark font-semibold text-lg">김세론</span>
                <span className="text-placeHolder text-sm ml-1">19기</span>
              </div>
              <div className="grid grid-cols-2">
                <div className="text-placeHolder text-xs">Email</div>
                <div className="text-placeHolder text-xs">Github/Blog</div>
                <div>UntoC@gmail.com</div>
                <div className="text-placeHolder">Empty</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-grayDark text-lg font-semibold mb-2">Activity log</div>
          <div className="text-placeHolder text-xs">
            활동기록이 존재하지 않습니다.
            <br />
            다양한 활동을 통해 팀을 이루고 뱃지를 획득하세요!
          </div>
        </div>
        <div>
          <div className="text-grayDark text-lg font-semibold mb-2">Badge</div>
          <div className="bg-white h-[6rem] px-5 py-auto flex gap-3">
            <div className="w-[3rem] h-[3rem] rounded-full text-borderColor bg-focusColor my-auto flex items-center justify-center">
              21
            </div>
            <div className="w-[3rem] h-[3rem] rounded-full text-borderColor bg-focusColor my-auto flex items-center justify-center">
              1등
            </div>
            <div className="w-[3rem] h-[3rem] rounded-full text-borderColor bg-focusColor my-auto flex items-center justify-center">
              관리자
            </div>
          </div>
        </div>
        <div>image</div>
      </div>
    </div>
  );
};

export default Profile;
