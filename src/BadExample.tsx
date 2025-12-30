import React from 'react';

const BadExample = () => {
  let unusedVariable = 10; // ❌ unused variable

  // ❌ always true condition
  if (true) {
    console.log('This will always run');
  }

  // ❌ duplicate code
  console.log('duplicate');
  console.log('duplicate');

  return <div>Bad Example</div>;
};

export default BadExample;
