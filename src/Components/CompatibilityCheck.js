import React from "react";
import './styles/CompatibilityCheck.css';


const CompatibilityCheck = ({
                                cpuPrice,
                                memoryPrice,
                                motherboardPrice,

                                supportedSocketCpu,
                                supportedSocketMotherboard,
                                supportedSocketMemory
                            }) => {

    const isCompatible = supportedSocketMemory === supportedSocketCpu && supportedSocketMemory === supportedSocketMotherboard;
    const compatibilityLineClass = isCompatible ? 'compatible' : 'incompatible';


    return (
        <div>

            <h2>Compatibility Check</h2>
            <p>CPU Price: {cpuPrice}</p>
            <p>Memory Price: {memoryPrice}</p>
            <p>Motherboard Price: {motherboardPrice}</p>
            <p>Total Price: {cpuPrice + memoryPrice + motherboardPrice}</p>

            <div className={`compatibility-line ${compatibilityLineClass}`}>
                <p className="Compatibility">Compatibility: {isCompatible ? "Compatible" : "Incompatible"} </p>


            </div>

        </div>
    );
};

export default CompatibilityCheck;