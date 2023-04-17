import React from "react";
import SecondsCounter from "./secondsCounter.jsx";

//create your first component
const Home = () => {
	return (
		<>
		<div className="container-fluid bg-dark">
			<div className="row mt-5 p-5 justify-content-center align-items-center bg-dark gap-3">
				<div className="col card align-items-center bg-dark">
  					<div className="card-body bg-dark">
			  			<h1 className="text-white"><i className="fa fa-clock"></i></h1>
  					</div>
				</div>
				<SecondsCounter />
			</div>
		</div>
		</>
	);
};

export default Home;
