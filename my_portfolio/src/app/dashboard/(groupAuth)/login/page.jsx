"use client"

import React from "react"
import styles from "./page.module.css"
import { signIn } from "next-auth/react"

 const login  = () => {
    return (
        <div className={styles.container}>
                <button className={styles.btn} onClick={() => signIn("google")}>Login with Google</button>

        </div>
    )
}

export default login;