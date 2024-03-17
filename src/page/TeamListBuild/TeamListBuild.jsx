/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from 'react';

import TeamBuildDefaultImg from 'asset/teambuilddefault/teamBuildDefaultImg.png';
import ConfirmModal from 'components/Modals/ConfirmModal';
import TeamListHeader from 'components/TeamListHeader/TeamListHeader';
import { useForm } from 'react-hook-form';

import SelectMember from './SelectMember';

const TeamListBuild = () => {
  const [imgFile, setImgFile] = useState(TeamBuildDefaultImg);
  const [isOpen, setIsOpen] = useState(false);
  const imgRef = useRef();
  const { register, handleSubmit, setValue } = useForm({ defaultValues: { teamImg: TeamBuildDefaultImg } });

  const handleProfileImg = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImgFile(reader.result);
      setValue('teamImg', reader.result);
    };
  };

  const registerInfo = (data) => {
    // 상태 콘솔 출력
    console.log(JSON.stringify(data));
    // TODO
    // 백엔드 연결
  };

  return (
    <div className="justify-center bg-grayLight pb-[3rem]">
      <ConfirmModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        confirmBtnText="팀 생성"
        onConfirm={handleSubmit(registerInfo)}
      >
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="mt-8 text-lg font-normal text-black">&ldquo;LEAD&rdquo;팀을 생성 하시겠습니까?</div>
          <div className="text-sm font-normal text-placeHolder">
            팀원 정보와 팀 소개가 제대로 작성되었는지 확인해주세요
          </div>
        </div>
      </ConfirmModal>
      <div className="py-10">
        <TeamListHeader content="teambuilding" isTeamed={false} />
      </div>
      <div className="mx-auto h-[40rem] w-[70rem] rounded-[2rem] bg-white">
        <hr className="border-yellowPoint" />
        <div className="mx-10 my-7 text-lg font-semibold text-yellowPoint">|Introduction</div>
        <div className="mx-[4rem]">
          <div className="mx-8 flex h-[13rem] gap-20">
            <div className="flex flex-col items-center justify-center gap-5">
              <img className="h-20 w-20 rounded-full" src={imgFile} alt="이미지" />
              <label htmlFor="teamImg">
                <div className="flex h-7 w-[7rem] cursor-pointer items-center justify-center bg-grayLight text-xs text-grayDark">
                  사진 불러오기
                </div>
                <input className="h-0 w-0" type="file" id="teamImg" ref={imgRef} onChange={handleProfileImg} />
              </label>
            </div>
            <div className="flex flex-col items-center justify-center gap-10">
              <div className="flex items-center justify-center gap-5 text-sm ">
                <div className="font-semibold">팀이름</div>
                <input className="w-[15rem] border-b p-1" placeholder="LEAD" {...register('teamName')} />
              </div>
              <div className="flex gap-[2rem] text-sm">
                <div className="mt-1 font-semibold">Link</div>
                <div className="flex flex-col gap-3">
                  <input
                    className="w-[15rem] border-b p-1"
                    placeholder="http://lead-notion.io/asd"
                    {...register('link1')}
                  />
                  <input
                    className="w-[15rem] border-b p-1"
                    placeholder="http://github.com/lead"
                    {...register('link2')}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex grow gap-5 text-sm">
              <div className="font-semibold">팀원</div>
              <div className="flex flex-col gap-3 overflow-y-auto">
                <SelectMember setMemberName={setValue} />
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
                {...register('teamIntroduction')}
              />
            </div>
            <div className="float-right mx-12">
              <button
                onClick={() => setIsOpen(true)}
                type="submit"
                className="bg-yellowPoint px-8 py-2 text-xs font-semibold text-white"
              >
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
