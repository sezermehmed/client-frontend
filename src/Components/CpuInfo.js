import React, { useEffect, useState } from 'react';

const CpuInfo = ({ componentId }) => {
  const [cpuData, setCpuData] = useState(null);

  useEffect(() => {
    const fetchCpuData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/cpu/${componentId}`);
        const data = await response.json();

        setCpuData(data);
      } catch (error) {
        console.error('Error fetching CPU data:', error);
      }
    };

    if (componentId) {
      fetchCpuData();
    }
  }, [componentId]);

  if (!componentId) {
    return <p>No CPU component selected.</p>;
  }

  if (!cpuData) {
    return <p>Loading CPU data...</p>;
  }

  return (
      <div>
        <h2>CPU Information</h2>
        <div>
          <h3>{cpuData.name}</h3>
          <p>Component Type: {cpuData.componentType}</p>
          <p>Part Number: {cpuData.partNumber}</p>
          <p>Supported Memory: {cpuData.supportedMemory}</p>
          <p>Socket: {cpuData.socket}</p>
          <p>Price: {cpuData.price}</p>
        </div>
      </div>
  );
};

export default CpuInfo;
