import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="min-h-screen bg-grayLight pt-8">
      <div className="flex h-[5rem] flex-col justify-center bg-white">
        <div className="mx-[18rem] mb-[0.2rem] text-sm font-semibold">Hello, 김세론!</div>
        <div className="mx-[18rem] text-xs text-placeHolder">자신을 나타낼 수 있는 한줄소개를 작성해주세요.</div>
      </div>
      <div className="mx-[15rem] mt-[2.5rem] grid grid-cols-[37rem_26rem] grid-rows-[17rem_8rem] gap-x-10">
        <div>
          <div className="mb-2 text-lg font-semibold text-grayDark">Profile</div>
          <div className="flex h-[13rem] bg-white">
            <div className="mx-4 flex flex-col items-center justify-center">
              <img
                className="h-[6.5rem] w-[6.5rem] rounded-full"
                src="https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfMjIg/MDAxNjA0MjI4ODc1MDkx.itxFQbHQ_zAuNQJU7PCOlF0mmstYn2v4ZF4WygunqGIg.3jloNowx-eWU-ztCLACtYubVbATNdCFQLjgvYsynV1og.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%EC%A3%BC%ED%99%A9.jpg?type=w400"
                alt="기본 프로필 이미지"
              />
              <div className="my-2 text-yellowPoint">
                <li>active</li>
              </div>
              <div className="h-7 bg-grayLight px-4 text-grayDark">
                <Link to="/profile/edit">Edit Profile</Link>
              </div>
            </div>
            <div className="flex-grow">
              <div className="my-3">
                <div className="text-xs text-placeHolder">Name</div>
                <span className="text-lg font-semibold text-grayDark">김세론</span>
                <span className="ml-1 text-sm text-placeHolder">19기</span>
              </div>
              <div className="grid grid-cols-2">
                <div className="text-xs text-placeHolder">Email</div>
                <div className="text-xs text-placeHolder">Github/Blog</div>
                <div>UntoC@gmail.com</div>
                <div className="text-placeHolder">Empty</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-2 text-lg font-semibold text-grayDark">Activity log</div>
          <div className="text-xs text-placeHolder">
            활동기록이 존재하지 않습니다.
            <br />
            다양한 활동을 통해 팀을 이루고 뱃지를 획득하세요!
          </div>
        </div>
        <div>
          <div className="mb-2 text-lg font-semibold text-grayDark">Badge</div>
          <div className="py-auto flex h-[6rem] gap-3 bg-white px-5">
            <div className="my-auto flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-focusColor text-borderColor">
              21
            </div>
            <div className="my-auto flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-focusColor text-borderColor">
              1등
            </div>
            <div className="my-auto flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-focusColor text-borderColor">
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
