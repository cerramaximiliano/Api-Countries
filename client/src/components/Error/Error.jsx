import React from "react";
import styles from "./Error.module.css"
export default function Error () {

    return (
        <div className={styles.container}>
            <h3>Error 404</h3>
            <p>Page not Found!</p>
        </div>
    )
};