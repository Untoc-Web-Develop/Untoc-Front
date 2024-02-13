import React from 'react';

import DelImg from 'asset/gpt/deleteImg.png';
import GptImg from 'asset/gpt/gptImg.png';
import SendImg from 'asset/gpt/sendImg.png';
import YouImg from 'asset/gpt/youImg.png';

const Gpt = () => {
  return (
    <div className="flex h-content overflow-hidden bg-white">
      {/* 사이드바 */}
      <div className="w-[16rem] flex-shrink-0 overflow-y-auto overflow-x-hidden bg-grayLight">
        <div className="flex h-full min-h-0 flex-col p-3">
          <div className="mx-3 flex cursor-pointer justify-center rounded-xl border border-black bg-grayDark50 p-1 text-lg  font-bold">
            New Chat
          </div>
          <div className="mt-4 border-t-2 border-black" />
          {/* 대화 기록 예시 */}
          <div className="p-2">
            <h3 className="font mb-2 text-xl">오늘</h3>
            <ol>
              <li>
                <div className="mb-2 flex h-9 cursor-pointer items-center justify-between rounded-xl bg-grayDark50 p-2">
                  오늘 점메추 ....
                  <img src={DelImg} alt="Delete" className="h-5 w-5 cursor-pointer" />
                </div>
              </li>
              <li>
                <div className="mb-2 flex h-9 cursor-pointer items-center justify-between rounded-xl bg-grayDark50 p-2">
                  대충 질문 요약 ....
                  <img src={DelImg} alt="Delete" className="h-5 w-5 cursor-pointer" />
                </div>
              </li>
            </ol>
          </div>

          <div className="p-2">
            <h3 className="mb-2 text-xl">3일전</h3>
            <ol>
              <li>
                <div className="mb-2 flex h-9 cursor-pointer items-center justify-between rounded-xl bg-grayDark50 p-2">
                  대충 질문 요약 ....
                  <img src={DelImg} alt="Delete" className="h-5 w-5 cursor-pointer" />
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* 메인 화면 */}
      <div className="flex flex-1 justify-center px-5">
        <div className="flex h-full w-[60vw] flex-col p-2">
          {/* 채팅내역 */}
          <div className="h-full overflow-auto p-4">
            {/* 예시 채팅 */}
            <div className="flex items-center rounded p-2">
              <img src={GptImg} alt="Chat GPT" className="mr-7 h-12 w-12" />
              <div className="mt-10 rounded-xl bg-grayDark50 p-4" style={{ borderRadius: '0 1rem 1rem 1rem' }}>
                <p className="text-base">안녕하세요. 언톡 Chat GPT입니다. ~~~~~</p>
              </div>
            </div>

            <div className="flex justify-end rounded p-2">
              <div className="mt-10 rounded-xl bg-grayDark50 p-4" style={{ borderRadius: '1rem 0 1rem 1rem' }}>
                <p className="text-base">질문 ~~~~</p>
              </div>
              <img src={YouImg} alt="You" className="ml-7 h-12 w-12" />
            </div>

            <div className="flex items-center rounded p-2">
              <img src={GptImg} alt="Chat GPT" className="mr-7 h-12 w-12" />
              <div className="mt-10 rounded-xl bg-grayDark50 p-4" style={{ borderRadius: '0 1rem 1rem 1rem' }}>
                <p className="text-base">답변 ~~~~</p>
              </div>
            </div>
          </div>
          {/* 입력창 */}
          <div className="flex h-16 items-center px-5">
            <div className="flex flex-grow items-center rounded-lg bg-grayDark50 px-2">
              <textarea className="flex-1 bg-grayDark50 p-2" placeholder="Send Message" />
              <button type="submit" className="ml-2">
                <img src={SendImg} alt="Send" className="h-5 w-5" />
              </button>
            </div>
            <div className="ml-5 rounded bg-grayDark50 px-5 py-2 font-bold">4 / 5</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gpt;
