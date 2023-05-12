import React from "react";
import { useState } from "react";
import "../../styles/index.css";

//create your first component
const Home = () => {

const [color, setColor] = useState();


const handleColorClick = (colorParam) => {

	setColor(colorParam);
};


	return (
		<div>
			<div className="d-flex flex-column container mb-5">
				<div className="stick d-flex justify-content-center mb"></div>
				<div className="trafficLight">
					<button className={`circle redlight ${color == "red" ? "glow-light-red" : ""}`} onClick={() => handleColorClick("red")}></button>
					<button className={`circle yellowlight ${color == "yellow" ? "glow-light-yellow" : "" }`} onClick={() => handleColorClick("yellow")}></button>
					<button className={`circle greenlight ${color  == "green" ? "glow-light-green" : ""}`} onClick={() => handleColorClick("green")}></button>
				</div>

			</div>
		</div>
	);
};

export default Home;
