import React from 'react'
import styles from "./page.module.css";
import Link from "next/link"
import Image from "next/image"
import img1 from "./bl1.jpeg"



/// Fetching data ---> server side**********************
async function getData()
{
    //should wait until fetch finishing bring data
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!res.ok){
        //This will activate te closest ''error.js Boundary
        throw new Error('Failed to fetch data');

    }
    return res.json();
}
const Blog = async () => {
    const data = await getData();
    // const data = [
    //     {
    //         id :1,
    //         title : "title1",
    //     },
    //     {
    //         id: 2,
    //         title: "title2",
    //     },
    //     {
    //         id: 3 ,
    //         title: "title3",
    //     },
        
    // ]
  return (
    <div className={styles.container}>
        {data.map(function(elem){
            return (<Link href="blog/MiniBlog" className={styles.link} key={elem.id}>
            <div className={styles.imageContainer}>
                <Image src={img1} alt=''/>
            </div>
            <div className={styles.content}>
                <h1 className={styles.titre}>{elem.title}</h1>
                <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
       </Link >)
        })}
       
       {/* <Link href="#" className={styles.link}>
            <div className={styles.imageContainer}>
                <Image src={img1} alt=''/>
            </div>
            <div className={styles.content}>
                <h1 className={styles.titre}>Lipsum generator</h1>
                <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
       </Link >
       <Link href="#" className={styles.link}>
            <div className={styles.imageContainer}>
                <Image src={img1} alt=''/>
            </div>
            <div className={styles.content}>
                <h1 className={styles.titre}>Lipsum generator</h1>
                <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
       </Link > */}
    </div>
  )
}

export default Blog
