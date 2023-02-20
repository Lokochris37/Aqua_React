import React from "react";
import styles from './index.module.css'

function Index({children}){
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}
export {Index}