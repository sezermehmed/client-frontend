import React, { useState, useEffect } from 'react';

const CpuInfo = (idInfo) => {
  const [cpuData, setCpuData] = useState([]);

  useEffect(() => {
    const fetchCpuData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/cpu');
        const data = await response.json();
      //  data = data.idInfo;
        setCpuData(data);
      } catch (error) {
        console.error('Error fetching CPU data:', error);
      }
    };

    fetchCpuData();
  }, []);

  return (
    <div>
      <h2>CPU Information</h2>
      {cpuData.map((cpu) => (
        <div key={cpu.id}>
          <h3>{cpu.name}</h3>
          <p>Component Type: {cpu.componentType}</p>
          <p>Part Number: {cpu.partNumber}</p>
          <p>Supported Memory: {cpu.supportedMemory}</p>
          <p>Socket: {cpu.socket}</p>
          <p>Price: {cpu.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CpuInfo;
