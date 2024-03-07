import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainLayout from 'components/Layouts/MainLayout';
// import Gpt from 'page/Gpt/Gpt';
import Login from 'page/Login/Login';
import Main from 'page/Main/Main';
import NotFound from 'page/NotFound/NotFound';
// import ProfileEdit from 'page/Profile/Edit/ProfileEdit';
// import Profile from 'page/Profile/Profile';
import Recruit from 'page/Recruit/Recruit';
// import Register from 'page/Register/Register';

import AdminRouter from './AdminRouter';
// import BoardRouter from './BoardRouter';
// import TeamListRouter from './TeamListRouter';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path="admin/*" element={<AdminRouter />} />
        <Route path="recruit" element={<Recruit />} />
        {/* <Route path="board/*" element={<BoardRouter />} />
        <Route path="teamlist/*" element={<TeamListRouter />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/edit" element={<ProfileEdit />} /> */}
        <Route path="login" element={<Login />} />
        {/* <Route path="register" element={<Register />} />
        <Route path="gpt" element={<Gpt />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
