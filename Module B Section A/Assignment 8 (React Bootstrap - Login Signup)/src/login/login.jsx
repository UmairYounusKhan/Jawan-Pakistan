import React from "react";
import styles from "./login.module.css"
import Button from 'react-bootstrap/Button';



const Login = ({clickFunc})=>{
    return(
        
        <div className="container-fluid mt-5 d-flex justify-content-center ">
            <div className={styles.container}>
 
        <h1 className="mt-5 mb-5">Login </h1>
    
            <div className="mb-3">
                <label className="fs-4 mb-1" for="username">Username:</label><br />
                <input style={{borderRadius:"4px", border:"none"}} placeholder="Enter UserName" className="w-75 p-1 b" type="text" id="username" name="username" required />
            </div>
            <div  className="mb-2">
                <label className="fs-3 mb-1" for="password">Password:</label><br />
                <input style={{borderRadius:"4px", border:"none"}}  placeholder="Enter Password" className="w-75 p-1" type="password" id="password" name="password" required />
            </div>
            <div>
                <input className="mb-5" type="checkbox" /> <i>Remember Me</i>
                <p  className="mb-2"><a className={styles.anchor} onClick={clickFunc} href="#">Create an Account?</a></p>
            </div>
            <Button  className=" w-50" variant="outline-info">Login...</Button>
         
    </div>
    </div>
    )
}

export default Login;