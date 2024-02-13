import React, { useState, useEffect } from 'react';

import { IconButton, Switch } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from 'react-icons/md';

import userList from './userList';
import ControlBar from '../components/ControlBar/ControlBar';

const AdminManageRole = () => {
  const [users, setUsers] = useState([]);

  const incrementRole = (id) => {
    const index = users.findIndex((user) => user.id === id);
    if (users[index].role === '회장') return;
    if (users[index].role === '부회장')
      setUsers(() => users.map((user) => (user.id === id ? { ...user, role: '회장' } : user)));
    if (users[index].role === '집행부')
      setUsers(() => users.map((user) => (user.id === id ? { ...user, role: '부회장' } : user)));
    if (users[index].role === '회원')
      setUsers(() => users.map((user) => (user.id === id ? { ...user, role: '집행부' } : user)));
  };

  const decrementRole = (id) => {
    const index = users.findIndex((user) => user.id === id);
    if (users[index].role === '회원') return;
    if (users[index].role === '집행부')
      setUsers(() => users.map((user) => (user.id === id ? { ...user, role: '회원' } : user)));
    if (users[index].role === '부회장')
      setUsers(() => users.map((user) => (user.id === id ? { ...user, role: '집행부' } : user)));
    if (users[index].role === '회장')
      setUsers(() => users.map((user) => (user.id === id ? { ...user, role: '부회장' } : user)));
  };

  const columns = [
    { field: 'name', headerName: '이름', width: 300 },
    {
      field: 'role',
      headerName: '직위',
      width: 300,
      renderCell: (params) => {
        return (
          <div className="flex w-20 items-center justify-between">
            {params.value}
            <div className="flex flex-col justify-center">
              <IconButton size="small" onClick={() => incrementRole(params.id)}>
                <MdOutlineArrowDropUp />
              </IconButton>
              <IconButton size="small" onClick={() => decrementRole(params.id)}>
                <MdOutlineArrowDropDown />
              </IconButton>
            </div>
          </div>
        );
      },
    },
    {
      field: 'role1',
      headerName: '게시판 권한',
      width: 300,
      renderCell: (params) => <Switch defaultChecked={params.value} />,
    },
    {
      field: 'role2',
      headerName: '캠프 권한',
      width: 300,
      renderCell: (params) => <Switch defaultChecked={params.value} />,
    },
    {
      field: 'role3',
      headerName: '일정 권한',
      width: 300,
      renderCell: (params) => <Switch defaultChecked={params.value} />,
    },
    {
      field: 'role4',
      headerName: '권한',
      width: 300,
      renderCell: (params) => <Switch defaultChecked={params.value} />,
    },
  ];

  useEffect(() => {
    setUsers(() => userList);
  }, []);

  return (
    <div className="h-full w-full">
      <div className="h-4/5 w-full">
        <DataGrid disableRowSelectionOnClick rows={users} columns={columns} pageSizeOptions={[100]} />
      </div>
      <div className="flex h-1/5 w-full items-center">
        <ControlBar />
      </div>
    </div>
  );
};

export default AdminManageRole;
