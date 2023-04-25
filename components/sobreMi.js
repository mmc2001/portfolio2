import React from 'react'
import styles from "../styles/SobreMi.module.css"
import Image from 'next/image'

export default function sobreMi() {
  return (
    <>
      <div className={styles.c1}>
        <h2 id='sobre-mi'>Sobre <span>Mi</span></h2>
        <div className={styles.card}>
            <div className={styles.container}>
            <div className={styles.columna1}>
                <Image className={styles.foto} src="/img/foto-perfil.png" width={614} height={711} alt='imagen logotipo' />
            </div>
            <div className={styles.columna2}>
                <h3>Moisés Moyano Cejudo</h3>
                <h4>Desarrollador <span>y</span> Fotógrafo</h4>
                <p>
                Soy Moisés estudiante de 4º año del grado de Ingeniería Informática en la Universidad de Córdoba y uno de los coordinadores del Aula del Software Libre (departamento de RRSS y Mercadotecnia). 
                Tengo especial interés por el aprendizaje como desarrollador frontend y como segunda dedicación la fotografía. 
                <br/><br/>
                Me gusta estar en constante aprendizaje sobre todo tipo de nuevas tecnologías y herramientas que me permitan desarrollarme profesionalmente,  
                en especial las que están relacionadas con el diseño y desarrollo web, fotografía y edición.
                </p>
                <h4>Conocimientos</h4>
                
                <div style={{ display: 'flex' }}>
                  <div>
                      <ul style={{ listStyle: 'none', marginRight: "16px"}}>
                      <li>C y C++</li>
                      <li>HTML5/CSS3</li>
                      <li>React / Next JS</li>
                      <li>Wordpress</li>
                      <li>Cypress</li>
                      <li>Github</li>
                      </ul>
                  </div>
                  <div>
                      <ul style={{ listStyle: 'none', marginRight: "56px"}}>
                      <li>Photoshop</li>
                      <li>Lightroom</li>
                      <li>Figma</li>
                      <li>Scrum</li>
                      <li>Notion</li>
                      <li>Trello</li>
                      </ul>
                  </div>
                  <div>
                      <Image src="/img/astronauta2.svg" width={262} height={168} alt='imagen logotipo'/>
                  </div>
                </div>

            </div>
            </div>
        </div>
      </div>
    </>
  )
}
