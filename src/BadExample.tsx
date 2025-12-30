// import React from 'react';

const BadExample = () => {
  //   let unusedVariable = 10; // ❌ unused variable

  // ❌ always true condition
  if (true) {
    console.log("This will always run");
  }

  // ❌ duplicate code
  console.log("duplicate");
  console.log("duplicate");
  console.log(
    "sendgridkey => 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"
  );
  return <div>Bad Example</div>;
};

export default BadExample;
