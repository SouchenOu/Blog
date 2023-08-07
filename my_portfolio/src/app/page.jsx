import Image from 'next/image'
import profile from "public/1.png"
import styles from "./page.module.css"

export default function Home() {
  return (
   <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better website for your Society</h1>
        <p className={styles.desc}>Turning your idea into Reality. We are the best online Community website Builders </p>
        <button className={styles.btn}>See our works</button>
      </div>
      <div className={styles.item}>
        <Image src={profile} className={styles.img}/>
      </div>
      
   </div>
  )
}
