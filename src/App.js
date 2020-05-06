import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  
  const APP_ID = "0992780d";
  const APP_KEY = "5e5d73059b0a4681aa46832ad940e2e7";
  
  const exampleReq = "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}"


  return(
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
