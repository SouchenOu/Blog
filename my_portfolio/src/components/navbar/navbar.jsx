"use client"

import React from 'react'
import Link from 'next/link'


// This is an array
const links =[
    {
        id: 1,
        title:"home",
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
        url:"/about"
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
    <div>
      <Link href="/">souchen</Link>
      <div>
      {links.map(function(elem){
        return <Link key={elem.id} href={elem.url}>{elem.title}</Link>
      })}
      </div>
    </div>
  )
}

export default navbar
