import React from 'react';

import PropTypes from 'prop-types';

const SearchConditionCard = ({ title, children }) => {
  return (
    <div className="mb-4 flex flex-col border-b border-borderColor pb-4">
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      <div className="flex justify-start">{children}</div>
    </div>
  );
};

SearchConditionCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SearchConditionCard;
