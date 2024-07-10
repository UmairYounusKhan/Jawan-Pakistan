import React from "react";
import styles from "./signup.module.css"
import Button from "../button/button";


const Signup = ()=>{
    return(
        <div class={styles.signup}>
        <h2>Sign Up</h2>
            <div class={styles.group}>
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div class={styles.group}>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div class={styles.group}>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div class={styles.group}>
                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" required/>
            </div>
            <Button title="Sign-Up"/>
 
    </div>
    )
}

export default Signup;