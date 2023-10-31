import App from 'page/App';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" component={App} />
    </Routes>
  );
};

export default AppRouter;
