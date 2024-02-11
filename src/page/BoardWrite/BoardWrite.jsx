import React, { useState } from 'react';

import RecruitImg from 'asset/recruit/recruitImg.png';

const BoardWrite = () => {
  const [markdown, setMarkdown] = useState('');
  const [isMustRead, setIsMustRead] = useState(false);

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsMustRead((prev) => !prev); // Toggle checkbox state
  };

  return (
    <div className="bg-GrayLight h-screen">
      <div className="h-full w-full">
        <div className="mx-auto w-2/3 p-4">
          <div className="mx-auto my-10 w-1/2">
            {/* 
            추후에 입력 전구 이미지로 변경
            게시판 마다 적용되게 바꿀예정
            */}
            <div className="mb-3 flex items-center justify-center">
              <img src={RecruitImg} alt="recruitImg" className="h-5 w-5" />
              <h1 className="ml-3 font-medium">공지 게시글 작성 가이드라인 (규칙)</h1>
            </div>
            <div className="text-xs text-placeHolder">
              <ul className="list-disc">
                <li>
                  공지 게시글은 <span className="text-yellowPoint">관리자 이상의 등급</span>만 작성 가능합니다.
                </li>
                <li>
                  공지 게시글을 <span className="text-yellowPoint">필독으로 지정하여 상단에 고정</span>
                  해둘 수 있으나, 지난 게시글은 관리를 통해 고정해제가 필요합니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-2 border-yellowPoint" />
        <div className="mx-auto mt-10 h-2/3 w-2/3">
          <div className="mb-4 flex items-center justify-start">
            <div className="w-20">
              <input
                type="checkbox"
                id="mustRead"
                name="mustRead"
                className="mr-2"
                checked={isMustRead}
                onChange={handleCheckboxChange}
              />
              필독!
            </div>
            <div className="w-full">
              <div>
                <input
                  type="text"
                  id="title"
                  className="bg-GrayLight w-full border-b-2 border-solid border-placeHolder p-2 text-grayDark"
                  placeholder="Enter Title Here"
                />
              </div>
            </div>
          </div>
          {/* markdown이 정해지면 바꿀예정 */}
          <div className="mt-5 h-5/6 shadow-md">
            <textarea
              id="markdownContent"
              className="border-GrayLight mb-4 h-full w-full rounded border p-2"
              rows="10"
              placeholder="글을 작성해주세요."
              value={markdown}
              onChange={handleInputChange}
            />
          </div>
          <div className="mr-10 mt-4 flex items-center justify-end space-x-3">
            <button
              type="button"
              className="w-1/12 rounded border border-placeHolder py-1 text-sm text-black hover:border-yellowPoint hover:bg-yellowPoint hover:text-white"
              onClick={() => {}}
            >
              취소
            </button>
            <button
              type="submit"
              className="w-1/12 rounded border border-yellowPoint bg-yellowPoint py-1 text-sm text-white hover:bg-white hover:text-black"
              onClick={() => {}}
            >
              작성완료
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardWrite;
