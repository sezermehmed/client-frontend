import React, {useEffect, useState} from 'react';
import axios from 'axios';
import "./styles/ComboBox.css"
import "@fortawesome/fontawesome-free/css/all.css";

const ComboBox = ({dataEndpoint, idInfo}) => {
    const [data, setData] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
        fetchData();
    }, [idInfo, dataEndpoint]);

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
        if (value === "") {
            idInfo("")
            setSelectedValue("");
        }
    };

    return (
        <div className="combobox">
            <select value={selectedValue} onChange={handleSelectionChange}>
                <option value="">Select an option</option>
                {data.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>
            <span className="combobox-icon">
          <i className="fas fa-chevron-down"></i>
          </span>
        </div>
    );
};

export default ComboBox;
