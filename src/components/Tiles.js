import React, {useState} from "react";

function Tiles({name, image,}){
    


    return(
            <div className="ui eight wide column">
                {name}
                <img src={image} alt = "Bacon in the making" />
                {/* onClick={handleAddDetails}/> */}
                {/* <ul>{setHogAttributes}</ul> */}
            </div>

    )
}


export default Tiles;