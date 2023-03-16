import React, { useState, useEffect } from "react";
import ColorblindSwitch from "./ColorBlindSwitch";
function DataTable() {
    const headerArray = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const [preferedColor, setColor] = useState("normal")
console.log(preferedColor)
// const handleColorChange = (color) => setColor(color)
const handleColorChange = (color) => setColor(color);
    return (
        <div>
<ColorblindSwitch preferedColor={preferedColor} handleColorChange= {handleColorChange} />
        
        <table>
            <thead>
                <tr>


                    {headerArray.map(col => {
                        return <th key ={col} id ={`columnheader-${col}`}className ={preferedColor}>{col}</th>
                    })}
                </tr>
            </thead>
        </table>
        </div>
    )

}
export default DataTable