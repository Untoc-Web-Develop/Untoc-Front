import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import StandardTab from 'components/Tab/StandardTab';
import headerMenu from 'constant/headerMenu';
import { useSelector } from 'react-redux';

const HeaderTab = () => {
  const [active, setActive] = useState(0);
  const user = useSelector((state) => state.user);
  const menus = headerMenu(user.badgeKeys);

  const navigate = useNavigate();
  const location = useLocation();

  const onSelected = ({ tab }) => {
    navigate(tab.path);
  };

  useEffect(() => {
    const path = location.pathname;
    const index = menus.findIndex((tab) => (tab.haveChild && path.startsWith(tab.path)) || path === tab.path);
    setActive(index);
  }, [location]);

  return <StandardTab activeTab={active} setActiveTab={setActive} tabs={menus} onSelected={onSelected} />;
};

export default HeaderTab;
