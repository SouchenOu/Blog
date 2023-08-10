import React from 'react'
import styles from "./page.module.css"
// children means all the children components that is exist in this folder bLOG

const layout = ({children}) => {
  return (
    <div>
        <h1 className={styles.BigTitle}>Hi this is Blog layout</h1>
      {children} 
    </div>
  )
}

export default layout
