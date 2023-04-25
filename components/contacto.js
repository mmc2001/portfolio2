import React from 'react'
import Image from 'next/image'
import styles from '../styles/Contacto.module.css'

export default function contacto() {
  return (
    <div className={styles.c2}>
      <div className={styles.container}>
        <div className={styles.columna1}>
            <h2>Contacto</h2>
            <div className={styles.container}>
                <div className={styles.columna3}> 
                    <h3>Nombre</h3>
                    <input className={styles.box1} type="text" name="Nombre" placeholder="Nombre" size="30" required></input>
                </div>
                <div className={styles.columna4}>
                    <h3>Apellidos</h3>
                    <input type="text" name="Apellidos" placeholder="Apellidos" size="30" required></input>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.columna5}>
                    <h3>Correo Electrónico</h3>
                    <input type="text" name="Email" placeholder="Email" size="30" required></input>
                </div>
                <div className={styles.columna6}>
                    <h3>Asunto</h3>
                    <input type="text" name="Asunto" placeholder="Asunto" size="30" required></input>
                </div>
            </div>
            <div>
                <h3>Mensaje</h3>
                <textarea name="Mensaje" placeholder="Mensaje" cols="60" rows="10" minlength="10" maxlength="1000" required></textarea>
            </div>

            <input className={styles.submit} type="submit" name="Enviar" value="Enviar"></input>

        </div>

        <div className={styles.columna2}>
            <Image className={styles.imagen} src="/img/astronauta3.svg" width={351.07} height={679.75} alt='imagen astronauta3'/>
        </div>
      </div>
    </div>
  )
}
