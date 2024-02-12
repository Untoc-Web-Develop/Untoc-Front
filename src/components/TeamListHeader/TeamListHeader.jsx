import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const TeamListHeader = ({ content, isTeamed }) => {
  const contents = {
    teamlist: ['전체 팀 목록', 'UntoC에서 활동중인, 혹은 활동했던 팀들을 확인하고 관심있는 팀에 컨택하세요!'],
    teambuilding: ['팀 빌딩', 'UntoC 프로젝트에 참여하시게 되신걸 환영합니다! 팀원을 모아 팀을 구성하고 활동하세요!'],
    teaminfo: ['내팀 정보', 'UntoC 프로젝트의 팀 구성원이 되신걸 환영합니다! 팀의 정보를 확인하고 관리하세요!'],
  };

  const highlight = content === 'teamlist';

  // let page;
  // if (isTeamed) {
  //   page = <Link to="/teamlist/info">내팀 정보</Link>;
  // } else {
  //   page = <Link to="/teamlist/build">팀 빌딩</Link>;
  // }

  return (
    <header>
      <div className="ml-96 flex text-sm">
        <div
          className={`flex w-[6rem] items-center justify-center ${
            highlight ? 'border-b-2  border-yellowPoint font-semibold text-yellowPoint' : ''
          }`}
        >
          <Link to="/teamlist">전체 팀 목록</Link>
        </div>
        <div
          className={`flex w-[5rem] items-center justify-center ${
            highlight ? '' : 'border-b-2 border-yellowPoint font-semibold text-yellowPoint'
          }`}
        >
          {isTeamed ? <Link to="/teamlist/info">내팀 정보</Link> : <Link to="/teamlist/build">팀 빌딩</Link>}
        </div>
      </div>
      <div className="flex h-[6rem] flex-col items-center justify-center gap-3 bg-white">
        <div className="text-lg">{contents[content][0]}</div>
        <div className="text-xs text-placeHolder">
          <li>{contents[content][1]}</li>
        </div>
      </div>
    </header>
  );
};

TeamListHeader.propTypes = {
  content: PropTypes.string.isRequired,
  isTeamed: PropTypes.bool.isRequired,
};

export default TeamListHeader;
