import React from 'react'
import styles from "./DarkMode.module.css"
const DarkMode = () => {
  return (
    <div className={styles.container}>
        <div className={styles.icon}>🌚</div>
        <div className={styles.icon}>🌞</div>
    </div>
  )
}

export default DarkMode

