import React from 'react';
import { Route, Routes } from 'react-router-dom';

import TeamList from 'page/TeamList/TeamList';

const TeamListRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<TeamList />} />
    </Routes>
  );
};

export default TeamListRouter;
