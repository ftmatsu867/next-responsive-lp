import React from 'react'
import styles from "@/app/components/Section4/Item/Item.module.scss"
import Image from 'next/image'

const Item = ({item}) => {
  return (
    <li className={styles.li}>
    <Image src={item.src} fill style={{objectFit:"cover"}}/>
   </li>
  )
}

export default Item