import React from 'react'
import styles from "./page.module.css"
import Image from "next/image" 
import Button from "../../../components/button/Button"
import img from "../ill.jpeg"
const Category = ({params}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.CategoryTitle}>{params.category}</h1>
      <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>CREATIVE DESIGN</h1>
            <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <Button text="See more" url="#"/>
          </div>
          <div className={styles.imgcontainer}>
            <Image className={styles.img} src={img} />
          </div>
      </div>
      <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>CREATIVE DESIGN</h1>
            <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <Button text="See more" url="#"/>
          </div>
          <div className={styles.imgcontainer}>
            <Image className={styles.img} src={img} />
          </div>
      </div>
      <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>CREATIVE DESIGN</h1>
            <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <Button text="See more" url="#"/>
          </div>
          <div className={styles.imgcontainer}>
            <Image className={styles.img} src={img} />
          </div>
      </div>
    </div>
  )
}

export default Category
