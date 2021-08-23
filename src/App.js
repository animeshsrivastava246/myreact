import './App.css';
import About from './components/About'; 
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
      if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor = '#000424';
        showAlert("DarkMode enabled", "success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("LightMode enabled", "success");
      }
  }
  return (
    <>
      <Router>  
        {/* <Navbar abtName="Devil"/> */}
        <Navbar title="Text Customizer" abtName="Animesh" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} mode={mode} heading="Write down or paste your text."/>
            </Route>
          </Switch>
        <div className="container my-3">
        </div>
      </Router>
    </>
  );
}

export default App;
