import React, { useEffect, useState } from 'react';

import { DataGrid } from '@mui/x-data-grid';

import newUserList from './newUserList';
import ControlBar from '../components/ControlBar/ControlBar';

const columns = [
  { field: 'studentNumber', headerName: '학번', width: 150 },
  { field: 'name', headerName: '이름', width: 150 },
  { field: 'email', headerName: '이메일', width: 250 },
  { field: 'phone', headerName: '전화번호', width: 150 },
  { field: 'status', headerName: '상태', width: 150 },
];

const AdminManageNewUser = () => {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    setNewUsers(() => newUserList);
  }, []);

  return (
    <div className="h-full w-full">
      <div className="h-4/5 w-full">
        <DataGrid checkboxSelection rows={newUsers} columns={columns} pageSizeOptions={[10, 20, 30]} />
      </div>
      <div className="flex h-1/5 w-full items-center">
        <ControlBar />
      </div>
    </div>
  );
};

export default AdminManageNewUser;
