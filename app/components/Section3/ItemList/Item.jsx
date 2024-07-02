import React from 'react'
import styles from "@/app/components/Section3/ItemList/Item.module.scss"

const Item = ({ item }) => {
    return (
        <li className={styles.li}>
            {item.src}
            <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDescription}>{item.script}</p>
            </div>
        </li>
    )
}

export default Item