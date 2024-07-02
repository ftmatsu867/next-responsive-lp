"use client"
import React, { useState } from 'react'
import styles from "@/app/components/Header/Header.module.scss"
import AnchorLink from "react-anchor-link-smooth-scroll";
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose=()=>{
    setIsOpen(false)
  }
  return (
    <header className={styles.header}>
      <div className={styles.title}>Bootstrap5</div>
      <nav className={isOpen?styles.openNav:styles.closeNav} onClick={isOpen?handleClose:null}>
        <ul className={styles.ul}>
          <li><AnchorLink onClick={handleClose} offset={150} className={styles.link} href="#home">Home</AnchorLink></li>
          <li><AnchorLink onClick={handleClose} offset={150} className={styles.link} href="#service">Service</AnchorLink></li>
          <li><AnchorLink onClick={handleClose} offset={150} className={styles.link} href="#detail">Detail</AnchorLink></li>
          <li><AnchorLink onClick={handleClose} offset={150} className={styles.link} href="#projects">Projects</AnchorLink></li>
          <li><AnchorLink onClick={handleClose} offset={150} className={styles.link} href="#contact">Contact</AnchorLink></li>
          <button>Join us</button>
        </ul>
      </nav>
      {isOpen ? null : <FontAwesomeIcon icon={faBars} className={styles.menu} onClick={handleOpen} />}
      {isOpen ?  <FontAwesomeIcon icon={faXmark} className={styles.menu} onClick={handleClose} />:null}
      
    </header>
  )
}

export default Header