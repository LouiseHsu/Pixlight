import React, {useState} from 'react';
import Canvas from '../canvas/Canvas'
import './App.css';

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const App = props => {
    const [BrushColour, setBrushColour] = useState('#ff00ff');

    const randomBrush = () => {
      console.log("set");
      setBrushColour(getRandomColor());
    };

  return <div className="App">
      <Canvas
          size={'Test'}
          brushColour={BrushColour}
      />
      <button onClick={randomBrush}>Generate Random Brush</button>
    </div>;
};

export default App;
