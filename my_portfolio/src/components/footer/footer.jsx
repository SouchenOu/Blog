"use client"

import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
const footer = () => {
  return (
    <div className={styles.footer}>
      <div>@2023 made by souchen</div>
      <div className={styles.imgContainer}>
        <Image className={styles.icon} src="/Facebook-logo.png" width={22} height={19} alt='souchen Facebook'/>
        <Image className={styles.icon} src="/insta.png"  width={15} height={15} alt='souchen Instagram'/>
        <Image className={styles.icon} src="/linkdin.png"  width={15} height={15} alt='souchen Linkdin'/>
        <Image className={styles.icon} src="/twitter.png" width={15} height={15}  alt='souchen twitter'/>

      </div>
    </div>
  )
}

export default footer
