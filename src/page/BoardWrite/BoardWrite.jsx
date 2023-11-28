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
    <div className="h-screen bg-GrayLight">
      <div className="w-full h-full">
        <div className="p-4 w-2/3 mx-auto">
          <div className="my-10 w-1/2 mx-auto">
            {/* 
            추후에 입력 전구 이미지로 변경
            게시판 마다 적용되게 바꿀예정
            */}
            <div className="flex justify-center items-center mb-3">
              <img src={RecruitImg} alt="recruitImg" className="h-5 w-5" />
              <h1 className="font-medium ml-3">공지 게시글 작성 가이드라인 (규칙)</h1>
            </div>
            <div className="text-xs text-placeHolder">
              <p>
                &bull;공지 게시글은 <span className="text-yellowPoint">관리자 이상의 등급</span>만 작성 가능합니다.
              </p>
              <p>
                &bull;공지 게시글을 <span className="text-yellowPoint">필독으로 지정하여 상단에 고정</span>
                해둘 수 있으나, 지난 게시글은 관리를 통해 고정해제가 필요합니다.
              </p>
            </div>
          </div>
        </div>
        <hr className="border-2 border-yellowPoint" />
        <div className="w-2/3 mx-auto mt-10 h-2/3">
          <div className="flex items-center justify-start mb-4">
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
                  className="w-full p-2 border-b-2 bg-GrayLight border-solid border-placeHolder text-grayDark"
                  placeholder="Enter Title Here"
                />
              </div>
            </div>
          </div>
          {/* markdown이 정해지면 바꿀예정 */}
          <div className="mt-5 h-5/6 shadow-md">
            <textarea
              id="markdownContent"
              className="w-full h-full p-2 border border-GrayLight rounded mb-4"
              rows="10"
              placeholder="글을 작성해주세요."
              value={markdown}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-end items-center mt-4 space-x-3 mr-10">
            <button
              type="button"
              className="w-1/12 border border-placeHolder text-black py-1 text-sm rounded hover:bg-yellowPoint hover:text-white hover:border-yellowPoint"
              onClick={() => {}}
            >
              취소
            </button>
            <button
              type="submit"
              className="bg-yellowPoint w-1/12 text-white py-1 text-sm rounded hover:bg-white hover:text-black border border-yellowPoint"
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
