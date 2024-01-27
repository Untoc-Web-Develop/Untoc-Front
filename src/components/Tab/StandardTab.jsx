import React from 'react';

import PropTypes from 'prop-types';

const sizeMap = {
  sm: {
    textSize: 'text-sm',
    py: 'py-1',
    gap: 'gap-x-4',
  },
  md: {
    textSize: 'text-md',
    py: 'py-2',
    gap: 'gap-x-8',
  },
  lg: {
    textSize: 'text-lg',
    py: 'py-3',
    gap: 'gap-x-12',
  },
};

const StandardTab = ({ tabs, onSelected, size, activeTab, setActiveTab }) => {
  const { textSize, py, gap } = sizeMap[size];

  const onSuperSelected = (tab, index) => {
    setActiveTab(index);
    onSelected({ tab, index });
  };

  return (
    <div className={`flex flex-col place-items-center ${py}`}>
      <div className={`grid grid-flow-col ${gap}`}>
        {tabs.map((tab, index) => (
          <button
            type="button"
            key={tab.title}
            disabled={index === activeTab}
            onClick={() => onSuperSelected(tab, index)}
          >
            <p
              className={`${textSize} font-bold ${
                index === activeTab ? ' border-b-2 border-yellowPoint text-yellowPoint' : ' text-placeHolder'
              }`}
            >
              {tab.title}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

StandardTab.defaultProps = {
  tabs: [],
  onSelected: () => {},
  size: 'md',
};

StandardTab.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ),
  onSelected: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  activeTab: PropTypes.number.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default StandardTab;
