import React from 'react';

import { Button, Input } from '@mui/material';
import PropTypes from 'prop-types';
import { CiSearch } from 'react-icons/ci';
import { MdAutorenew, MdFileUpload } from 'react-icons/md';

const ControlBar = ({ onReload, onSearch, onSave }) => {
  return (
    <div className="flex w-full justify-between">
      <Button variant="contained" color="inherit" startIcon={<MdAutorenew />} onClick={onReload}>
        새로고침
      </Button>
      <div className="hidden w-1/2 justify-center">
        <Input type="search" className="mr-3 w-2/3" placeholder="이름을 입력해주세요" color="yellowPoint" />
        <Button className="w-1/6" variant="contained" color="inherit" startIcon={<CiSearch />} onClick={onSearch}>
          검색
        </Button>
      </div>
      <Button variant="contained" color="yellowPoint" startIcon={<MdFileUpload />} onClick={onSave}>
        저장
      </Button>
    </div>
  );
};

ControlBar.propTypes = {
  onReload: PropTypes.func,
  onSearch: PropTypes.func,
  onSave: PropTypes.func,
};

ControlBar.defaultProps = {
  onReload: () => {},
  onSearch: () => {},
  onSave: () => {},
};

export default ControlBar;
