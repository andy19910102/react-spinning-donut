import React from 'react';
import Donut from './Donut/Donut';
import './app.css'

function App() {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto' }}>
      <header style={{ textAlign: 'center' }}>
        <h1>React Spinning Donut</h1>
        <p>This is a React component that renders an engaging, spinning donut using ASCII art. This project represents an interesting blend of art and technology, leveraging both the power of JavaScript and the aesthetics of ASCII art to create a dynamic visual component.</p>
        <a style={{ position: 'relative', zIndex: 5 }} href="https://github.com/andy19910102/react-spinning-donut">Check documentation</a>
      </header>
      <section className="section">
        <Donut
          color="#ff0000"
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
        <Donut
          color="rgb(234 88 12)"
          scaleX={1}
          scaleY={0.75}
        />
        <Donut
          color="rgb(219 39 119)"
          scaleX={1}
          scaleY={0.75}
        />
        <Donut
          color="rgb(30 64 175)"
          scaleX={1}
          scaleY={0.75}
        />
      </section>
    </div>
  );
}

export default App;
