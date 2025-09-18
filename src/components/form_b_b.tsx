import React, { useState } from "react";

interface FormBBProps {
    onBuscar: (texto: string | null) => void;
}

function busquedabin(arr: string[], target: string): number {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

const FormBB: React.FC<FormBBProps> = ({ onBuscar }) => {
    const [palabra, setPalabra] = useState("");
    const [arrayText, setParrafo] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let data = arrayText
            .split(/[\s,]+/)
            .map(s => s.trim().toLowerCase())
            .filter(Boolean)
            .sort();

        const resultado = busquedabin(data, palabra.trim().toLowerCase());
        if (resultado !== -1) {
            onBuscar(`"${palabra}" encontrado en la posición ${resultado}`);
        } else {
            onBuscar(`"${palabra}" no encontrado`);
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Ingresa un texto:
                    <textarea
                        value={arrayText}
                        onChange={e => setParrafo(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Texto para buscar:
                    <input
                        type="text"
                        value={palabra}
                        onChange={e => setPalabra(e.target.value)}
                    />
                </label>
                <button type="submit">Buscar</button>
            </form>
        </div>
    );
};

export default FormBB;
