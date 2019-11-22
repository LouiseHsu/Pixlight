import React, {useState, useEffect} from 'react';
import './Pixel.css'

const Pixel = props => {
    const [colour, setColour] = useState('#000000');
    const [brushColourState, setBrushColour] = useState(props.brushColour);
    const [isHovered, setHovered] = useState(false);

    const handleClick = (e) => {
        setColour(brushColourState);
    };

    const onHover = () => {
        setHovered(true );
    };

    const onLeave = () => {
        setHovered(false);
    };

    useEffect(() => {
        console.log('changed');
        setBrushColour(props.brushColour);
    }, [props.brushColour]);

    return <div className = "Pixel" style={{backgroundColor: colour}}
                key = {props.key}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                onMouseDown={handleClick}
            />


};

export default React.memo(Pixel);