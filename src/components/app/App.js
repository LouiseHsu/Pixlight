import React, {useState} from 'react';
import Canvas from '../canvas/Canvas'
import {useDispatch, useSelector} from 'react-redux';
import {updateBrush} from '../../actions/updateBrush';
import {leftMouseClicked} from '../../actions/leftMouseClicked';
import globalMouseState from "../../util/globalMouseState";
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