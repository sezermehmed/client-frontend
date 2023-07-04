import React from "react";
import './styles/CompatibilityCheck.css';

const CompatibilityCheck = ({
                                cpuPrice,
                                memoryPrice,
                                motherboardPrice,
                                supportedMemoryCPU,
                                socketMemory,
                                supportedMotherboard
                            }) => {
    //const isCompatible = cpuPrice > 0 && memoryPrice > 0 && motherboardPrice > 0;
    supportedMemoryCPU = 'DDR4';
    socketMemory = 'DDR4';
    supportedMotherboard = 'DDR4';
    const isCompatible = socketMemory === supportedMemoryCPU && socketMemory === supportedMotherboard;
    const compatibilityLineClass = isCompatible ? 'compatible' : 'incompatible';

    return (
        <div>
            <h2>Compatibility Check</h2>
            <p>CPU Price: {cpuPrice}</p>
            <p>Memory Price: {memoryPrice}</p>
            <p>Motherboard Price: {motherboardPrice}</p>
            <p>Total Price: {cpuPrice + memoryPrice + motherboardPrice}</p>

            <div className={`compatibility-line ${compatibilityLineClass}`}>
                <p className="Compability">Compatibility: {isCompatible ? "Compatible" : "Incompatible"}</p>
            </div>

        </div>
    );
};

export default CompatibilityCheck;