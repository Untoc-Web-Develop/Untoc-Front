import React from 'react';

const RecruitForm = () => {
  return (
    <form className="h-full w-full bg-[#FFFFFF] shadow-[4px_4px_20px_0_rgba(0,0,0,0.1)] rounded-[30px] p-[50px] relative font-normal text-sm">
      <div className="h-[68px] w-[200px] bg-[#FFFFFF] absolute top-[-45px] left-[0] flex justify-center items-center rounded-t-[10px] text-lg text-[#FFBD00]">
        Fill out this form
      </div>
      <div className="h-full w-full flex flex-col justify-between items-center">
        <div className="h-5/6 w-full">
          <div className="h-1/5 w-full flex justify-between items-center mb-3">
            <label htmlFor="studentId" className="w-[240px]">
              <p className="mb-3">학번</p>
              <input
                type="text"
                name="studentId"
                id="studentId"
                placeholder="20230001"
                className="w-full border border-[#EBEBEB] p-1"
              />
            </label>
            <label htmlFor="name" className="w-[240px]">
              <p className="mb-3">이름</p>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="홍길동"
                className="w-full border border-[#EBEBEB] p-1"
              />
            </label>
          </div>
          <div className="h-1/5 w-full mb-3">
            <label htmlFor="phone">
              <p className="mb-3">전화번호</p>
              <input
                type="text"
                name="phone-number"
                id="phone"
                placeholder="010-1234-5678"
                className="w-full border border-[#EBEBEB] p-1"
              />
            </label>
          </div>
          <div className="h-1/4 w-full mb-3">
            <label htmlFor="reason">
              <p className="mb-3">동아리 지원 동기 (300자 이내)</p>
              <textarea
                type="text"
                name="reason"
                id="reason"
                placeholder="UntoC 동아리를 지원하게 된 이유에 대해 설명해주세요.
                최소 30자 이상의 내용이 필요합니다."
                className="h-2/3 w-full border border-[#EBEBEB] p-1 resize-none"
              />
            </label>
          </div>
          <div className="h-1/4 w-full mb-3">
            <label htmlFor="activity">
              <p className="mb-3">동아리에서 하고 싶은 활동 (300자 이내)</p>
              <textarea
                type="text"
                name="activity"
                id="activity"
                placeholder="UntoC 동아리에 들어오게 된다면 하고싶은 활동에 대해 적어주세요.
                위 내용을 바탕으로 동아리에 기여할 수 있는 아이디어를 제공하고,
                스터디 및 팀을 구성할 때 참고자료가 될 수 있습니다."
                className="h-2/3 w-full border border-[#EBEBEB] p-1 resize-none"
              />
            </label>
          </div>
        </div>
        <div className="h-1/6 w-full flex justify-end items-center">
          <input type="button" value="취소" className="h-7 w-1/4 border border-[#DDE1E6] rounded-[5px]" />
          <input
            type="button"
            value="제출"
            className="h-7 w-1/4 ml-3 border border-[#FFBD00] bg-[#FFBD00] text-white rounded-[5px]"
          />
        </div>
      </div>
    </form>
  );
};

export default RecruitForm;
