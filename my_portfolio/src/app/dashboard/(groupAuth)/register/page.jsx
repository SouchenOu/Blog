"use client"

import styles from "./page.module.css"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"


const Register = () =>
{
    const router = useRouter();
    const [err, setErr] = useState(false);
    const handleSubmit = async (event) =>
    {
        

        event.preventDefault();
        const name = event.target[0].value;
        const email = event.target[1].value;
        const password = event.target[2].value;
        try {
            const res = await fetch("/api/auth/register", {

                method: "POST",
                headers: {"content-Type" : "application/json"},
                body : JSON.stringify({
                    name, email, password,
                }),
            });
            res.status === 201 && router.push("/dashboard/login?success=Acount has been created");
            
        }catch (err)
        {
            setErr(true);
        }
    };
    return (
        <div className={styles.register}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" placeholder="UserName" className={styles.input} required/>
                <input type="email" placeholder="Email" className={styles.input} required/>
                <input type="password" placeholder="PassWord" className={styles.input} required/>
                <button className={styles.btn}>Register</button>
            </form>
            {err && "something went wrong"}
            <Link href="/dashboard/login" className={styles.link}>Login with an existing account</Link>
        </div>
    )
}

export default Register;