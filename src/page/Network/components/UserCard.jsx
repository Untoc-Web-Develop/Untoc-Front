import React from 'react';

import PropTypes from 'prop-types';

const UserCard = ({ user }) => {
  return (
    <div className="mb-4 flex h-24 w-full cursor-pointer items-center rounded-2xl border border-grayPoint p-4 shadow-sm hover:border-borderColor hover:bg-focusColor">
      <div className="h-12 w-12 rounded-full bg-grayPoint" />
      <div className="flex flex-col items-start pl-4">
        <h1 className="text-lg font-bold">{user.name}</h1>
        <p className="text-sm text-grayDark">{user.description}</p>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserCard;
