import React, {useState} from 'react';
import Canvas from '../canvas/Canvas'
import {connect, Provider} from 'react-redux';
import store from '../../store'
import {updateBrush} from '../../actions/updateBrush';
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
    updateBrush: (colour) => dispatch(updateBrush(colour))
});


const App = props => {
    const [BrushColour, setBrushColour] = useState('#ff00ff');

    const randomBrush = () => {
        console.log("set");
        // setBrushColour(getRandomColor());
        updateBrush(getRandomColor());
    };

    const updateBrush = (event) => {
        props.updateBrush();
    };

    return <div className="App">
        <Canvas
            size={'Small'}
            brushColour={store}
        />
        <button onClick={randomBrush}>Generate Random Brush</button>
        <button onClick={updateBrush}>Test redux action</button>
        <pre>
         {
             JSON.stringify(props)
         }
        </pre>
    </div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
