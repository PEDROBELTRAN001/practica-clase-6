import React, { useState } from 'react';
import './App.css';
import SumForm from './components/sumform';
import Result from './components/result';
import FormBB from './components/form_b_b';
import Result_b from './components/result_b_b';

const App: React.FC = () => {
  const [result, setResult] = useState<number>(0);
  const [resultado, setResultado] = useState<string | null>(null);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Calculadora</h1>
      <SumForm onSum={setResult} /> 
      <Result value={result} />
      
      <h1>Búsqueda Binaria</h1>
      <FormBB onBuscar={setResultado} />
      <Result_b value={resultado} />
    </div>
  );
};

export default App;
