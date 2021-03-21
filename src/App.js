// adding css to jsx is that easy
import './App.css'; // This pattern is preferred where css for this component has a matching .css filename
import "../node_modules/video-react/dist/video-react.css";

// A component import
import Video from './components/Video';
import Security from './components/Security';

import { useState } from 'react';


// Defining our <App /> component the function name matches the file name
function App() {
  const [secure,setSecure]=useState(false);
  // All functional components need to return jsx with one parent element
  return ( 
    <div className="App"> {/* Parent Element. Also we can't use the word class, so we use className in jsx*/}
      {/* Navbar is our imported component*/}
      {secure?<Video/>:<Security secure={secure} setSecure={setSecure}/>}
    </div>
  );
}

// Makes our Component available for import
export default App;