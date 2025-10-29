
import './App.css';
// import Virat from './Virat';
// import Card from './Card';
import { useRef, useState } from 'react';
import Voice from './Voice1';
import Dis from "./Combine";
function App() {

  const [isCorrect,setIsCorrect]=useState(0);
  const chechData=(transcript)=>{
    transcript=transcript.toLowerCase();
    // const n=e.length;
    // console.log(n)
    // let n=transcript.length;
    //     transcript=transcript.slice(11,n);
    //     transcript=transcript.split(" ").join("+");
    //     console.log(transcript)
    if(transcript.includes("puji")||transcript.includes("poji")||transcript.includes("pooji")||transcript.includes("pooji")){
      console.log("is mammu");
       setIsCorrect(1);
    }
    if(transcript.includes("pujitha")||transcript.includes("pojita")||transcript.includes("poojita")||transcript.includes("poojitha"))
    {
      console.log("is mamatha");
      setIsCorrect(2);
    }
  }
  return (
    <div>
       {
        isCorrect==0?<Voice check={chechData}/>:<Dis value={isCorrect} />
      }
    </div>
  );
    
}

export default App;
