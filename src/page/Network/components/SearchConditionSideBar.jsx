import React, { useState } from 'react';

import { InputAdornment, MenuItem, Select, TextField } from '@mui/material';

import SearchConditionCard from './SearchConditionCard';

const SearchConditionSideBar = () => {
  const [minGeneration, setMinGeneration] = useState('16');
  const [maxGeneration, setMaxGeneration] = useState('17.5');
  const [minCampCount, setMinCampCount] = useState(1);

  return (
    <div className="h-full w-full rounded-2xl bg-white p-4 shadow">
      <SearchConditionCard title="기수">
        <Select size="small" value={minGeneration} onChange={(e) => setMinGeneration(() => e.target.value)}>
          <MenuItem value="16">16기</MenuItem>
          <MenuItem value="17">17기</MenuItem>
          <MenuItem value="17.5">17.5기</MenuItem>
        </Select>
        <span className="mx-2 self-center">~</span>
        <Select size="small" value={maxGeneration} onChange={(e) => setMaxGeneration(() => e.target.value)}>
          <MenuItem value="16">16기</MenuItem>
          <MenuItem value="17">17기</MenuItem>
          <MenuItem value="17.5">17.5기</MenuItem>
        </Select>
      </SearchConditionCard>
      <SearchConditionCard title="캠프 참여 횟수">
        <TextField
          size="small"
          type="number"
          value={minCampCount}
          onChange={(e) => setMinCampCount(() => e.target.value)}
          InputProps={{ endAdornment: <InputAdornment position="end">회 이상</InputAdornment> }}
        />
      </SearchConditionCard>
    </div>
  );
};

export default SearchConditionSideBar;
