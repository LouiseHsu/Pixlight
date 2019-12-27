import React from 'react';
import {updateBrush} from "../../actions/updateBrush";
import {useDispatch} from "react-redux";

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const Toolbar = props => {
    const dispatch = useDispatch();
    return  <button onClick={() => dispatch(updateBrush(getRandomColor()))}>Generate Random Brush</button>
};

export default Toolbar;