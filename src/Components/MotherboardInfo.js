import React, {useEffect, useState} from 'react';

const MotherboardInfo = ({componentId, onPriceChange, onSupportedSocketChange}) => {
    const [motherboardData, setMotherboardData] = useState(null);
    const [price, setPrice] = useState(0);
    const [supportedSocket, setSupportedSocket] = useState('');

    useEffect(() => {
        const fetchMotherboardData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/motherboard/${componentId}`);
                const data = await response.json();

                setMotherboardData(data);

                const motherboardprice = data.price;
                setPrice(motherboardprice);
                onPriceChange(motherboardprice);

                const socket = data.supported_memory;
                setSupportedSocket(socket)
                onSupportedSocketChange(socket);
            } catch (error) {
                console.error('Error fetching Motherboard data:', error);
            }
        };

        if (componentId) {
            fetchMotherboardData();
        }
    }, [componentId, onPriceChange, onSupportedSocketChange]);

    if (!componentId) {
        return <p>No Motherboard component selected.</p>;
    }

    if (!motherboardData) {
        return <p>Loading Motherboard data...</p>;
    }

    return (
        <div>
            <h2>Motherboard Information</h2>
            <div>
                <h3>{motherboardData.name}</h3>
                {/*<p>Component Type: {motherboardData.componentType}</p>*/}
                {/*<p>Part Number: {motherboardData.partNumber}</p>*/}
                {/*<p>Socket: {motherboardData.socket}</p>*/}
                <p>Supported Memory: {motherboardData.supported_memory}</p>
                <p>Price: {motherboardData.price}</p>
            </div>
        </div>
    );
};

export default MotherboardInfo;
