import React, {useState} from "react";
import HogDetails from "./HogDetails"

function HogTile({name,image,hogs}){
const [attributesDisplayed, setAttributesDisplayed] = useState(false)


function handleDisplayMore()
{setAttributesDisplayed(!attributesDisplayed)
}

        return(
            <div className="ui eight wide column">
                    <img src={image} alt="Cute for a future bacon strip" />
                    <h2>{name}</h2>
                    <button onClick={handleDisplayMore}>{attributesDisplayed? "Hide Details" : "Show Details"}</button>
                    <div>{attributesDisplayed? <HogDetails hogs={hogs} name={name}/> : null} </div>
            </div>  

            )
 }   

export default HogTile;