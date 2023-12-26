import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainLayout from 'components/Layouts/MainLayout';
import Login from 'page/Login/Login';
import Main from 'page/Main/Main';
import NotFound from 'page/NotFound/NotFound';
import Profile from 'page/Profile/Profile';
import Recruit from 'page/Recruit/Recruit';
import Register from 'page/Register/Register';

import BoardRouter from './BoardRouter';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path="recruit" element={<Recruit />} />
        <Route path="board/*" element={<BoardRouter />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
