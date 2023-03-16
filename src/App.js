import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';

// import {
//    Route,Routes,
// } from "react-router-dom";

function App() {
const [mode, setMode] = useState('light'); //weather dark mode enable or Not.
const[alert, setAlert] = useState(null)

const  Showalert = (type, message)=>{
     setAlert({
       type:type,
       msg:message,
     })
     setTimeout(()=>{
setAlert(null)
     },2500)
}

const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = "#A9A9A9";
    Showalert("success", "Dark Mode Enable")
  }
  else{
    setMode("light")
    document.body.style.backgroundColor = "White";
    Showalert("success", "Light Mode Enable")

  }
}
  return (
<>


<Navbar mode={mode} toggleMode = {toggleMode}/>
<Alert alert = {alert}/>
<div className="container my-3">
 
  {/* <Routes> */}
            {/* <Route exact path="/about" element={<About/>}></Route> */}
            {/* <Route exact path="/" element={ */}
            <TextForm Showalert = {Showalert} heading="Enter text to analyze"  mode={mode} />
            {/* }> */}

            {/* </Route>
  </Routes>
   */}
</div>



  </>
  );
}

export default App;
