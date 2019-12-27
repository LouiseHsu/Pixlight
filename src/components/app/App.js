import Canvas from '../canvas/Canvas'
import Toolbar from '../toolbar/Toolbar'
import globalMouseState from "../../util/globalMouseState";
import './App.css';
import React from "react";

function App() {
    let mouseState = new globalMouseState();

    const handleLeftClick = () => {
        mouseState.toggleLeftClick();
    };

    return <div className="App" onMouseDown={handleLeftClick} onMouseUp={handleLeftClick}>
        <Canvas
            size={'Medium'}
        />
       <Toolbar/>
    </div>;
}

export default App;