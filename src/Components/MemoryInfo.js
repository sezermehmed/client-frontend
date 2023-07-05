import React, {useEffect, useState} from 'react';

const MemoryInfo = ({componentId, onPriceChange, onSupportedSocketChange}) => {
    const [memoryData, setMemoryData] = useState(null);
    const [price, setPrice] = useState(0);
    const [supportedSocket, setSupportedSocket] = useState('');
    useEffect(() => {
        const fetchMemoryData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/memory/${componentId}`);
                const data = await response.json();

                setMemoryData(data);

                const memoryprice = data.price;
                setPrice(memoryprice);
                onPriceChange(memoryprice);

                const socket = data.socket;
                setSupportedSocket(socket)
                onSupportedSocketChange(socket);

            } catch (error) {
                console.error('Error fetching Memory data:', error);
            }
        };

        if (componentId) {
            fetchMemoryData();
        }
    }, [componentId, onPriceChange, onSupportedSocketChange]);

    if (!componentId) {
        return <p>No Memory component selected.</p>;
    }

    if (!memoryData) {
        return <p>Loading Memory data...</p>;
    }

    return (
        <div>
            <h2>Memory Information</h2>
            <div>
                <h3>{memoryData.name}</h3>
                {/*<p>Component Type: {memoryData.componentType}</p>*/}
                {/*<p>Part Number: {memoryData.partNumber}</p>*/}
                <p>Socket: {memoryData.socket}</p>
                <p>Price: {memoryData.price}</p>
            </div>
        </div>
    );
};

export default MemoryInfo;
