import React, {useState} from 'react';
import Canvas from '../canvas/Canvas'
import './App.css';

const App = props => {
    const [BrushColour, setBrushColour] = useState('#ffffff');

    const app = <div className="App">
        <Canvas
            size={'Test'}
            brushColour={BrushColour}
        />
    </div>;

    return app;
};

export default App;
