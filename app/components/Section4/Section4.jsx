import React from 'react'
import styles from "@/app/components/Section4/Section4.module.scss"
import Item from '@/app/components/Section4/Item/Item'
import { ItemData } from '@/app/components/Section4/Item/ItemData'
import Image from 'next/image'

const Section4 = () => {
    return (
        <section id='projects' className={styles.container}>
            <span className={styles.span}>Projects</span>
            <h2 className={styles.h2}>Projects</h2>
            <p className={styles.subTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <ul className={styles.ul}>
                {ItemData.map((item) => {
                    return (
                        <Item item={item} />
                    )
                })}
            </ul>
        </section>
    )
}

export default Section4