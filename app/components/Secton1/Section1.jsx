import React from 'react'
import styles from "@/app/components/Secton1/Section1.module.scss"

const Section1 = () => {
  return (
    <section id='home' className={styles.container}>
        <h1 className={styles.title}>Bootstrap5 Page</h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nobis pariatur nisi in laboriosam vero quos facilis itaque. Veniam, fugiat?</p>
        <div className={styles.buttonArea}>
            <button className={styles.button1}>Go Page</button>
            <button className={styles.button2}>Contact</button>
        </div>
    </section>
  )
}

export default Section1