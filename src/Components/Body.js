import React, {useState} from "react";
import ComboBox from "./ComboBox";
import CpuInfo from "./CpuInfo";
import MemoryInfo from "./MemoryInfo";
import MotherboardInfo from "./MotherboardInfo";
import CompatibilityCheck from "./CompatibilityCheck";
import "./styles/Body.css";

const Body = () => {

    const [cpuPrice, setCpuPrice] = useState(0);
    const [memoryPrice, setMemoryPrice] = useState(0);
    const [motherboardPrice, setMotherboardPrice] = useState(0);

    const [cpuComponentId, setCpuComponentId] = useState('');
    const [memoryComponentId, setMemoryComponentId] = useState('');
    const [motherboardComponentId, setMotherboardComponentId] = useState('');


    const [supportedSocketCpu, setSupportedSocketCpu] = useState('');
    const [supportedSocketMemory, setSupportedSocketMemory] = useState('');
    const [supportedSocketMotherboard, setSupportedSocketMotherboard] = useState('');

    const handleCpuPriceChange = (price) => {
        setCpuPrice(price);
    };

    const handleMemoryPriceChange = (price) => {
        setMemoryPrice(price);
    };

    const handleMotherboardPriceChange = (price) => {
        setMotherboardPrice(price);
    };
    const handleCpuComponentId = (id) => {
        setCpuComponentId(id);
    };

    const handleMemoryComponentId = (id) => {
        setMemoryComponentId(id);
    };

    const handleMotherboardComponentId = (id) => {
        setMotherboardComponentId(id);
    };


    const handleSupportedSocketCpu = (supportedSocket) => {
        setSupportedSocketCpu(supportedSocket);
    };
    const handleSupportedSocketMemory = (supportedSocket) => {
        setSupportedSocketMemory(supportedSocket);
    };

    const handleSupportedSocketMotherboard = (supportedSocket) => {
        setSupportedSocketMotherboard(supportedSocket);
    };
    return (
        <body>
        <div>
            <section>
                <CompatibilityCheck
                    cpuPrice={cpuPrice}
                    memoryPrice={memoryPrice}
                    motherboardPrice={motherboardPrice}

                    supportedSocketCpu={supportedSocketCpu}
                    supportedSocketMemory={supportedSocketMemory}
                    supportedSocketMotherboard={supportedSocketMotherboard}
                />

            </section>
            <section className="ComponentWrapper">

                <div className="ComponentInfo">
                    <h2>CPU</h2>
                    <ComboBox
                        dataEndpoint="http://localhost:8080/api/cpu"
                        idInfo={handleCpuComponentId}

                    />
                    <CpuInfo
                        componentId={cpuComponentId}
                        onPriceChange={handleCpuPriceChange}
                        onSupportedSocketChange={handleSupportedSocketCpu}
                    />
                </div>
                <section className="ComponentWrapper"></section>
                <div className="ComponentInfo">
                    <h2>Memory</h2>
                    <ComboBox
                        dataEndpoint="http://localhost:8080/api/memory"
                        idInfo={handleMemoryComponentId}
                    />
                    <MemoryInfo
                        componentId={memoryComponentId}
                        onPriceChange={handleMemoryPriceChange}
                        onSupportedSocketChange={handleSupportedSocketMemory}
                    />
                </div>
                <section className="ComponentWrapper"></section>
                <div className="ComponentInfo">
                    <h2>Motherboard</h2>
                    <ComboBox
                        dataEndpoint="http://localhost:8080/api/motherboard"
                        idInfo={handleMotherboardComponentId}

                    />
                    <MotherboardInfo
                        componentId={motherboardComponentId}
                        onPriceChange={handleMotherboardPriceChange}
                        onSupportedSocketChange={handleSupportedSocketMotherboard}
                    />
                </div>
            </section>


        </div>

        </body>


    );
};
export default Body;