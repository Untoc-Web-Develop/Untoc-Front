import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Board from 'page/Board/Board';
import BoardView from 'page/BoardView/BoardView';
import BoardWrite from 'page/BoardWrite/BoardWrite';

const BoardRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Board />} />
      <Route path="view" element={<BoardView />} />
      <Route path="write" element={<BoardWrite />} />
    </Routes>
  );
};

export default BoardRouter;
