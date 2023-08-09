import Image from 'next/image'
import profile from "public/img2.jpeg"
import styles from "./page.module.css"
import Button from "../components/button/Button"

export default function Home() {
  return (
   <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Next-Generation websites for your Startup.</h1>
        <p className={styles.desc}>Whether you need a landing page or a full-fledged website for your business, StartNow will get your website up and running in 3 Days. Without compromising on quality. </p>
        <Button url="/portfolio" text="See our works"/>
      </div>
      <div className={styles.item}>
        <Image src={profile} className={styles.img}/>
      </div>
      
   </div>
  )
}
