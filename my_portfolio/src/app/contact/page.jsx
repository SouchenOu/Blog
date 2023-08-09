import React from 'react';
import styles from './page.module.css';
import Image from "next/image"
import contact from "./cc.jpg"
import Button from "../../components/button/Button"

const Contact = () => {
  return (
    <div className={styles.Container}>
       <h1 className={styles.title}> Contact us</h1>
       <div className={styles.content}>
          <div className={styles.imgContainer}>
                <Image src={contact} className={styles.img}/>
          </div>
          <form className={styles.form}>
              <input type='text' placeholder='name' className={styles.input} />
              <input type='text' placeholder='email' className={styles.input}/>
              <textarea className={styles.textarea} placeholder='message' cols="30" rows="10"></textarea>
              <Button url="#" text="Send"/>
          </form>
          

       </div>
    </div>
  )
}

export default Contact
