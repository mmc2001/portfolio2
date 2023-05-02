import React from 'react'
import Link from 'next/link'
/* import AnimatedText from "./AnimatedText" */
import styles from "../../styles/Portada1.module.css"

export default function portada() {
  return (
    <>
      <div className={styles.inicio}>
        <div className={styles.texto}>
          <h1>Bienvenido a mi Portfolio</h1>
          <h2>Hola, soy <span>Desarrollador - Fotógrafo</span> </h2>
          {/* <AnimatedText texts={['Desarrollador', 'Fotógrafo']} /> */}
          <p>
            Estudiante de Ingeniería Informática con especial interés <br/> por el desarrollador frontend y como segunda dedicación la fotografía. <br/>
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
