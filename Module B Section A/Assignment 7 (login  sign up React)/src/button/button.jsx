import React from "react";
import styles from "./button.module.css"



const Button = (props)=>{
    return(
        <div>
            <button className={styles.button}>{props.title}</button>
        </div>
    )
}

export default Button ;