import React from 'react';

import { Button, Input } from '@mui/material';
import { CiSearch } from 'react-icons/ci';
import { MdAutorenew, MdFileUpload } from 'react-icons/md';

const ControlBar = () => {
  return (
    <div className="flex w-full justify-between">
      <Button variant="contained" color="black" startIcon={<MdAutorenew />}>
        새로고침
      </Button>
      <div className="flex w-1/2 justify-center">
        <Input type="search" className="mr-3 w-2/3" placeholder="이름을 입력해주세요" color="yellowPoint" />
        <Button className="w-1/6" variant="contained" color="yellowPoint" startIcon={<CiSearch />}>
          검색
        </Button>
      </div>
      <Button variant="contained" color="yellowPoint" startIcon={<MdFileUpload />}>
        저장
      </Button>
    </div>
  );
};

export default ControlBar;
