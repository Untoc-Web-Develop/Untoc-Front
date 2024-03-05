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

  const handleHiddenPhoneNumber = (e) => {
    // 전화번호 프로필에서 숨기기 처리
    if (e.target.checked) {
      setValues1({
        ...values1,
        tel: 'hidden',
      });
    } else {
      setValues1({
        ...values1,
        tel: '',
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
      // alert('활동 상태를 선택해주세요');
    }
  };

  useEffect(() => {
    // console.log(values1);
    // console.log(values2);
  }, [values1, values2]);

  return (
    <div className="min-h-screen w-full bg-grayLight pt-8">
      <div className="mb-[3rem] flex h-[3rem] flex-col items-center justify-center bg-white">
        <div className="text-sm font-semibold text-grayDark ">Edit and Update Your Profile!</div>
      </div>
      <hr className="mx-[12rem] my-3" />
      <div className="mx-auto w-3/4">
        <div className="flex w-full">
          <div className="w-1/4 text-lg font-semibold text-grayDark">| Personal Info</div>
          <form className="w-3/4" onSubmit={handleSubmit1}>
            <div className="rounded-b-lg shadow-lg">
              <div className="grid h-60 w-full grid-cols-2 grid-rows-3 items-center gap-5 rounded-t-lg bg-white text-sm">
                <div className="mx-5">
                  <div className="mb-1 font-semibold text-grayDark">이름</div>
                  <input
                    id="name"
                    type="text"
                    className="h-8 w-full rounded-lg border border-placeHolder pl-3"
                    value={name}
                    onChange={onChange}
                    placeholder="김세론"
                  />
                </div>
                <br />
                <div className="mx-5">
                  <div className="mb-1 font-semibold text-grayDark">Email</div>
                  <input
                    id="email"
                    type="email"
                    className="h-8 w-full rounded-lg border border-placeHolder pl-3"
                    value={email}
                    onChange={onChange}
                    placeholder="UntoC@gmail.com"
                  />
                </div>
                <div className="mx-5">
                  <div className="mb-1 font-semibold text-grayDark">
                    전화번호
                    <label className="text-xs text-placeHolder" htmlFor="hidePhoneNumber">
                      <input
                        className="ml-5 mr-1 h-3 w-3 cursor-pointer"
                        id="hidePhoneNumber"
                        type="checkbox"
                        onChange={handleHiddenPhoneNumber}
                      />
                      프로필에서 숨기기
                    </label>
                  </div>
                  <input
                    id="tel"
                    type="tel"
                    className="h-8 w-full rounded-lg border border-placeHolder pl-3"
                    value={tel !== 'hidden' ? tel : ''}
                    onChange={onChange}
                    placeholder={tel !== 'hidden' ? '010-1234-5678' : ''}
                    disabled={tel === 'hidden'}
                  />
                </div>
                <div className="mx-5">
                  <div className="mb-1 font-semibold text-grayDark">링크 URL (블로그, github 등)</div>
                  <input
                    id="link1"
                    type="url"
                    className="h-8 w-full rounded-lg border border-placeHolder pl-3"
                    value={link1}
                    onChange={onChange}
                    placeholder="http://untoC-github"
                  />
                </div>
                <div className="mx-5">
                  <div className="mb-1 font-semibold text-grayDark">링크 URL (블로그, github 등)</div>
                  <input
                    id="link2"
                    type="url"
                    className="h-8 w-full rounded-lg border border-placeHolder pl-3"
                    value={link2}
                    onChange={onChange}
                    placeholder="http://UntoC-blog.co.kr"
                  />
                </div>
              </div>
              <div className="flex h-10 items-center justify-end ">
                <button
                  className="mr-7 h-7 w-[5.5rem] rounded-lg border-2 border-yellowPoint bg-white text-sm font-semibold text-yellowPoint"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
        <hr className="my-3" />
        <div className="flex w-full">
          <div className="w-1/4 text-lg font-semibold text-grayDark">| Profile</div>
          <form className="w-3/4" onSubmit={handleSubmit2}>
            <div className="rounded-b-lg shadow-lg">
              <div className="h-45 flex w-full justify-between rounded-t-lg bg-white">
                <div className="mt-7 flex w-[11rem] flex-col items-center justify-center ">
                  <img className="m-3 h-20 w-20 rounded-full" src={profileImg} alt="현재 이미지" />
                  <label htmlFor="profileImg">
                    <div className="flex h-7 w-[7rem] cursor-pointer items-center justify-center bg-grayLight text-xs text-grayDark">
                      사진 불러오기
                    </div>
                    <input
                      className="h-0 w-0"
                      id="profileImg"
                      type="file"
                      accept="image/jpg, image/png, image/jpeg"
                      onChange={handleProfileImg}
                    />
                  </label>
                </div>
                <div className="w-[7rem] py-10">
                  <div className="mb-1 text-sm font-semibold text-grayDark">
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
                <div className="mx-5 w-fit py-9">
                  <div className="mb-1 text-sm font-semibold text-grayDark">
                    <li>한줄 소개 작성</li>
                  </div>
                  <textarea
                    id="selfIntroduction"
                    className="w-full resize-none rounded-lg border border-placeHolder px-3 py-3 text-xs"
                    cols="63"
                    rows="6"
                    value={selfIntroduction}
                    maxLength={50}
                    onChange={onChange}
                    placeholder="자신을 나타낼 수 있는 한줄소개를 작성해주세요."
                  />
                </div>
              </div>
              <div className="flex h-10 items-center justify-end">
                <button
                  className="mr-7 h-7 w-[5.5rem] rounded-lg border-2 border-yellowPoint bg-white text-sm font-semibold text-yellowPoint"
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
