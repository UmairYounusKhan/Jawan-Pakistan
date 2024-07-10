import React, { useState } from "react";
import Login from "./login/login";
import Signup from "./signup/signup";
import './App.css'



const App = ()=>{

 const [loc,setloc] = useState()


 return (
  <div className="bg">
    {loc ? (
      <>
        <Signup />
        <p>
          Already have an account? 
          <a style={{color: "red", cursor: "pointer"}} id="btu" onClick={() => setloc(false)}>
            Login
          </a>
        </p>
      </>
    ) : (
      <>
        <Login />
        <p>
          Don't have an account? 
          <a style={{color: "red", cursor: "pointer"}} id="btu" onClick={() => setloc(true)}>
            Signup
          </a>
        </p>
      </>
    )}
  </div>
);


}

export default App;