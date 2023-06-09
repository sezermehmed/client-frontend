import React, {useEffect, useState} from 'react';

const CpuInfo = ({componentId, onPriceChange, onSupportedSocketChange}) => {
    const [cpuData, setCpuData] = useState(null);
    const [price, setPrice] = useState(0);
    const [supportedSocket, setSupportedSocket] = useState('');
    useEffect(() => {
        const fetchCpuData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/cpu/${componentId}`);
                const data = await response.json();

                setCpuData(data);

                const cpuPrice = data.price;
                setPrice(cpuPrice);

                onPriceChange(cpuPrice);
                const socket = data.supportedMemory;
                setSupportedSocket(socket)
                onSupportedSocketChange(socket);

            } catch (error) {
                console.error('Error fetching CPU data:', error);
            }
        };

        if (componentId) {
            fetchCpuData();
        }
    }, [componentId, onPriceChange, onSupportedSocketChange]);


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
                <p>Supported Memory: {cpuData.supportedMemory}</p>
                <p>Price: {cpuData.price}</p>
            </div>
        </div>
    );
};

export default CpuInfo;
