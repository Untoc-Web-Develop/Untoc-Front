import Board from 'page/Board/Board';
import Login from 'page/Login/Login';
import Main from 'page/Main/Main';
import NotFound from 'page/NotFound/NotFound';
import Profile from 'page/Profile/Profile';
import Recruit from 'page/Recruit/Recruit';
import Register from 'page/Register/Register';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Main />} />
        <Route path="recruit" element={<Recruit />} />
        <Route path="board" element={<Board />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
