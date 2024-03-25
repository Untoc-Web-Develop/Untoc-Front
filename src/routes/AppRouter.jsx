import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainLayout from 'components/Layouts/MainLayout';
// import Gpt from 'page/Gpt/Gpt';
import FindPassword from 'page/FindPassword/FindPassword';
import Login from 'page/Login/Login';
import Main from 'page/Main/Main';
import Network from 'page/Network/Network';
import NotFound from 'page/NotFound/NotFound';
// import ProfileEdit from 'page/Profile/Edit/ProfileEdit';
// import Profile from 'page/Profile/Profile';
// import Recruit from 'page/Recruit/Recruit';
// import Register from 'page/Register/Register';
import RecruitError from 'page/RecruitError/RecruitError';

import AdminRouter from './AdminRouter';

// import BoardRouter from './BoardRouter';
import TeamListRouter from './TeamListRouter';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path="admin/*" element={<AdminRouter />} />
        <Route path="recruit" element={<RecruitError /> /* {<Recruit/>} */} />
        {/* <Route path="board/*" element={<BoardRouter />} /> */}
        <Route path="teamlist/*" element={<TeamListRouter />} />
        {/* <Route path="profile" element={<Profile />} />
        <Route path="profile/edit" element={<ProfileEdit />} /> */}
        <Route path="findpassword" element={<FindPassword />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="register" element={<Register />} />
        <Route path="gpt" element={<Gpt />} /> */}
        <Route path="network" element={<Network />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
