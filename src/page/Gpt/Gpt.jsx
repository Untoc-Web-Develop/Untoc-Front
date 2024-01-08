import React from 'react';

import DelImg from 'asset/gpt/deleteImg.png';
import GptImg from 'asset/gpt/gptImg.png';
import SendImg from 'asset/gpt/sendImg.png';
import YouImg from 'asset/gpt/youImg.png';

const Gpt = () => {
  return (
    <div className="flex h-content overflow-hidden">
      {/* 사이드바 */}
      <div className="flex-shrink-0 w-[16rem] bg-grayLight overflow-y-auto overflow-x-hidden">
        <div className="flex h-full min-h-0 flex-col p-3">
          <div className="border border-black bg-grayDark50 p-1 mx-3 rounded-xl font-bold text-lg flex justify-center">
            ➕ New Chat
          </div>
          <div className="border-t-2 border-black mt-4" />
          {/* 대화 기록 예시 */}
          <div className="p-2">
            <h3 className="text-xl font mb-2">오늘</h3>
            <ol>
              <li>
                <div className="flex h-9 bg-grayDark50 mb-2 p-2 rounded-xl justify-between items-center">
                  오늘 점메추 ....
                  <img src={DelImg} alt="Delete" className="w-5 h-5" />
                </div>
              </li>
              <li>
                <div className="flex h-9 bg-grayDark50 mb-2 p-2 rounded-xl justify-between items-center">
                  대충 질문 요약 ....
                  <img src={DelImg} alt="Delete" className="w-5 h-5" />
                </div>
              </li>
            </ol>
          </div>

          <div className="p-2">
            <h3 className="text-xl mb-2">3일전</h3>
            <ol>
              <li>
                <div className="flex h-9 bg-grayDark50 mb-2 p-2 rounded-xl justify-between items-center">
                  대충 질문 요약 ....
                  <img src={DelImg} alt="Delete" className="w-5 h-5" />
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* 메인 화면 */}
      <div className="flex-1 flex justify-center">
        <div className="flex h-full flex-col p-2 w-[50vw]">
          {/* 채팅내역 */}
          <div className="p-4 overflow-auto h-full">
            {/* 예시 채팅 */}
            <div className="p-2 flex items-center rounded">
              <img src={GptImg} alt="Chat GPT" className="mr-7 w-12 h-12" />
              <div className="bg-grayDark50 p-4 mt-10 rounded-xl" style={{ borderRadius: '0 1rem 1rem 1rem' }}>
                <p className="text-base">안녕하세요. 언톡 Chat GPT입니다. ~~~~~</p>
              </div>
            </div>

            <div className="p-2 flex justify-end rounded">
              <div className="bg-grayDark50 p-4 mt-10 rounded-xl" style={{ borderRadius: '1rem 0 1rem 1rem' }}>
                <p className="text-base">질문 ~~~~</p>
              </div>
              <img src={YouImg} alt="You" className="ml-7 w-12 h-12" />
            </div>

            <div className="p-2 flex items-center rounded">
              <img src={GptImg} alt="Chat GPT" className="mr-7 w-12 h-12" />
              <div className="bg-grayDark50 p-4 mt-10 rounded-xl" style={{ borderRadius: '0 1rem 1rem 1rem' }}>
                <p className="text-base">답변 ~~~~</p>
              </div>
            </div>
          </div>
          {/* 입력창 */}
          <div className="h-16 flex items-center px-5">
            <div className="bg-grayDark50 flex items-center px-2 rounded-lg flex-grow">
              <textarea className="flex-1 bg-grayDark50 p-2" placeholder="Send Message" />
              <button type="submit" className="ml-2">
                <img src={SendImg} alt="Send" className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-grayDark50 ml-5 px-5 py-2 rounded font-bold">4 / 5</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gpt;
