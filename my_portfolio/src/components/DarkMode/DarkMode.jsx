import React from 'react'
import {useState} from 'react'
import styles from "./DarkMode.module.css"
const DarkMode = () => {
    // var mode = "dark"

    const [mode, setMode] = useState("dark");
    function lightMode()
    {
        
        setMode("light");
        
    }
    function darkMode()
    {
        setMode("dark");
    }
  return (
    <div className={styles.container}>
        <div className={styles.icon} onClick={darkMode}>🌚</div>
        <div className={styles.icon} onClick={lightMode}>🌞</div>
        <div className={styles.ball} style={mode === "dark" ? {left:"2px"} : {right:"2px"}}></div>
    </div>
  )
}

export default DarkMode

