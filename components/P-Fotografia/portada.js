import React from 'react'
import Link from 'next/link'
import styles from "../../styles/Portada2.module.css"

export default function portada() {
  return (
    <>
      <div className={styles.inicio}>
        <div className={styles.texto}>
          <h1>Bienvenido a mi</h1>
          <span>Portfolio</span>
        </div>
        <div className={styles.botones}>
          <Link href={"/#contacto2"}><button className={styles.button1}>Contactar</button></Link>
          <Link href={"/#servicios"}><button className={styles.button2}>Servicios</button></Link>
        </div>
      </div>
    </>
  )
}
