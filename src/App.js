
import './App.css';
import About from './component/About';
import Navbar from './component/navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react'
import Alert from './component/Alert';
import {
  BrowserRouter,
   Routes,
  Navigate,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light") //wether dark mode eneble or not
  const [modeText, setModeText] = useState("Enablep")
  const [alert, setAlert] = useState(null)


  const showAlert = (message , type) =>{

    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {

      setAlert(null)
      
    }, 1500);
  }


  const toggleMode = () =>{
    if(mode === 'light'){
      setMode("dark")
      setModeText("disable ")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled" , "success")
      // document.title = 'TextUtils Dark Mode';


      // atar madhomer file ar uporer nam 2 sec por code onujai e cng hote thakbe..kinba 3 sec por code onujai e cng hote thakbe..

      // setInterval(() => {
      //   document.title = 'TextUtils IS AMEZING Mode';
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 4000);

    }

    else{
      setMode("light")
      setModeText("Enable ")
      document.body.style.backgroundColor = "white"
      showAlert("light mode has been enabled" , "primary")
      document.title = 'TextUtils - Light Mode'
      
    }
  }
  

  return (
    
    <BrowserRouter>
    
  
          <Navbar title="CreatePropsTitle" aboutText="about_text" mode = {mode} modeText={modeText} toggleMode={toggleMode}  />

          <Alert alert = {alert}/>

          <div className="container">
            {/* <Routes>
                <Route path="/about" element={  <About />}>
                
                </Route>
              
                <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert = {showAlert}/>}>
                  
                </Route>
                
            </Routes> */}
            <Routes>

              <Route path="/" element ={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert = {showAlert}/>}/>
              <Route path="/" element={<Navigate to="/textForm"/>}/> 
                <Route path="/about" element ={<About/>}/>
                
                
                
                
           </Routes>

                
          </div>

     
    
    </BrowserRouter>

  );
}

export default App;
