import React, {useState} from "react";
import Nav from "./Nav";
import Tiles from "./Tiles"
import hogs from "../porkers_data";

function App() {
	const [hogsAttributes, sethogsAttributes]= useState(true)

	const hogsDetails = hogs.map((hog)=>(
		<Tiles 
		name = {hog.name}
		image = {hog.image}	/>
	))

	const hogList = hogs.map((hog)=>{
		return(
			<div key= {hog.name}>
		<p>specialty = {hog.specialty}</p>
		<p>greased = {hog.greased}</p>
		<p>weight = {hog.weight}</p>
		</div>
		)}
	)

    function handleAddDetails(hogList){
sethogsAttributes([...hogsAttributes, hogList])}

	return (
		<div className="App">
			<Nav />
			<Tiles hogDetails = {hogsDetails} hogList={hogList} handleAddDetails={handleAddDetails} />
		</div>
	);
}

export default App;

