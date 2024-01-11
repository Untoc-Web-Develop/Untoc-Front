import React, { useEffect, useState } from 'react';

const ProfileEdit = () => {
  const [values1, setValues1] = useState({
    // 이름, 이메일, 전번, 링크2개 상태 관리
    name: '',
    email: '',
    tel: '',
    link1: '',
    link2: '',
  });
  // Save 버튼이 나뉘어져 있어서 상태 관리 2개로 분리해놓음
  const [values2, setValues2] = useState({
    // 프로필 사진, 활동여부, 자기소개 상태 관리
    profileImg:
      'https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfMjIg/MDAxNjA0MjI4ODc1MDkx.itxFQbHQ_zAuNQJU7PCOlF0mmstYn2v4ZF4WygunqGIg.3jloNowx-eWU-ztCLACtYubVbATNdCFQLjgvYsynV1og.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%EC%A3%BC%ED%99%A9.jpg?type=w400',
    activityManagement: '',
    selfIntroduction: '',
  });

  const { name, email, tel, link1, link2 } = values1;
  const { profileImg, selfIntroduction } = values2;

  const onChange = (e) => {
    // 이름, 이메일, 전번, 링크2개, 자기소개 입력값 저장
    const { id, value } = e.target;
    if (id !== 'selfIntroduction') {
      setValues1({
        ...values1,
        [id]: value,
      });
    } else {
      setValues2({
        ...values2,
        [id]: value,
      });
    }
  };

  const handleProfileImg = (e) => {
    // 프로필 이미지 업로드
    const uploadImg = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadImg);
    reader.onload = () => {
      setValues2({
        ...values2,
        profileImg: reader.result,
      });
    };
  };

  const checkOnlyOne = (e) => {
    // 활동중, 휴면 둘 중 하나만 선택 가능
    const checkedBoxId = e.target.id;
    const checkboxes = document.getElementsByName('activityManagement');
    for (let index = 0; index < checkboxes.length; index += 1) {
      if (checkboxes[index].id !== checkedBoxId) {
        checkboxes[index].checked = false;
        // 활동 여부 저장
        if (checkboxes[1 - index].checked) {
          setValues2({
            ...values2,
            activityManagement: checkboxes[1 - index].id,
          });
        } else {
          setValues2({
            ...values2,
            activityManagement: '',
          });
        }
      }
    }
  };

  // 추후 필수 입력값 입력 여부 확인 예정
  const handleSubmit1 = (e) => {
    e.preventDefault();
  };
  const handleSubmit2 = (e) => {
    e.preventDefault();
    if (values2.activityManagement === '') {
      alert('활동 상태를 선택해주세요');
    }
  };

  useEffect(() => {
    console.log(values1);
    console.log(values2);
  }, [values1, values2]);

  return (
    <div className="bg-grayLight min-h-screen pt-8">
      <div className="h-[3rem] flex flex-col justify-center items-center bg-white mb-[3rem]">
        <div className="text-grayDark text-sm font-semibold ">Edit and Update Your Profile!</div>
      </div>
      <hr className="mx-[12rem] my-3" />
      <div className="mx-[12rem]">
        <div className="flex h-80">
          <div className="w-[25rem] text-grayDark font-semibold text-lg">Personal Info</div>
          <form className="flex-grow" onSubmit={handleSubmit1}>
            <div className="my-auto rounded-b-lg shadow-lg">
              <div className="text-sm h-60 grid grid-cols-2 grid-rows-3 items-center rounded-t-lg bg-white">
                <div className="mx-auto">
                  <div className="text-grayDark font-semibold mb-1">이름</div>
                  <input
                    id="name"
                    type="text"
                    className="w-[20rem] h-8 pl-3 border border-placeHolder rounded-lg"
                    value={name}
                    onChange={onChange}
                    placeholder="김세론"
                  />
                </div>
                <br />
                <div className="mx-auto">
                  <div className="text-grayDark font-semibold mb-1">Email</div>
                  <input
                    id="email"
                    type="email"
                    className="w-[20rem] h-8 pl-3 border border-placeHolder rounded-lg"
                    value={email}
                    onChange={onChange}
                    placeholder="UntoC@gmail.com"
                  />
                </div>
                <div className="mx-auto">
                  <div className="text-grayDark font-semibold mb-1">전화번호</div>
                  <input
                    id="tel"
                    type="tel"
                    className="w-[20rem] h-8 pl-3 border border-placeHolder rounded-lg"
                    value={tel}
                    onChange={onChange}
                    placeholder="010-1234-5678"
                  />
                </div>
                <div className="mx-auto">
                  <div className="text-grayDark font-semibold mb-1">링크 URL (블로그, github 등)</div>
                  <input
                    id="link1"
                    type="url"
                    className="w-[20rem] h-8 pl-3 border border-placeHolder rounded-lg"
                    value={link1}
                    onChange={onChange}
                    placeholder="http://untoC-github"
                  />
                </div>
                <div className="mx-auto">
                  <div className="text-grayDark font-semibold mb-1">링크 URL (블로그, github 등)</div>
                  <input
                    id="link2"
                    type="url"
                    className="w-[20rem] h-8 pl-3 border border-placeHolder rounded-lg"
                    value={link2}
                    onChange={onChange}
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
          </form>
        </div>
        <hr className="my-3" />
        <div className="flex">
          <div className="w-[25rem] text-grayDark font-semibold text-lg">Profile</div>
          <form className="flex-grow" onSubmit={handleSubmit2}>
            <div className="rounded-b-lg shadow-lg">
              <div className="h-40 bg-white rounded-t-lg flex">
                <div className="w-[11rem] flex flex-col items-center justify-center mt-7">
                  <img className="w-20 h-20 rounded-full m-3" src={profileImg} alt="현재 이미지" />
                  <label htmlFor="profileImg">
                    <div className="h-7 w-[7rem] bg-grayLight text-grayDark text-xs flex items-center justify-center cursor-pointer">
                      사진 불러오기
                    </div>
                    <input
                      className="w-0 h-0"
                      id="profileImg"
                      type="file"
                      accept="image/jpg, image/png, image/jpeg"
                      onChange={handleProfileImg}
                    />
                  </label>
                </div>
                <div className="w-[7rem] py-10">
                  <div className="mb-1 text-sm text-grayDark font-semibold">
                    <li>활동 상태 변경</li>
                  </div>
                  <label className="text-sm" htmlFor="activity">
                    <input
                      name="activityManagement"
                      className="m-1 cursor-pointer"
                      id="activity"
                      type="checkbox"
                      onChange={checkOnlyOne}
                    />
                    활동중
                  </label>
                  <br />
                  <label className="text-sm" htmlFor="inactivity">
                    <input
                      name="activityManagement"
                      className="m-1 cursor-pointer"
                      id="inactivity"
                      type="checkbox"
                      onChange={checkOnlyOne}
                    />
                    휴면
                  </label>
                </div>
                <div className="flex-grow ml-5 py-9">
                  <div className="text-sm mb-1 text-grayDark font-semibold">
                    <li>한줄 소개 작성</li>
                  </div>
                  <textarea
                    id="selfIntroduction"
                    className="py-3 px-3 rounded-lg text-xs border border-placeHolder"
                    cols="60"
                    rows="4"
                    value={selfIntroduction}
                    maxLength={50}
                    onChange={onChange}
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
