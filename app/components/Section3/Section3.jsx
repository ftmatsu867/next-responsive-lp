import React from 'react'
import styles from "@/app/components/Section3/Section3.module.scss"
import Image from 'next/image'
import { ItemData } from '@/app/components/Section3/ItemList/ItemData'
import Item from '@/app/components/Section3/ItemList/Item'

const Section3 = () => {
    return (
        <section id='detail' className={styles.container}>
            <div className={styles.imageArea}>
                <Image src={"/human.jpg"} fill style={{ objectFit: "cover" }} alt='image' />
            </div>
            <div className={styles.rightArea}>
                <span className={styles.span}>Why choose us?</span>
                <h2 className={styles.h2}>Create your idea</h2>
                <p className={styles.rightDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <ul className={styles.ul}>
                    {ItemData.map((item) => {
                        return (
                            <Item key={item.src} item={item} />
                        )
                    })}

                </ul>
            </div>
        </section>
    )
}

export default Section3