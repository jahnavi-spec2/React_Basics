import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
// import About from './components/About';
 let name="Jahnavi";
function App() {  
   //  it returns the Jsx code but if we want to return more than 1 element then we have to wrap it in a div or we can use React.Fragment or empty tag...ie<> amd </> to wrap the elements
 const [mode, setMode] = useState('dark');   
 const toggleMode= () =>{
   if(mode==='light'){ 
      setMode('dark');
   document.body.style.backgroundColor = '#042743'
   document.body.style.color='white';
 }
   else{ 
      setMode('light'); 
   document.body.style.backgroundColor = '#f6f8f9';
   document.body.style.color='black';
 }
}
 
   return (
   <>

{/* <Navbar title="Text Utils" aboutText="About TextUtils"/>*/}
{/* what if we want to pass the title like here textutils to navbar dynamically...like it changes with topics... */}
  
   <Navbar title= "TextUtils" aboutText="About"  mode ={mode} toggleMode={toggleMode}/>
   <div className="container my-3">
       {/* my-3 is the margin top and bottom of 3...it is a bootstrap class  */}
<TextForm heading ="Enter the text to analyse" mode ={mode} toggleMode={toggleMode}/>
{/* <About/> */}

   </div>
   
   </>
  );
}

export default App;
