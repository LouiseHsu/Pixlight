import React, {useState} from 'react';
import Canvas from '../canvas/Canvas'
import {connect} from 'react-redux';
import {simpleAction} from '../../actions/simpleAction';
import './App.css';

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
});


const App = props => {
    const [BrushColour, setBrushColour] = useState('#ff00ff');

    const randomBrush = () => {
        console.log("set");
        setBrushColour(getRandomColor());
    };

    const simpleAction = (event) => {
        props.simpleAction();
    };

    return <div className="App">
        <Canvas
            size={'Small'}
            brushColour={BrushColour}
        />
        <button onClick={randomBrush}>Generate Random Brush</button>
        <button onClick={simpleAction}>Test redux action</button>
        <pre>
         {
             JSON.stringify(props)
         }
        </pre>
    </div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
