import React from 'react';

import TeamListHeader from 'components/TeamListHeader/TeamListHeader';

const TeamListBuild = () => {
  return (
    <div className="justify-center bg-grayLight pb-[3rem]">
      <div className="py-10">
        <TeamListHeader content="teambuilding" isTeamed={false} />
      </div>
      <div className="mx-auto h-[40rem] w-[70rem] rounded-[2rem] bg-white">
        <hr className="border-yellowPoint" />
        <div className="mx-10 my-7 text-lg font-semibold text-yellowPoint">|Introduction</div>
        <div className="mx-[4rem]">
          <div className="mx-8 flex h-[13rem] gap-20">
            <div className="flex flex-col items-center justify-center gap-5">
              <img
                className="h-20 w-20 rounded-full"
                src="https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfMjIg/MDAxNjA0MjI4ODc1MDkx.itxFQbHQ_zAuNQJU7PCOlF0mmstYn2v4ZF4WygunqGIg.3jloNowx-eWU-ztCLACtYubVbATNdCFQLjgvYsynV1og.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%EC%A3%BC%ED%99%A9.jpg?type=w400"
                alt="이미지"
              />
              <label htmlFor="teamImg">
                <div className="flex h-7 w-[7rem] cursor-pointer items-center justify-center bg-grayLight text-xs text-grayDark">
                  사진 불러오기
                </div>
                <input className="h-0 w-0" type="file" id="teamImg" />
              </label>
            </div>
            <div className="flex flex-col items-center justify-center gap-10">
              <div className="flex items-center justify-center gap-5 text-sm ">
                <div className="font-semibold">팀이름</div>
                <input className="w-[15rem] border-b p-1" placeholder="LEAD" />
              </div>
              <div className="flex gap-[2rem] text-sm">
                <div className="mt-1 font-semibold">Link</div>
                <div className="flex flex-col gap-3">
                  <input className="w-[15rem] border-b p-1" placeholder="http://lead-notion.io/asd" />
                  <input className="w-[15rem] border-b p-1" placeholder="NONE" />
                </div>
              </div>
            </div>
            <div className="mt-8 flex grow gap-5 text-sm">
              <div className="font-semibold">팀원</div>
              <div className="flex flex-col gap-3">
                <input className="w-[15rem] border-b  p-1" placeholder="세론1" />
                <input className="w-[15rem] border-b p-1" placeholder="세론2" />
                <input className="w-[15rem] border-b p-1" placeholder="세론3" />
                <input className="w-[15rem] border-b p-1" placeholder="+ 팀원 추가하기" />
              </div>
            </div>
          </div>
          <div>
            <li className="mx-3 text-sm font-semibold">팀 소개글 작성</li>
            <div className="mx-7 mb-7 mt-3 flex items-center justify-center text-sm">
              <textarea
                className="resize-none rounded-lg border px-5 py-3"
                cols="140"
                rows="10"
                placeholder="팀을 나타낼 수 있는 소개글을 작성해주세요."
              />
            </div>
            <div className="float-right mx-12">
              <button type="submit" className="bg-yellowPoint px-8 py-2 text-xs font-semibold text-white">
                팀 생성
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamListBuild;
