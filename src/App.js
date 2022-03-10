
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
//import About from './components/About';

function App() {
  const[mode,setMode]=useState('light');
 const [alert, setAlert] = useState(null);
  const showAlert =(message,type)=>{
   setAlert({
      msg:message,
   type:type
   })
   setTimeout(() =>{
     setAlert(null);
   },1000);
   
  }
 
    
  
  
  const toggleMode =() =>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor ='#042743';
    showAlert(" Dark mode has enabled "," success :");
  }
  else{
    setMode('light')
    document.body.style.backgroundColor ='white';
    showAlert(" Light mode has enabled "," success :");
  }
  
  }
  return (
    <>
      <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className="container">
         <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        {/* <About mode={mode}/> */}
      </div>
    
     
    </>
  );
  }


export default App;
