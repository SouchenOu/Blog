import React from 'react'
import styles from "./page.module.css"
import { useEffect, useState } from 'react'

const Dashboard = () => {
 
      useEffect(() =>{
          const getData = async () => 
          {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                if(!res.ok)
                {
                  //This will activate te closest ''error.js Boundary
                  throw new Error('Failed to fetch data');

                }
              return res.json();
        };
      }, [])
    return (
        <div className={styles.dashboard}>
            Dashboard
          </div>
      )
}

export default Dashboard
