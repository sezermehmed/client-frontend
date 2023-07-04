import React from 'react';

const CompatibilityCheck = ({ cpuPrice, memoryPrice, motherboardPrice, isCompatible }) => {

    
  const totalPrice = cpuPrice + memoryPrice + motherboardPrice;

  return (
    <div>
      <h2>Total Price: {totalPrice}</h2>
      {isCompatible ? (
        <p>No compatibility issues found.</p>
      ) : (
        <p>Warning: Possible incompatibility between CPU and Memory.</p>
      )}
    </div>
  );
};

export default CompatibilityCheck;
