import React from "react";
import styles from "./signup.module.css"
import Button from 'react-bootstrap/Button';
import { FaUserLock } from "react-icons/fa6";


const Signup = ({clickFunc})=>{
    return(
        <div  className=" container-fluid mt-3 mb-5  d-flex justify-content-center ">
            <div className={styles.boss}>
 
        <h1 className="mt-1 mb-5">Sign-Up<FaUserLock /></h1>
    
            <div  className="mb-2">
                <label className="fs-4 mb-1" for="username">Name:</label><br />
                <input style={{borderRadius:"4px", border:"none"}}  placeholder="Enter Name" className="w-75 p-2" type="text" id="pu" name="username" required />
            </div>
            <div  className="mb-2 ">
                <label className="fs-4 mb-1" for="email">Email:</label><br />
                <input style={{borderRadius:"4px", border:"none"}}  placeholder="Enter Email " className="w-75 p-2" type="email" id="pu" name="email" required />
               
            </div>

            <div  className="mb-2">
                <label className="fs-4 mb-1" for="password">Password:</label><br />
                <input style={{borderRadius:"4px", border:"none"}}  placeholder="Enter Password" className="w-75 p-2" type="password" id="pu" name="password" required />
            </div>
            <div>

            <div  className="mb-2">
                <label className="fs-4 mb-1" for="password">Confirm Password:</label><br />
                <input style={{borderRadius:"4px", border:"none"}}  placeholder="Enter Confirm Pass" className="w-75 p-2" type="password" id="pu" name="password" required />
            </div>

                <input  className="mb-2" type="checkbox" /> <i>Remember Me</i>
                <p className="mb-2"><a className={styles.anchor} onClick={clickFunc} href="#">Already have account..</a></p>
            </div>
            <Button className=" w-50" variant="outline-info">Login...</Button>
         
    </div>
    </div>
 
    )
}

export default Signup;