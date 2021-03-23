// adding css to jsx is that easy
import './App.css'; // This pattern is preferred where css for this component has a matching .css filename
import "../node_modules/video-react/dist/video-react.css";

// A component import
import Video from './components/Video';
import Security from './components/Security';
import Code from './components/Code';
import Coordinates from './components/Coordinates';



import { useState } from 'react';


// Defining our <App /> component the function name matches the file name
function App() {
  const [secure,setSecure]=useState(true); //change to FALSE when done testing
  const [digitValue,setDigitValue]=useState(null)
  const [digitLocation,setDigitLocation]=useState(null)
  const [videoEnded,setVideoEnded]=useState(true); //change to FALSE when done testing
  const codes=[
    {
      location:1,
      value:8,
      code:"1111111111"
    },
    {
      location:2,
      value:6,
      code:"2222222222"
    },{
      location:3,
      value:6,
      code:"3333333333"
    },{
      location:4,
      value:5,
      code:"4444444444"
    },{
      location:5,
      value:2,
      code:"5555555555"
    },{
      location:6,
      value:0,
      code:"6666666666"
    },{
      location:7,
      value:9,
      code:"7777777777"
    },{
      location:8,
      value:8,
      code:"8888888888"
    },{
      location:9,
      value:7,
      code:"9999999999"
    },{
      location:10,
      value:0,
      code:"10"
    },{
      location:11,
      value:6,
      code:"11"
    },{
      location:12,
      value:3,
      code:"12"
    },
  ]

  // All functional components need to return jsx with one parent element
  return ( 
    <div className="App"> {/* Parent Element. Also we can't use the word class, so we use className in jsx*/}
      {/* Navbar is our imported component*/}
      {!secure&&<Security secure={secure} setSecure={setSecure}/>}
      {secure&&!videoEnded&&<Video setVideoEnded={setVideoEnded}/>}
      {videoEnded&&<Code codes={codes} digitValue={digitValue} setDigitValue={setDigitValue} digitLocation={digitLocation} setDigitLocation={setDigitLocation}/>}
      {videoEnded&&<Coordinates codes={codes} digitValue={digitValue} setDigitValue={setDigitValue} digitLocation={digitLocation} setDigitLocation={setDigitLocation}/>}
    </div>
  );

}

// Makes our Component available for import
export default App;