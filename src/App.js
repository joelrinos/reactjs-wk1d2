import React from "react";
import data from "./employee-data";
import { useState } from 'react';

const EmployeeContent = () => {

	const [showBox, setShowBox] = useState("false");
	//const handleBoxToggle = () => setShowBox("true");
    const { employees } = data;	

	return (<>
	<h3> Employees </h3>

	{employees.map((_data,i) => {
		console.log(showBox);  
		return(
		  <div 
			 //onMouseEnter={this.handleBoxToggle}
			 className={`container${showBox ? " show" : ""}`}
			
			// className="container"
		    id={i+_data.name} key={i}>
		     {_data.name}
			 
		  </div>
		);
		
	})}
	
	<hr/>		
	</>);
}


function App() {
  return (
    <>
      <EmployeeContent />
    </>
  );
}

export default App;
