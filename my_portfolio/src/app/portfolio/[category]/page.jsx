import React from 'react'


import styles from "./page.module.css"
import Image from "next/image" 
import Button from "../../../components/button/Button"
import img1 from "../ill.jpeg"
// import img2 from "../po.jpeg"
// import img3 from "../lk.jpeg"
import {items} from "./data"
import {notFound} from "next/navigation" 

//**************Fetshing client side

function getData(cat)
{ 
    const data = items[cat]

    if(data)
    {
      return data
    }
    return notFound();
}

const Category = ({params}) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.CategoryTitle}>{params.category}</h1>

      
    {data.map((elem) => (
          
          <div className={styles.item} key={elem.id}>
              <div className={styles.content}>
                <h1 className={styles.title}>{elem.title}</h1>
                <p className={styles.desc}>{elem.desc}</p>
                <Button text="See more" url="#"/>
              </div>
             <div className={styles.imgcontainer}>
                <Image alt="" className={styles.img} src={img1} />
              </div>
          </div>
        
    ))}
      
      {/* <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>CREATIVE DESIGN</h1>
            <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <Button text="See more" url="#"/>
          </div>
          <div className={styles.imgcontainer}>
            <Image className={styles.img} src={img2} />
          </div>
      </div>
      <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>CREATIVE DESIGN</h1>
            <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <Button text="See more" url="#"/>
          </div>
          <div className={styles.imgcontainer}>
            <Image className={styles.img} src={img3} />
          </div>
      </div> */}
    </div>
  )
}

export default Category
