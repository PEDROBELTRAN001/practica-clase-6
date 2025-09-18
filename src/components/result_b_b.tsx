import React from 'react';
interface ResultProps {
    value: any;
}

//usar any cuando no se sabe el tipo de informacion que se va a usar
const Result_b: React.FC<ResultProps> = ({ value}) => {
    return (
        <div>
            <h2>Busqueda resultado:</h2>
            <p>{value}</p>
        </div>
    );
};

export default Result_b;