import React from "react";
import styles from "./login.module.css"
import Button from "../button/button";


const Login = ()=>{

    return(
        <div className={styles.login}>
            
        <h2>Login</h2>
    
            <div class={styles.group}>
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div class={styles.group}>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required />
            </div>
           <Button title="Login"/>
         
    </div>
       
    )
}

export default Login;