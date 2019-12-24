import Canvas from '../canvas/Canvas'
import {useDispatch} from 'react-redux';
import {updateBrush} from '../../actions/updateBrush';
import globalMouseState from "../../util/globalMouseState";
import './App.css';
import React from "react";

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function App() {
    let mouseState = new globalMouseState();
    const dispatch = useDispatch();

    const handleLeftClick = () => {
        mouseState.toggleLeftClick();
    };

    return <div className="App" onMouseDown={handleLeftClick} onMouseUp={handleLeftClick} onClick={console.log("hello")}>
        <Canvas
            size={'Small'}
        />
        <button onClick={() => dispatch(updateBrush(getRandomColor()))}>Generate Random Brush</button>
    </div>;
}

export default App;