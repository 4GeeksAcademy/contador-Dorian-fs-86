import React, { useState, useEffect,} from "react";


function App () {
const [seconds, setSeconds]=useState(0);


useEffect(() => {
    const interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
}, []);

useEffect(() => {
    if(seconds === 10){
        alert("Has alcanzado 10 segundos CONGRATS! ");
    }
}, [seconds]);

const minutes = Math.floor((seconds % 3600) / 60);
const countseconds = seconds % 60;

return(
    <div>
    <div className="image">
    <h1 className="titulo">WATCH TIMER</h1>
    <div className="padrecontador">
    <div>
    <div>
    <span className="segundos">{String(countseconds).padStart(2, "0")} segundos </span>
    </div>
    <span className="minutos">{String(minutes).padStart(2, "0")} minutos </span>
    </div>
    </div>
    </div>
    </div>
);
};
export default App