import React, {useState, useEffect} from 'react';
import './Pixel.css'

const Pixel = props => {
    const [colour, setColour] = useState('#000000');

    const handleClick = (e) => {
        console.log(e);
        setColour('#ffffff');
    };

    return <div className = "Pixel" style={{backgroundColor: colour}} onMouseDown={(e) => handleClick(e)}/>


};

export default React.memo(Pixel);