import React from 'react'
import Image from 'next/image'
import styles from '../styles/Contacto.module.css'

export default function contacto() {
  return (
    <div className={styles.c2}>
      <div className={styles.container}>
        <div className={styles.columna1}>
            <h2 id="contacto">Contacto</h2>
            <form className={styles.formulario}>
                <div className={styles.campos}>
                    <label >Nombre</label>
                    <label className={styles.t1}>Apellidos</label>
                </div>
                <div className={styles.campos}>
                    <input className={styles.box1} type="text" name="nombre" placeholder="Nombre" size="30" /* value={nombre} */ required></input>
                    <input type="text" name="apellidos" placeholder="Apellidos" size="30" /* value={apellidos} */ required></input>
                </div>

                <div className={styles.campos}>
                    <label>Correo Electrónico</label>
                    <label className={styles.t2}>Asunto</label>
                </div>
                <div className={styles.campos}>
                    <input type="text" name="email" placeholder="Email" size="30" /* value={email} */ required></input>
                    <input type="text" name="asunto" placeholder="Asunto" size="30" /* value={asunto} */ required></input>
                </div>

                <div className={styles.campos}>
                    <label>Mensaje</label>
                </div>
                <div className={styles.campos}>
                    <textarea name="mensaje" placeholder="Mensaje" cols="60" rows="10" minlength="10" maxlength="1000" /* value={mensaje} */ required></textarea>
                </div>

                <input className={styles.submit} type="submit" name="enviar" /* value={enviar} */></input>
            </form>    
        </div>

        <div className={styles.columna2}>
            <Image className={styles.imagen} src="/img/astronauta3.svg" width={351.07} height={679.75} alt='imagen astronauta3'/>
        </div>
      </div>
    </div>
  )
}
