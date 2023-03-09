import React from "react";
import HogTile from "./HogTile";

function HogInitial({hogs, handleDetails}){
    return(
        <div className = "ui eight wide column">
            {hogs.map((hog) => (
                <HogTile
                    key = {hog.name}
                    image = {hog.image}
                    name = {hog.name} 
                    handleDetails={handleDetails}
                    hogs={hogs}
                    />
            ))}
        </div>
    )
}

export default HogInitial;