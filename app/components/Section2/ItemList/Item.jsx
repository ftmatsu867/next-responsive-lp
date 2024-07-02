import React from 'react'
import styles from "@/app/components/Section2/ItemList/ItemList.module.scss"

const Item = ({item}) => {
  return (
    <li className={styles.li}>
      {item.src}
      <h3 className={styles.h3}>Service</h3>
      <p className={styles.itemDescription}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quod!</p>
    </li>
  )
}

export default Item