import React from 'react';
import Donut from './Donut/Donut';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Donut
        color="#dd0000"
        scaleX={1}
        scaleY={0.75}
      />
      <Donut
        color="#8E2DE2"
        scaleX={1}
        scaleY={0.75}
      />
      <Donut
        color="#11998e"
        scaleX={1}
        scaleY={0.75}
      />
    </div>
  );
}

export default App;
