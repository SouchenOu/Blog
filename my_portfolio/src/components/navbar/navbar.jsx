"use client"

import React from 'react'
import Link from 'next/link'
import styles from "./navbar.module.css"
import DarkMode from "../DarkMode/DarkMode"


// This is an array
const links =[
    {
        id: 1,
        title:"Home",
        url: "/",
    },
    {
        id:2,
        title:"Portfolio",
        url:"/portfolio",
    },
    {
        id:3,
        title:"Blog",
        url:"/blog",
    },
    {
        id:4,
        title:"About",
        url:"/About"
    },
    {
        id:5,
        title:"Contact",
        url:"/contact",
    },
    {
        id:6,
        title:"Dashboard",
        url:"/dashboard",
    },
];
const navbar = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">StartNow</Link>
      
      <div className={styles.links}>
        {links.map(function(elem){
          return <Link className={styles.link} key={elem.id} href={elem.url}>{elem.title}</Link>
          
        })}
        <DarkMode />
        <button className={styles.logout}>Logout</button>
      </div>
      
    </div>
  )
}

export default navbar
