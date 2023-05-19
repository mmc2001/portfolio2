import React from 'react'
import styles from '../styles/Timeline.module.css'

export default function timeline() {
  return (
    <div className={styles.contenedor}>
    <h1>Experiencia Laboral</h1>
    <div className={styles.timeline}>
        <ul>
        <li>
            <div className={styles.content}>
            <h3>Eprinsa</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <div className={styles.time}>
            <h4>January 2018</h4>
            </div>
        </li>
        
        <li>
            <div className={styles.content}>
            <h3>Fotógrafo</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <div className={styles.time}>
            <h4>February 2018</h4>
            </div>
        </li>
        
        <li>
            <div className={styles.content}>
            <h3>Ayundate de Instalador de Calefacción y Agua Sanitaria</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <div className={styles.time}>
            <h4>March 2018</h4>
            </div>
        </li>
        <div className={styles.algo}></div>
        </ul>
    </div>
</div>
  )
}
