import React, { useEffect, useState } from 'react';

import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useGetApplyQuery, useGetApplyQuestionQuery } from 'api/applyApi';
import AlertModal from 'components/Modals/AlertModal';
import { CgFileDocument } from 'react-icons/cg';
import { FiCheck, FiX, FiLoader } from 'react-icons/fi';

import ApplyForm from './components/ApplyForm';
import ControlBar from '../components/ControlBar/ControlBar';

const AdminManageNewUser = () => {
  const [applies, setApplies] = useState([]);
  const { data: apply, refetch } = useGetApplyQuery();
  const { data: applyQuestions } = useGetApplyQuestionQuery();
  const [applyModalIsOpen, setApplyModalIsOpen] = useState(false);
  const [selectedApply, setSelectedApply] = useState();

  const acceptApply = (id) => {
    setApplies(() => {
      return applies.map((item) => {
        if (item.id === id) {
          return { ...item, status: '승인' };
        }
        return item;
      });
    });
  };

  const rejectApply = (id) => {
    setApplies(() => {
      return applies.map((item) => {
        if (item.id === id) {
          return { ...item, status: '거절' };
        }
        return item;
      });
    });
  };

  const pendingApply = (id) => {
    setApplies(() => {
      return applies.map((item) => {
        if (item.id === id) {
          return { ...item, status: '대기' };
        }
        return item;
      });
    });
  };

  const refetchData = () => {
    refetch();
    setApplies(() => apply.data.applies.map((item) => ({ ...item, status: '대기' })));
  };

  const viewApply = (id) => {
    setSelectedApply(() => applies.find((item) => item.id === id));
    setApplyModalIsOpen(() => true);
  };

  const columns = [
    { field: 'studentId', headerName: '학번', width: 100 },
    { field: 'name', headerName: '이름', width: 200 },
    { field: 'email', headerName: '이메일', width: 300 },
    { field: 'phoneNumber', headerName: '전화번호', width: 200 },
    {
      field: 'status',
      headerName: '상태',
      width: 100,
      renderCell: (param) => {
        const textColor = {
          대기: 'text-yellowPoint',
          승인: 'text-green-800',
          거절: 'text-error',
        };
        return <span className={`${textColor[param.value]} font-bold`}>{param.value}</span>;
      },
    },
    {
      field: 'applyButton',
      headerName: '신청서',
      type: 'actions',
      width: 100,
      getActions: (params) => [
        <Button variant="contained" color="inherit" startIcon={<CgFileDocument />} onClick={() => viewApply(params.id)}>
          보기
        </Button>,
      ],
    },
    {
      field: 'actions',
      type: 'actions',
      width: 300,
      getActions: (params) => [
        <Button variant="contained" color="success" startIcon={<FiCheck />} onClick={() => acceptApply(params.id)}>
          승인
        </Button>,
        <Button variant="contained" color="error" startIcon={<FiX />} onClick={() => rejectApply(params.id)}>
          거절
        </Button>,
        <Button
          variant="contained"
          color="yellowPoint"
          startIcon={<FiLoader />}
          onClick={() => pendingApply(params.id)}
        >
          보류
        </Button>,
      ],
    },
  ];

  const findQuestionById = (id) => {
    return applyQuestions.data.applyQuestions.find((item) => item.id === id).question;
  };

  useEffect(() => {
    if (apply) {
      setApplies(() => apply.data.applies.map((item) => ({ ...item, status: '대기' })));
    }
  }, [apply]);

  return (
    <div className="h-full w-full">
      <AlertModal isOpen={applyModalIsOpen} setIsOpen={setApplyModalIsOpen} outsideClose size="lg">
        <div className="h-full w-full overflow-y-scroll p-8">
          {selectedApply && (
            <>
              <ApplyForm question="학번" value={selectedApply.studentId} />
              <ApplyForm question="이름" value={selectedApply.name} />
              <ApplyForm question="부산대 이메일" value={selectedApply.email} />
              <ApplyForm question="전화번호" value={selectedApply.phoneNumber} />
              {selectedApply.applyValues &&
                selectedApply.applyValues.map((applyValue) => (
                  <ApplyForm
                    key={applyValue.applyQuestion}
                    question={findQuestionById(applyValue.applyQuestion)}
                    value={applyValue.value}
                  />
                ))}
            </>
          )}
        </div>
      </AlertModal>
      <div className="h-4/5 w-full">
        <DataGrid disableRowSelectionOnClick rows={applies} columns={columns} pageSizeOptions={[100]} />
      </div>
      <div className="flex h-1/5 w-full items-center">
        <ControlBar onReload={refetchData} />
      </div>
    </div>
  );
};

export default AdminManageNewUser;
