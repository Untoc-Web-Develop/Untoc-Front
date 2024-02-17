import React from 'react';

import devTerm from 'constant/devTerm';

const RandomDevTerm = () => {
  const term = devTerm[Math.floor(Math.random() * devTerm.length)];
  return (
    <>
      <div className="mb-2 text-lg font-semibold">{term.title}</div>
      <div className="text-base">{term.content}</div>
      <div className="mb-2 text-sm text-gray-400">{term.script}</div>
      <div className="text-right text-sm">- {term.author} -</div>
    </>
  );
};

export default RandomDevTerm;
