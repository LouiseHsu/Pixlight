import Canvas from '../canvas/Canvas'
import Toolbar from '../toolbar/Toolbar'
import {useDispatch} from 'react-redux';
import globalMouseState from "../../util/globalMouseState";
import './App.css';
import React from "react";

function App() {
    let mouseState = new globalMouseState();

    const handleLeftClick = () => {
        mouseState.toggleLeftClick();
    };

    return <div className="App" onMouseDown={handleLeftClick} onMouseUp={handleLeftClick} onClick={console.log("hello")}>
        <Canvas
            size={'Small'}
        />
       <Toolbar/>
    </div>;
}

export default App;