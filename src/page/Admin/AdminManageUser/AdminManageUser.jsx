import React from 'react';

import { Switch } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useGetUsersQuery, usePatchUserActivationMutation } from 'api/adminApi';

const AdminManageRole = () => {
  const { data: users } = useGetUsersQuery();
  const { mutate: patchActivation } = usePatchUserActivationMutation();

  const columns = [
    { field: 'studentId', headerName: '학번', width: 200 },
    { field: 'username', headerName: '이름', width: 200 },
    { field: 'email', headerName: '이메일', width: 200 },
    { field: 'phoneNumber', headerName: '전화번호', width: 200 },
    {
      field: 'activation',
      headerName: '활동상태',
      width: 200,
      renderCell: (params) => (
        <Switch
          defaultChecked={params.value}
          onChange={(e, activation) => patchActivation({ id: params.id, activation })}
        />
      ),
    },
    {
      field: 'role',
      headerName: '직위',
      width: 200,
      valueGetter: (params) => (params.value === 'admin' ? '회장' : '회원'),
    },
    // {
    //   field: 'actions',
    //   type: 'actions',
    //   width: 200,
    //   getActions: (params) => [
    //     <Button variant="contained" color="yellowPoint" onClick={() => removeUser(params.id)}>
    //       탈퇴
    //     </Button>,
    //   ],
    // },
  ];

  return (
    <div className="h-full w-full">
      <div className="h-4/5 w-full">
        <DataGrid disableRowSelectionOnClick rows={users ? users.data : []} columns={columns} pageSizeOptions={[100]} />
      </div>
    </div>
  );
};

export default AdminManageRole;
