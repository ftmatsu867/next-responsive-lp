import React from 'react'
import styles from "@/app/components/Section5/Section5.module.scss"

const Section5 = () => {
    return (
        <section id='contact' className={styles.container}>
            <span className={styles.span}>Contact</span>
            <h2 className={styles.h2}>Get in touch with us</h2>
            <p className={styles.subTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <form action="#" className={styles.form}>
                <div className={styles.div}>
                    <input placeholder='Name' className={styles.input} type="text" />
                    <input placeholder='Email' className={styles.input} type="email" />
                </div>
                <input placeholder='Subject' className={styles.input2} type="text" />
                <textarea placeholder='Message' className={styles.textarea}></textarea>
                <button className={styles.button}>contact</button>
            </form>
        </section>
    )
}

export default Section5