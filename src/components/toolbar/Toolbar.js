import React from 'react';
import BrushPalette from "./brushPalette/BrushPalette";
import BrushRadius from "./brushRadius/BrushRadius";


const Toolbar = props => {
    return  <div>
        <BrushPalette/>
        <BrushRadius/>
    </div>
};

export default Toolbar;