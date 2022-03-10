import React from 'react'

function Alert(props) {

 
  return (
    <div style={{height:'50px'}}>
   { props.alert && <div class="alert alert-success" role="alert">
 {props.alert.msg}
    
    </div>}
    </div>
    
   
  )
}
export default Alert
