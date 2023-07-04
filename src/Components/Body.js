import { useState } from "react";
import ComboBox from "./ComboBox";
import CpuInfo from "./CpuInfo";
import './styles/Body.css';
import CompatibilityCheck from "./CompatibilityCheck";
import MemoryInfo from "./MemoryInfo";
import MotherboardInfo from "./MotherboardInfo";
const ComponentCpu = () => {
    const [componentId, setComponentId] = useState('');

    const handleIdfromChild = (id) => {
        setComponentId(id);
    };

    return (
        <div>
            <h2>CPU</h2>
            <ComboBox dataEndpoint="http://localhost:8080/api/cpu" idInfo={handleIdfromChild} />
            <CpuInfo componentId={componentId} />
        </div>
    );
};
const ComponentMemory = () => {
    const [componentId, setComponentId] = useState('');

    const handleIdfromChild = (id) => {
        setComponentId(id);
    };

    return (
        <div>
            <h2>
                Memory
            </h2>
            <ComboBox dataEndpoint="http://localhost:8080/api/memory" idInfo={handleIdfromChild} />
            <MemoryInfo componentId={componentId} />
        </div>
    );
};
const ComponentMotherboard = () => {
    const [componentId, setComponentId] = useState('');

    const handleIdfromChild = (id) => {
        setComponentId(id);
    };
    return (
        <div>
            <h2>
                Motherboard
            </h2>
            <ComboBox dataEndpoint="http://localhost:8080/api/motherboard" idInfo={handleIdfromChild} />
            <MotherboardInfo componentId={componentId} />
        </div>
    );
};
const Body = () => {

    const [cpuPrice, setcpuPrice] = useState(0);
    const [memoryPrice, setmemoryPrice] = useState(0);
    const [motherboardPrice, setcmotherboardPrice] = useState(0);
    const [isCompatible, setisCompatible] = useState(false);
    return (
        <div>
            <section>
                <CompatibilityCheck cpuPrice={cpuPrice} memoryPrice={memoryPrice} motherboardPrice={motherboardPrice} isCompatible={isCompatible} />

                <ComponentCpu />
                <ComponentMemory />
                <ComponentMotherboard />
            </section>
        </div>

    );
};
export default Body;