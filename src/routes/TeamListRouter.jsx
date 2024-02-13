import React from 'react';
import { Route, Routes } from 'react-router-dom';

import TeamList from 'page/TeamList/TeamList';
import TeamListBuild from 'page/TeamListBuild/TeamListBuild';

const TeamListRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<TeamList />} />
      <Route path="/build" element={<TeamListBuild />} />
    </Routes>
  );
};

export default TeamListRouter;
