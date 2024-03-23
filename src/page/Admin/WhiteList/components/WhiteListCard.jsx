import React from 'react';

import { Button } from '@mui/material';
import { useDeleteWhiteListMutation } from 'api/whiteListApi';
import { PropTypes } from 'prop-types';

const WhiteListCard = ({ id, generation, name, studentId, email }) => {
  const { mutate: deleteWhiteList } = useDeleteWhiteListMutation();
  return (
    <div className="mb-4 flex h-12 w-full items-center justify-between rounded border border-grayDark p-4 shadow-sm">
      <div>
        <span className="mr-2 text-lg text-grayDark">{generation}기</span>
        <span className="mr-2 text-lg font-bold">{name}</span>
        <span className="mr-2">({studentId})</span>
        <span className="text-sm text-grayDark">{email}</span>
      </div>
      <div>
        <Button variant="outlined" color="error" onClick={() => deleteWhiteList({ id })}>
          삭제
        </Button>
      </div>
    </div>
  );
};

WhiteListCard.propTypes = {
  id: PropTypes.string.isRequired,
  generation: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  studentId: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default WhiteListCard;
