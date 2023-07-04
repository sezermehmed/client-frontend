import React, {useState} from "react";
import ComboBox from "./ComboBox";
import CpuInfo from "./CpuInfo";
import MemoryInfo from "./MemoryInfo";
import MotherboardInfo from "./MotherboardInfo";
import CompatibilityCheck from "./CompatibilityCheck";
import "./styles/Body.css";
// const ComponentCpu = () => {
//     const [componentId, setComponentId] = useState('');
//     const [cpuPrice, setCpuPrice] = useState(0);
//     const handleIdfromChild = (id) => {
//         setComponentId(id);
//     };
//     const handleCpuPrice = (price) => {
//         setCpuPrice(price);
//     };
//
//     return (
//         <div>
//             <h2>CPU</h2>
//             <ComboBox dataEndpoint="http://localhost:8080/api/cpu" idInfo={handleIdfromChild}  />
//             <CpuInfo componentId={componentId} handlePrice={handleCpuPrice}  />
//         </div>
//     );
// };
// const ComponentMemory = () => {
//     const [componentId, setComponentId] = useState('');
//
//     const handleIdfromChild = (id) => {
//         setComponentId(id);
//     };
//
//     return (
//         <div>
//             <h2>
//                 Memory
//             </h2>
//             <ComboBox dataEndpoint="http://localhost:8080/api/memory" idInfo={handleIdfromChild} />
//             <MemoryInfo componentId={componentId} />
//         </div>
//     );
// };
// const ComponentMotherboard = () => {
//     const [componentId, setComponentId] = useState('');
//
//     const handleIdfromChild = (id) => {
//         setComponentId(id);
//     };
//     return (
//         <div>
//             <h2>
//                 Motherboard
//             </h2>
//             <ComboBox dataEndpoint="http://localhost:8080/api/motherboard" idInfo={handleIdfromChild} />
//             <MotherboardInfo componentId={componentId} />
//         </div>
//     );
// };
const Body = () => {

    const [cpuPrice, setCpuPrice] = useState(0);
    const [memoryPrice, setMemoryPrice] = useState(0);
    const [motherboardPrice, setMotherboardPrice] = useState(0);
    const [isCompatible, setIsCompatible] = useState(false);
    const [cpuComponentId, setCpuComponentId] = useState('');
    const [memoryComponentId, setMemoryComponentId] = useState('');
    const [motherboardComponentId, setMotherboardComponentId] = useState('');

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

    return (
        // <div>
        //     <section>
        //    {/*<CompatibilityCheck cpuPrice={cpuPrice} memoryPrice={memoryPrice} motherboardPrice={motherboardPrice} isCompatible={isCompatible} />*/}

        //   {/*<ComponentCpu />*/}
        //    {/*<ComponentMemory />*/}
//
        <div>
            <section>
                <CompatibilityCheck
                    cpuPrice={cpuPrice}
                    memoryPrice={memoryPrice}
                    motherboardPrice={motherboardPrice}
                    isCompatible={isCompatible}
                />

            </section>
            <section className="s">

                <div>
                    <h2>CPU</h2>
                    <ComboBox
                        dataEndpoint="http://localhost:8080/api/cpu"
                        idInfo={handleCpuComponentId}

                    />
                    <CpuInfo componentId={cpuComponentId}
                             onPriceChange={handleCpuPriceChange}

                    />
                </div>

                <div>
                    <h2>Memory</h2>
                    <ComboBox
                        dataEndpoint="http://localhost:8080/api/memory"
                        idInfo={handleMemoryComponentId}
                    />
                    <MemoryInfo componentId={memoryComponentId} onPriceChange={handleMemoryPriceChange}/>
                </div>

                <div>
                    <h2>Motherboard</h2>
                    <ComboBox
                        dataEndpoint="http://localhost:8080/api/motherboard"
                        idInfo={handleMotherboardComponentId}

                    />
                    <MotherboardInfo
                        componentId={motherboardComponentId}
                        onPriceChange={handleMotherboardPriceChange}

                    />
                </div>
            </section>


        </div>

        //   {/*    </section>*/}
        // {/*</div>*/}

    );
};
export default Body;