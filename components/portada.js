import React from 'react'
import Link from 'next/link'
import styles from "../styles/Portada.module.css"

export default function portada() {
  return (
    <>
      <div className={styles.inicio}>
        <div className={styles.texto}>
          <h1>Bienvenido a mi Portfolio</h1>
          <h2>Hola, soy Moisés</h2>
          <br/>
          <span>Desarrollador</span>
          <span>Fotógrafo</span>

          <p>
            Estudiante de Ingeniería Informática con especial interés por el desarrollador frontend y como segunda dedicación la fotografía. <br/>
            Encontrarás información sobre mi y algunos trabajos y servicios que realizo como fotógrafo.
          </p>
        </div>
        <div className={styles.botones}>
          <Link href={"/fotografia"}><button className={styles.button1}>Fotógrafo</button></Link>
          <Link href={"/#contacto"}><button className={styles.button2}>Contactar</button></Link>
        </div>
      </div>
    </>
  )
}
