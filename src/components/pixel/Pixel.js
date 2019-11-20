import React, {useState} from 'react';

const Pixel = props => {
    const [colour, setColour] = useState('#ffffff');

    return <div className = "Pixel" style={{backgroundColor: colour}}/>
};

export default React.memo(Pixel);