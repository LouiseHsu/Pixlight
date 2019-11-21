import React, {useState} from 'react';
import './Pixel.css'

const Pixel = props => {
    const [colour, setColour] = useState('#4287f5');

    return <div className = "Pixel" style={{backgroundColor: colour}}/>
};

export default React.memo(Pixel);