import React,{useState} from 'react'

export default function TextForm(props) {
 
 const[text,setText]=useState('');

 const handleUpClick= () =>{
       
     setText(text.toUpperCase());
     props.showAlert("Converted to Uppercase!","success");
 }
 const handleLoClick= () =>{
       
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!","success");
}
const handleClearClick= () =>{
       
    setText("");
    props.showAlert("Text cleared!","success");
}
 const handleOnChange= (event) =>{
    console.log("On change");
    setText(event.target.value);
}
const handleCopy = () => {
    navigator.clipboard.writeText(text); 
    props.showAlert("Copied to Clipboard!", "success");
}
 
    return (
        <>
    <div className="container my-3 mb-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h3>{props.heading}</h3>
<div className="mb-3" >
  
  <textarea className="form-control" value={text} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange}></textarea>
</div>
 <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
 <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
 <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
 <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    </div>
  <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h4>Here is the Summary of the Text-</h4> 
     <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
     <h4>Preview</h4>
      <p>{text}</p>
       
      
      
  </div>
   </>
  )
}

