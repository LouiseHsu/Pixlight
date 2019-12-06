import React, {useState, useEffect} from 'react';
import './Pixel.css'

const Pixel = props => {
    const [colour, setColour] = useState('#000000');
    const [brushColourState, setBrushColour] = useState(props.brushColour);
    const [isHovered, setHovered] = useState(false);
    const [isClicked, setClicked] = useState(props.clicked);

    const handleClick = (e) => {
        setColour(brushColourState);
    };

    const onHover = () => {
        if (isClicked) {w
            handleClick();
        }
    };

    useEffect(() => {
        console.log(props);
        setBrushColour(props.brushColour);
    }, [props, props.brushColour]);

    useEffect(() => {
        setClicked(props.clicked);
    }, [props.clicked]);

    return <div className = "Pixel" style={{backgroundColor: colour}}
                key = {props.key}
                onMouseEnter={onHover}
                onMouseDown={handleClick}
            />


};

export default React.memo(Pixel);