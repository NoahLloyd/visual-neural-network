import React from 'react';
import './App.css';
import Network from './components/neuralNetwork/Network';

function App() {
  return (
    <div className="App">
      <main className='flex justify-center items-center text-center neural-network'>
        <Network  />
      </main>
    </div>
  );
}

export default App;
