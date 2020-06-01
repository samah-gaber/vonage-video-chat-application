import React from "react";
import VideoChatComponent from "./VideoChatComponent";
import logo from "./assets/vonagelogo.png";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <p>Vonage Video Chat Application</p>
        <img src={logo} alt='vonage logo' className='logo'/>
      </div>
      <VideoChatComponent />
    </div>
  );
}

export default App;
