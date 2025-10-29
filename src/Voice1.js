import "./Voice.css";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'



function Voice(props){
   const start= ()=> {SpeechRecognition.startListening({ continuous: true,language:"en-In" });}
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();


    if (!browserSupportsSpeechRecognition) {
        return null
      }

const sub=()=>{
    props.check(transcript)
}
      return(
        <div className="container">
            <h2 >Speak</h2>
            <div className="main">
                
                    {transcript}
                
            </div>
            <div className="button" style={{display:"flex"}}>
                <button className="start" onClick={start}>start</button>
                <button onClick={SpeechRecognition.stopListening}>stop</button>
                <button onClick={sub}>Next</button>
            </div>
        </div>
    )
}

export default Voice;
