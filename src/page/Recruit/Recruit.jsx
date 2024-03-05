import React from 'react';

import useRoleCheck from 'hooks/useRoleCheck';

import RecruitAdmin from './admin/RecruitAdmin';
import RecruitUser from './user/RecruitUser';

const Recruit = () => {
  const { isLogin } = useRoleCheck('admin');

  return (
    <div className="align-center flex h-content w-screen justify-center overflow-x-hidden bg-grayLight">
      <div className="align-center flex h-fit w-4/5 flex-col justify-center">
        {isLogin ? <RecruitAdmin /> : <RecruitUser />}
      </div>
    </div>
  );
};

export default Recruit;
