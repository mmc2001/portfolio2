import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
/* import AnimatedText from "./AnimatedText" */
import styles from "../styles/Portada.module.css"

export default function portada() {
  return (
    <>
      <div className={styles.inicio}>
        <div>
          <Image className={styles.imagen1} src="/img/astronauta.png" width={1000} height={1000} alt='imagen astronauta'/>
        </div>
        <div className={styles.container}>
          <div className={styles.texto}>
            <h1>Bienvenido a mi Portfolio</h1>
            <h2>Hola, soy <span>Desarrollador - Fotógrafo</span></h2>
            {/* <h2>Hola, soy <span class="text-type"></span> </h2> */}
            {/* < script  src =" https://unpkg.com/typed.js@2.0.15/dist/typed.umd.js " > </ script >
            < script  src =" ./animacion.js " > </ script > */}
            {/* <AnimatedText texts={['Desarrollador', 'Fotógrafo']} /> */}
            <p>
              Estudiante de Ingeniería Informática con especial interés por el desarrollador frontend y como segunda dedicación la fotografía.
              Encontrarás información sobre mi y algunos trabajos y servicios que realizo como fotógrafo.
            </p>
          </div>
          <div className={styles.botones}>
            <Link href={"#sobre-mi"}><button className={styles.button1}>Sobre Mi</button></Link>
            <Link href={"#contacto"}><button className={styles.button2}>Contactar</button></Link>
          </div>
        </div> 
        <div>
          <Image className={styles.imagen2} src="/img/astronauta.png" width={1000} height={1000} alt='imagen astronauta'/>
        </div>
      </div>
    </>
  )
}
