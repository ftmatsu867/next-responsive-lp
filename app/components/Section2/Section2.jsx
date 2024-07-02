import React from 'react'
import styles from "@/app/components/Section2/Section2.module.scss"
import Item from '@/app/components/Section2/ItemList/Item'
import { ItemData } from '@/app/components/Section2/ItemList/ItemData'

const Section2 = () => {
    return (
        <section id='service' className={styles.container}>
            <span className={styles.span}>services</span>
            <h2 className={styles.h2}>Services</h2>
            <p className={styles.subTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <ul className={styles.ul}>
                {ItemData.map((item) => {
                    return (
                        <Item key={item.src} item={item} />
                    )
                })}
            </ul>
        </section>
    )
}

export default Section2