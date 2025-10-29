import react from "react";
// import "./Voice.css";

import Virat from './Virat';
import Card from './Card';

function Voice(props){

    const isCorrect=props.value;
    console.log(props);
    return(
        <>
        {

            isCorrect==1?<Virat/>:<Card/>
        }
        </>
    )
}

export default Voice;