import React from 'react';

//orden de la estructura del archivo
//ts
//html
//css o scss

interface ResultProps {
    value: number;
}

//usar any cuando no se sabe el tipo de informacion que se va a usar
const Result: React.FC<ResultProps> = ({ value}) => {
    return (
        <div>
            <h2>Resultado</h2>
            <p>{value}</p>
        </div>
    );
};

export default Result;