import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('Enter Text here');
  // text="new text"; // Wrong way to change the state...we cannot directly change the state we have to use the setText function to change the state...so the correct way to change the state is
  // setText("new text");

  const handleUpclick= () => {
    console.log("UpperCase was clicked"+ text);
    let newtext=text.toUpperCase();
   setText(newtext);
  }
  const handleLowclick= () => {
    console.log("LowerCase was clicked"+ text);
    let newtext=text.toLowerCase();
   setText(newtext);
  }

  const handleOnChange= (event) =>{// ye type krne ko tha wrna we cant make anty change in texton text area
    setText(event.target.value);
  }

  return (
    <>
    <div className='container'>
<h1>{props.heading}</h1>
     
<div className="mb-3">
    
  <label for="myBox" className="form-label">Example textarea</label>
  <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
 </div>

  
  <button className="btn btn-primary mx-2" onClick={handleUpclick} >convert to Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLowclick} >convert to Lowercase</button>
    </div>
    <div className="container">
      <h2>Your Text</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p> {0.008* text.split(' ').length} minutes read</p>
      <h3> Preview</h3>
      <p>{text}</p>
    </div>
  </>
  )
}
// ab is text form ki state hogi ie button click hone par text uppercase me convert hoga to uske liye state ka use karna padega...
