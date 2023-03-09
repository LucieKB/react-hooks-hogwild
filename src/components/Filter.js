import React,{useState} from "react";


function Filter({hogs}){
    const [showGreased, setShowGreased] = useState(true)

    function filterGreased(greased){
        if (greased === true){
            setShowGreased(true)
        } else {setShowGreased(false)}
            }
       
const showGreasedHogs = hogs.filter((hog)=> hog.greased === true)

    return (
    <div>
    <button onClick = {filterGreased}> Just want to display greased 🐷?</button>
    {/* {showGreased ? <HogDetails specialty={specialty} weight={weight} greased={greased}/> : showGreasedHogs}  */}
    </div>  
)

}

export default Filter;