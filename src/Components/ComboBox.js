import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ComboBox = ({ dataEndpoint, idInfo }) => {
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(dataEndpoint);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSelectionChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    idInfo(value);
  };

  return (
      <div>
        <select value={selectedValue} onChange={handleSelectionChange}>
          <option value="">Select an option</option>
          {data.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
          ))}
        </select>
      </div>
  );
};

export default ComboBox;
