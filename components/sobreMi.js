import React from 'react'
import Image from 'next/image'
import styles from "../styles/SobreMi.module.css"

export default function sobreMi() {
  return (
      <div className={styles.container} id='sobre-mi'>
        <h2>Sobre <span>Mi</span></h2>
        <div className={styles.card}>
          <Image className={styles.foto} src="/img/moises.jpg" width={614} height={711} alt='imagen logotipo' />
          <div className={styles.informacion}>
            <div className={styles.titulo}>
              <h3>Moisés Moyano Cejudo</h3>
              <h4>Desarrollador <span>y</span> Fotógrafo</h4>
            </div>
            <div className={styles.parrafo}>
              <p>
                Soy Moisés estudiante de 4º año del grado de Ingeniería Informática en la Universidad de Córdoba y uno de los coordinadores del Aula del Software Libre (departamento de RRSS y Mercadotecnia). 
                Tengo especial interés por el aprendizaje como desarrollador frontend y como segunda dedicación la fotografía. 
              </p>
              <p>
                Me gusta estar en constante aprendizaje sobre todo tipo de nuevas tecnologías y herramientas que me permitan desarrollarme profesionalmente,  
                en especial las que están relacionadas con el diseño y desarrollo web, fotografía y edición.
              </p>
            </div>
            <div className={styles.conocimientos}>
              <h4>Conocimientos</h4>
              <div className={styles.columnas}>
                <div className={styles.columna1}>
                  <ul>
                    <li>C y C++</li>
                    <li>HTML5/CSS3</li>
                    <li>React / Next JS</li>
                    <li>Wordpress</li>
                    <li>Cypress</li>
                    <li>Github</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>Photoshop</li>
                    <li>Lightroom</li>
                    <li>Figma</li>
                    <li>Scrum</li>
                    <li>Notion</li>
                    <li>Trello</li>
                  </ul>
                </div>
                <div className={styles.imagen}>
                  <Image src="/img/astronauta2.svg" width={262} height={168} alt='imagen logotipo'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

