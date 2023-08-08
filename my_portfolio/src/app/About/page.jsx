import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import about from "./img5.jpeg"


const About = () => {
  return (
    <div className={styles.containers}>
        <div className={styles.imgContainer}> 
          <Image src={about} className={styles.img} />
          <div className={styles.txtImg}>
              <h1 className={styles.imgTitle}>Looking to build a new website or upgrade your existing website to a web application?</h1>
              <h2 className={styles.imgDesc}> You want to build a website that grows with your business.</h2>
          </div>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.item}>
                <h1>Who are we ?</h1>
                <p>
                Do you hate to code? Or do you not even have any experience with programming, but you would still like to build a community page? Well, you surely are in luck because we have loads of different community website builders here for you that do not require any experience! With Souchein, you code and design visually, which makes using its editor a breeze. In other words, whether you plan to use souchein for building your first website or for prototyping only, you will win without a doubt.
                </p>
            </div>
            <div className={styles.item}>
                <h1>What we do ?</h1>
                <p> souchein simplifies web development with artificial intelligence. Instead of doing the work yourself, souchein’s AI will create the ideal web design for your project in just 1 week. Answer a bunch of questions that Soushein team asks, and voila! You will have the layout ready and set to customize it further. However, if you fancy the lookout of the box, feel free to add your content and details only, and you can already publish your page! Quick and convenient, indeed!</p>
            </div>
        </div>
    </div>
  )
}

export default About
