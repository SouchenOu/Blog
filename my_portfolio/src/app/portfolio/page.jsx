import React from 'react'
import styles from "./page.module.css"
import Link from "next/link"
const page = () => {
  return (
    <div className={styles.Container}>
          <h1 className={styles.FirstTitle}>Choose a Gallery</h1>
          <div className={styles.items}>
              <Link href="/portfolio/illustrations" className={styles.link1}>
                  <span className={styles.title}>illustrations</span>
              </Link>
              <Link href="/portfolio/websites" className={styles.link1}>
                  <span className={styles.title}>Websites</span>
              </Link>
              <Link href="/portfolio/application" className={styles.link1}>
                  <span className={styles.title}>Applications</span>
              </Link>
          </div>
    </div>
  )
}

export default page
