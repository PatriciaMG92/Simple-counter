import React from "react";
import NumberOne from "./numberOne.jsx";
import NumberTwo from "./numerTwo.jsx";
import NumberThree from "./numberThree.jsx"
import NumberFour from "./numberFour.jsx"
import NumberFive from "./numberFive.jsx";
import NumberSix from "./numberSix.jsx"

const SecondsCounter = () =>{
    return(
        <>
				<div className="col card align-items-center bg-dark">
  					<div className="card-body bg-dark">
				  		<h1 className="text-white"><NumberSix /></h1>
  					</div>
				</div>
				<div className="col card align-items-center bg-dark">
  					<div className="card-body bg-dark">
				  		<h1 className="text-white"><NumberFive /></h1>
  					</div>
				</div>
				<div className="col card align-items-center bg-dark">
  					<div className="card-body bg-dark">
				  		<h1 className="text-white"><NumberFour /></h1>
  					</div>
				</div>
				<div className="col card align-items-center bg-dark">
  					<div className="card-body bg-dark">
				  		<h1 className="text-white"><NumberThree /></h1>
  					</div>
				</div>
				<div className="col card align-items-center bg-dark">
  					<div className="card-body bg-dark">
				  		<h1 className="text-white"><NumberTwo /></h1>
  					</div>
				</div>
				<div className="col card align-items-center bg-dark">
  					<div className="card-body bg-dark">
				  		<h1 className="text-white"><NumberOne/></h1>
  					</div>
				</div>
        </>
    )
}

export default SecondsCounter;