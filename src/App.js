import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';


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
      {/* <Navbar abtName="Devil"/> */}
      <Navbar title="Text Customizer" abtName="Animesh" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} mode={mode} heading="Write down or paste your text."/>
      </div>
      {/* <About mode={mode}/> */}
    </>
  );
}

export default App;
