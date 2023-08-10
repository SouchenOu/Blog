import React from 'react'
import styles from "./page.module.css";
import Link from "next/link"
import Image from "next/image"
import img1 from "./bl1.jpeg"
const Blog = () => {
  return (
    <div className={styles.container}>
       <Link href="blog/MiniBlog" className={styles.link}>
            <div className={styles.imageContainer}>
                <Image src={img1} alt=''/>
            </div>
            <div className={styles.content}>
                <h1 className={styles.titre}>Lipsum generator</h1>
                <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
       </Link >
       <Link href="#" className={styles.link}>
            <div className={styles.imageContainer}>
                <Image src={img1} alt=''/>
            </div>
            <div className={styles.content}>
                <h1 className={styles.titre}>Lipsum generator</h1>
                <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
       </Link >
       <Link href="#" className={styles.link}>
            <div className={styles.imageContainer}>
                <Image src={img1} alt=''/>
            </div>
            <div className={styles.content}>
                <h1 className={styles.titre}>Lipsum generator</h1>
                <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
       </Link >
    </div>
  )
}

export default Blog
