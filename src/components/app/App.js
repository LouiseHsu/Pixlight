import React, {useState} from 'react';
import Canvas from '../canvas/Canvas'
import {useDispatch, useSelector} from 'react-redux';
import {updateBrush} from '../../actions/updateBrush';
import './App.css';

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function App() {
    const dispatch = useDispatch();
    const [BrushColour, setBrushColour] = useState(useSelector(state => state.brushState.colour));


    const randomBrush = () => {
        // setBrushColour(getRandomColor());
        updateBrush(getRandomColor());
    };

    return <div className="App">
        <Canvas
            size={'Small'}
            brushColour={BrushColour}
        />
        <button onClick={() => dispatch(updateBrush(getRandomColor()))}>Generate Random Brush</button>
    </div>;
}

export default App;