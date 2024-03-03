import React from 'react';
import { Route, Routes } from 'react-router-dom';

import TeamList from 'page/TeamList/TeamList';
import TeamListInfo from 'page/TeamListInfo/TeamListInfo';

const TeamListRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<TeamList />} />
      <Route path="/info" element={<TeamListInfo />} />
    </Routes>
  );
};

export default TeamListRouter;
