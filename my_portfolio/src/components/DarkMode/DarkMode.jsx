import React from 'react'
import {useState, useContext} from 'react'
import styles from "./DarkMode.module.css"
import { ThemeContext } from "../../../context/Themecontext"
const DarkMode = () => {
  const { toggle, mode } = useContext(ThemeContext);
    // var mode = "dark"

    // const [mode, setMode] = useState("dark");
    // function lightMode()
    // {
        
    //     setMode("light");
        
    // }
    // function darkMode()
    // {
    //     //setMode((prev) => (prev === "dark" ? "light" : "dark"));
    //     setMode("dark");
    // }
  return (
    <div className={styles.container} onClick={toggle}>
        <div className={styles.icon} >🌚</div>
        <div className={styles.icon} >🌞</div>
        <div className={styles.ball} style={mode === "dark" ? {left:"2px"} : {right:"2px"}}></div>
    </div>
  )
}

export default DarkMode

