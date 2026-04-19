import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
 Routes,
  Route,
Link
} from "react-router-dom";



function App() {  
   //  it returns the Jsx code but if we want to return more than 1 element then we have to wrap it in a div or we can use React.Fragment or empty tag...ie<> amd </> to wrap the elements


  const [alert,setAlert]= useState(null); // pehle alert hmaa null tha
//  heere alert is used as a object
const showAlert =(message,type)=>{
  setAlert({
    msg: message,
    type: type
  });

  setTimeout(() => {
    setAlert(null);
  }, 1500);
};

   const [mode, setMode] = useState('dark');   
 const toggleMode= () =>{
   if(mode==='light'){ 
      setMode('dark');
   document.body.style.backgroundColor = '#042743'
   document.body.style.color='white';
   showAlert("Dark mode has been enabled", "success");
   document.title = 'TextUtils - Dark Mode';
   // setInterval(() => {
   //   document.title = 'TextUtils is Amazing Mode';
   // }, 2000);
   // setInterval(() => {
   //   document.title = 'Install TextUtils Now';
   // }, 1500);
 }
   else{ 
      setMode('light'); 
   document.body.style.backgroundColor = '#f6f8f9';
   document.body.style.color='black';
   showAlert("Light mode has been enabled", "success");
    document.title = 'TextUtils - Light Mode';
 }
}
 
   return (
   <>

{/* <Navbar title="Text Utils" aboutText="About TextUtils"/>*/}
{/* what if we want to pass the title like here textutils to navbar dynamically...like it changes with topics... */}
  
   {/* <Alert alert ="This site uses some cookies Nasty!"/> */}

  
   {/* here alert is used as a object and we are passing the alert state to the Alert component as a prop...so that we can use it in the Alert component to show the alert message... */}
   
       {/* my-3 is the margin top and bottom of 3...it is a bootstrap class  */}

       <Router>
  <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
  
  <Alert alert={alert}/>

  <div className="container my-3">
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={
        <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />
      } />
    </Routes>
  </div>
</Router>
   
   </>
  );
}

export default App;
