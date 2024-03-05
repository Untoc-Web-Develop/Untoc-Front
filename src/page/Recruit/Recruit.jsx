import React from 'react';

import useAuthCheck from 'hooks/useAuthCheck';

import RecruitAdmin from './admin/RecruitAdmin';
import RecruitUser from './user/RecruitUser';

const Recruit = () => {
  const { isPass } = useAuthCheck(['admin']);

  return (
    <div className="align-center flex h-content w-screen justify-center overflow-x-hidden bg-grayLight">
      <div className="align-center flex h-fit w-4/5 flex-col justify-center">
        {isPass ? <RecruitAdmin /> : <RecruitUser />}
      </div>
    </div>
  );
};

export default Recruit;
