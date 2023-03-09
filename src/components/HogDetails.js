import React from "react";

function HogDetails({hogs}){
   console.log(hogs)
   const detailsOnHogs = hogs.map((hog)=>{
       return(
        <div key={hog.name}>
        <p>trophy : {"highest medal achieved"}</p>
        <p>weight : {hog.weight}</p>
        <p>specialty : {hog.specialty}</p>
        <p>greased : {hog.greased}</p>
        </div>
    )});

    return(
        <div>{detailsOnHogs}</div>
    )
    
}

export default HogDetails;

