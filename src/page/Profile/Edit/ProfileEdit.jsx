import React from 'react';

const ProfileEdit = () => {
  return (
    <div className="bg-grayLight min-h-screen pt-8">
      <div className="h-[3rem] flex flex-col justify-center items-center bg-white mb-[3rem]">
        <div className="text-grayDark text-sm font-semibold ">Edit and Update Your Profile!</div>
      </div>
      <hr className="mx-[12rem] my-3" />
      <div className="mx-[12rem]">
        <div className="flex h-80">
          <div className="w-[25rem] text-grayDark font-semibold text-lg">Personal Info</div>
          <div className="flex-grow my-auto rounded-b-lg shadow-lg">
            <div className="text-sm h-60 grid grid-cols-2 grid-rows-3 items-center rounded-t-lg bg-white">
              <div className="mx-auto">
                <div className="text-grayDark font-semibold mb-1">이름</div>
                <input className="w-[20rem] h-8 pl-3 border border-placeHolder rounded-lg" placeholder="김세론" />
              </div>
              <br />
              <div className="mx-auto">
                <div className="text-grayDark font-semibold mb-1">Email</div>
                <input
                  className="w-[20rem] h-8 pl-3 border border-placeHolder rounded-lg"
                  placeholder="UntoC@gmail.com"
                />
              </div>
              <div className="mx-auto">
                <div className="text-grayDark font-semibold mb-1">전화번호</div>
                <input
                  className="w-[20rem] h-8 pl-3 border border-placeHolder rounded-lg"
                  placeholder="010-1234-5678"
                />
              </div>
              <div className="mx-auto">
                <div className="text-grayDark font-semibold mb-1">링크 URL (블로그, github 등)</div>
                <input
                  className="w-[20rem] h-8 pl-3 border border-placeHolder rounded-lg"
                  placeholder="http://untoC-github"
                />
              </div>
              <div className="mx-auto">
                <div className="text-grayDark font-semibold mb-1">링크 URL (블로그, github 등)</div>
                <input
                  className="w-[20rem] h-8 pl-3 border border-placeHolder rounded-lg"
                  placeholder="http://UntoC-blog.co.kr"
                />
              </div>
            </div>
            <div className="h-10 flex items-center justify-end">
              <button
                className="mr-7 w-[5.5rem] h-7 text-sm text-yellowPoint font-semibold rounded-lg border-2 border-yellowPoint bg-white"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </div>
        <hr className="my-3" />
        <div className="flex">
          <div className="w-[25rem] text-grayDark font-semibold text-lg">Profile</div>
          <div className="flex-grow rounded-b-lg shadow-lg">
            <div className="h-40 bg-white rounded-t-lg flex">
              <div className="w-[11rem] flex flex-col items-center justify-center">
                <img
                  className="w-20 h-20 rounded-full m-3"
                  src="https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfMjIg/MDAxNjA0MjI4ODc1MDkx.itxFQbHQ_zAuNQJU7PCOlF0mmstYn2v4ZF4WygunqGIg.3jloNowx-eWU-ztCLACtYubVbATNdCFQLjgvYsynV1og.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%EC%A3%BC%ED%99%A9.jpg?type=w400"
                  alt="현재 이미지"
                />
                <button className="h-7 w-[7rem] bg-grayLight text-grayDark text-xs" type="submit">
                  사진 불러오기
                </button>
              </div>
              <div className="w-[7rem] py-10">
                <div className="text-sm text-grayDark font-semibold">
                  <li>활동 상태 변경</li>
                </div>
                <input type="checkbox" /> 활동중
                <br />
                <input type="checkbox" /> 휴면
              </div>
              <div className="flex-grow ml-5 py-9">
                <div className="text-sm mb-1 text-grayDark font-semibold">
                  <li>한줄 소개 작성</li>
                </div>
                <textarea
                  className="py-3 px-3 rounded-lg text-xs border border-placeHolder"
                  cols="60"
                  rows="4"
                  placeholder="자신을 나타낼 수 있는 한줄소개를 작성해주세요."
                />
              </div>
            </div>
            <div className="h-10 flex items-center justify-end">
              <button
                className="mr-7 w-[5.5rem] h-7 text-sm text-yellowPoint font-semibold rounded-lg border-2 border-yellowPoint bg-white"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
