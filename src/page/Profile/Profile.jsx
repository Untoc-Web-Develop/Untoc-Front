import React from 'react';

const Profile = () => {
  return (
    <div className="w-[1000px] h-auto mx-auto mt-14">
      <div className="w-150 h-80 flex">
        <div className="w-[300px] mt-[50px] mb-[33px]">
          <img
            className="w-40 h-40 rounded-full ml-6"
            src="https://icnm.co.kr/common/img/default_profile.png"
            alt="기본 이미지"
          />
          <button
            className="bg-focusColor text-placeHolder text-sm rounded-lg px-[5px] py-0.5 my-6 ml-[59px]"
            type="submit"
          >
            프로필 편집
          </button>
        </div>
        <div className="w-[700px] mt-[50px] flex flex-col">
          <div className="flex gap-7">
            <div className="text-[23px] font-bold text-grayDark">김세론</div>
            <div className="mt-2.5">
              <span className="text-placeHolder text-sm mr-2">활동상태</span>
              <button type="submit">on/off</button>
            </div>
          </div>
          <div className="h-[140px] flex items-center">
            <img
              className="w-20 h-20"
              src="https://web.joongna.com/cafe-article-data/live/2023/06/15/996176878/16868310497860016jI_Y0lqq.png"
              alt="뱃지 이미지"
            />
          </div>
          <div className="grid grid-rows-2 grid-cols-2 gap-y-px">
            <div>
              <span className="inline-block w-[60px] font-bold text-xs">이메일</span>
              <span className="text-placeHolder text-xs">UntoC@gmail.com</span>
            </div>
            <div>
              <span className="inline-block w-[60px] font-bold text-xs">링크1</span>
              <span className="text-placeHolder text-xs">링크를 입력해주세요</span>
            </div>
            <div>
              <span className="inline-block w-[60px] font-bold text-xs">전화번호</span>
              <span className="text-placeHolder text-xs">비공개</span>
            </div>
            <div>
              <span className="inline-block w-[60px] font-bold text-xs">링크2</span>
              <span className="text-placeHolder text-xs">링크를 입력해주세요</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 h-[130px]">
        <hr />
        <div className="text-borderColor text-[11px] my-6 mx-10">간단하게 자신을 소개해주세요.</div>
        <hr />
      </div>
      <div className="w-100">
        <div className="font-bold text-lg text-grayDark mb-5">활동기록</div>
        <span className="text-borderColor text-sm ">
          활동기록이 존재하지 않습니다.
          <br />
          다양한 활동을 통해 팀을 이루고 뱃지를 획득하세요!
        </span>
      </div>
    </div>
  );
};

export default Profile;
