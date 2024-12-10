import React, { useState, useEffect,} from "react";


//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

// contador de segundos

const SecondsCounter = ({seconds}) => {
	return (
		<div className="seconds-counter">
			<h1>
			<i class="fa-solid fa-clock"></i> {seconds}
			</h1>
		</div>
	);
};

const Home = () => {
	const [seconds, setSeconds] = useState(0);
	const [isRunning, setIsRunning] = useState(true);
	const [countdownValue, setCountdownValue] = useState("");


	// para manejar el intérvalo
	useEffect(() => {
		let interval;
		if (isRunning) {
			interval = setInterval(() => {
				setSeconds((prevSeconds) => {
					if (prevSeconds > 0) {
						return prevSeconds - 1;
					} else {
						setIsRunning(false);
						return 0;
					}
				});
		}, 1000);
		}


	// para limpiar el intérvalo
		return () => clearInterval(interval);
	}, [isRunning]);


	//función para detener el intérvalo 
	const stopCounter = () => 
		setIsRunning(false);


	//función para resetear el intérvalo 
	const resetCounter = () => {
		setSeconds(0);
		setIsRunning(true);
	};

	// función para la cuenta regresiva
	const startCountdown = () => {
		if (countdownValue && parseInt(countdownValue) > 0){
			setSeconds(parseInt(countdownValue)); 
			setIsRunning(true);
		}
	};
	
	return ( 
		<div className="imagen">
		<h1>Que comience la fiesta</h1>
			<SecondsCounter seconds={seconds}/>
			<div>
				<button onClick={stopCounter}>Stop</button>
				<button onClick={resetCounter}>Reset</button>
			</div>
			<div>
				<input
				type="number"
				placeholder="Cuenta regresiva"
				value={countdownValue}
				onChange={(e) => setCountdownValue(e.target.value)}
				/>
				<button onClick={startCountdown}>para inciar la cuenta regresiva</button>
			</div>
		</div>
	);};

export default Home;
