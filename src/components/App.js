import React from "react";
import Nav from "./Nav";
import HogInitial from "./HogInitial";
import hogs from "../porkers_data";
import Filter from "./Filter"
import HogDetails from "./HogDetails"

function App() {

		

	return (
		<div className = "ui grid container">
			<Nav />
		
		<div className = "ui eight wide column">
			<Filter hogs={hogs}/>
			<HogInitial hogs={hogs}/>
		</div>	
		</div>
		
	);
}



export default App;

/* <HogTile name={name} image={image} specialty={specialty} weight={weight} greased={greased}/> */