"use client"

import React from "react"
import styles from "./page.module.css"
import Link from "next/link"


const Register = () =>
{
    return (
        <div className={styles.register}>
            <form className={styles.form}>
                <input type="text" placeholder="UserName" className={styles.input} required/>
                <input type="email" placeholder="Email" className={styles.input} required/>
                <input type="password" placeholder="PassWord" className={styles.input} required/>
                <button className={styles.btn}>Register</button>
            </form>

            <Link href="/dashboard/login" className={styles.link}>Login with an existing account</Link>
        </div>
    )
}

export default Register;