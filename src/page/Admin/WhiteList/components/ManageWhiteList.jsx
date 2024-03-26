import React, { useEffect, useState } from 'react';

import { Button } from '@mui/material';
import { useGetWhiteListQuery } from 'api/whiteListApi';
import { MdAutorenew } from 'react-icons/md';

import WhiteListCard from './WhiteListCard';

const ManageWhiteList = () => {
  const { data: whiteListData, refetch } = useGetWhiteListQuery();
  const [whiteList, setWhiteList] = useState([]);

  useEffect(() => {
    if (whiteListData) {
      setWhiteList(() => whiteListData.data.whitelists);
    }
  }, [whiteListData]);

  return (
    <div className="h-full w-full flex-col items-center justify-start overflow-y-scroll scrollbar-hide">
      <h1 className="mb-4 text-center text-2xl font-bold">
        화이트리스트 관리
        <Button startIcon={<MdAutorenew />} color="yellowPoint" onClick={refetch} />
      </h1>
      {whiteList.map(({ id, generation, name, studentId, email }) => {
        return (
          <WhiteListCard key={id} id={id} generation={generation} name={name} studentId={studentId} email={email} />
        );
      })}
    </div>
  );
};

export default ManageWhiteList;
