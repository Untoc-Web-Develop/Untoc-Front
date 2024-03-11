import React from 'react';

import RecruitImg from 'asset/recruit/recruitImg.png';
import PropTypes from 'prop-types';

const RecruitDescriptionAdmin = ({ applySetting, setApplySetting }) => {
  const dateToString = (dateString) => {
    const date = new Date(dateString);
    const dateFormat = `${date.getFullYear()}-${
      date.getMonth() + 1 < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    }-${date.getDate() < 9 ? `0${date.getDate()}` : date.getDate()}`;
    return dateFormat;
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-start px-12 text-sm font-normal">
      <div className="mb-10 h-2/5">
        <h1 className="mb-16 text-4xl">
          UNTOC
          <input
            className="w-16 border-2 border-slate-400 text-right outline-none"
            type="text"
            value={applySetting.generation ?? 0}
            onChange={(e) => {
              setApplySetting((prev) => {
                return { ...prev, generation: e.target.value };
              });
            }}
          />
          기 신입회원 모집
        </h1>
        <h2 className="mb-10 text-base text-yellowPoint">
          모집기간 :{' '}
          <input
            type="date"
            value={dateToString(applySetting.openAt)}
            onChange={(e) => {
              setApplySetting((prev) => {
                return { ...prev, openAt: e.target.value };
              });
            }}
          />
          ~
          <input
            type="date"
            value={dateToString(applySetting.closeAt)}
            onChange={(e) => {
              setApplySetting((prev) => {
                return { ...prev, closeAt: e.target.value };
              });
            }}
          />
        </h2>
        <p>
          <textarea
            className="h-40 w-full border-2 border-slate-400 outline-none"
            type="text"
            value={applySetting.content}
            onChange={(e) => {
              setApplySetting((prev) => {
                return { ...prev, content: e.target.value };
              });
            }}
          />
        </p>
      </div>
      <div className="h-2/5">
        <img src={RecruitImg} alt="recruitImg" />
      </div>
    </div>
  );
};

RecruitDescriptionAdmin.defaultProps = {
  applySetting: {
    generation: 0,
    openAt: Date.now().toString(),
    closeAt: Date.now().toString(),
    content: '',
  },
};

RecruitDescriptionAdmin.propTypes = {
  applySetting: PropTypes.shape({
    generation: PropTypes.number,
    openAt: PropTypes.string,
    closeAt: PropTypes.string,
    content: PropTypes.string,
  }),
  setApplySetting: PropTypes.func.isRequired,
};

export default RecruitDescriptionAdmin;
