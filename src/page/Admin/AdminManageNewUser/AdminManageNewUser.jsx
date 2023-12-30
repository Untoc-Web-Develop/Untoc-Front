import React, { useEffect, useState } from 'react';

import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { CgFileDocument } from 'react-icons/cg';
import { FiCheck, FiX } from 'react-icons/fi';

import newUserList from './newUserList';
import ControlBar from '../components/ControlBar/ControlBar';

const AdminManageNewUser = () => {
  const [newUsers, setNewUsers] = useState([]);

  const acceptNewUser = (id) => {
    const newNewUserList = newUsers.map((user) => {
      if (user.id === id) {
        return { ...user, status: '승인' };
      }
      return user;
    });
    setNewUsers(() => newNewUserList);
  };

  const rejectNewUser = (id) => {
    const newNewUserList = newUsers.map((user) => {
      if (user.id === id) {
        return { ...user, status: '거절' };
      }
      return user;
    });
    setNewUsers(() => newNewUserList);
  };

  const columns = [
    { field: 'studentNumber', headerName: '학번', width: 100 },
    { field: 'name', headerName: '이름', width: 200 },
    { field: 'email', headerName: '이메일', width: 300 },
    { field: 'phone', headerName: '전화번호', width: 200 },
    { field: 'status', headerName: '상태', width: 100 },
    {
      field: 'applyButton',
      headerName: '신청서',
      width: 100,
      renderCell: () => (
        <Button variant="contained" color="yellowPoint" startIcon={<CgFileDocument />}>
          보기
        </Button>
      ),
    },
    {
      field: 'actions',
      type: 'actions',
      width: 200,
      getActions: (params) => [
        <Button variant="contained" color="success" startIcon={<FiCheck />} onClick={() => acceptNewUser(params.id)}>
          승인
        </Button>,
        <Button variant="contained" color="error" startIcon={<FiX />} onClick={() => rejectNewUser(params.id)}>
          거절
        </Button>,
      ],
    },
  ];

  useEffect(() => {
    setNewUsers(() => newUserList);
  }, []);

  return (
    <div className="h-full w-full">
      <div className="h-4/5 w-full">
        <DataGrid disableRowSelectionOnClick rows={newUsers} columns={columns} pageSizeOptions={[100]} />
      </div>
      <div className="flex h-1/5 w-full items-center">
        <ControlBar />
      </div>
    </div>
  );
};

export default AdminManageNewUser;
