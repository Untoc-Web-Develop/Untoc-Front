import React, { useState, useEffect } from 'react';

import { Button, Switch } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import userList from './userList';
import ControlBar from '../components/ControlBar/ControlBar';

const AdminManageRole = () => {
  const [users, setUsers] = useState([]);

  const removeUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(() => newUsers);
  };

  const columns = [
    { field: 'studentNumber', headerName: '학번', width: 300 },
    { field: 'name', headerName: '이름', width: 300 },
    {
      field: 'status',
      headerName: '활동상태',
      width: 300,
      renderCell: (params) => {
        const active = params.value === 'active';
        return <Switch defaultChecked={active} />;
      },
    },
    {
      field: 'role',
      headerName: '직위',
      width: 300,
      valueGetter: (params) => (params.value === 'admin' ? '회장' : '회원'),
    },
    {
      field: 'actions',
      type: 'actions',
      width: 200,
      getActions: (params) => [
        <Button variant="contained" color="yellowPoint" onClick={() => removeUser(params.id)}>
          탈퇴
        </Button>,
      ],
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
