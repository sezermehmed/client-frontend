// ComboBox.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ComboBox = ({ dataEndpoint, setComponentId  }) => {
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedId, setSelectedId] = useState();
  //const [componentId, setComponentId] = useState('');
  useEffect(() => {
    fetchData();
  }, [selectedId]);

  const fetchData = async () => {
    try {
      const response = await axios.get(dataEndpoint);

      setData(response.data);
      setSelectedValue();
  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSelectionChange = (event) => {
    const value = event.target.value;
    // Do something with the selected value
    console.log('Selected value:', value);
   // console.log('selected' , selectedValue)
    //setSelectedValue(value);
    console.log(value)
   
      setSelectedId(value[0]);
    console.log(value[0])
    
    fetchData(value[0]);
  
    
  };

  return (
    <div>
      <select value={selectedValue}  onChange={handleSelectionChange}>
        <option value="">Select an option</option>
        {data.map((item) => (
          <option key={item.id} value={item.value}>{item.id} {item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default ComboBox;
