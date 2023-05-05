import React from 'react'
import { useState } from 'react'
/* import sendMail from '../components/sendMail' */
import Image from 'next/image'
import styles from '../styles/Contacto.module.css'

export default function contacto() {

  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const [error, setError] = useState(false);

  const  handleSubmit = async (e) =>{
    e.preventDefault()

    //Validación del formulario
    if([nombre, apellidos, email, asunto, mensaje].includes('')){
        console.log('Hay al menos un campo vacío')
        setError(true)
        return;
    }
    setError(false)
    console.log("holaaa")
    // const datosCliente = {
    //     nombre,
    //     apellidos,
    //     email,
    //     asunto,
    //     mensaje
    // }

    /* await sendMail(datosCliente) */

    //Reinicir el form
    setNombre('')
    setApellidos('')
    setEmail('')
    setAsunto('')
    setMensaje('')
    
}

  return (
    <div className={styles.c2}>
      <div className={styles.container}>
        <div className={styles.columna1}>
            <h2 id="contacto">Contacto</h2>
            <form 
                method="post" 
                action="../pages/api/correo"
                onSubmit={handleSubmit}
                className={styles.formulario}>

                {error && <Error mensaje='Todos los campos son obligatorios'/>}

                <div className={styles.campos}>
                    <label >Nombre</label>
                    <label className={styles.t1}>Apellidos</label>
                </div>
                <div className={styles.campos}>
                    <input className={styles.box1} 
                            type="text" 
                            name="nombre" 
                            placeholder="Nombre" 
                            size="30" 
                            value={nombre}  
                            onChange= {(e) => setNombre(e.target.value)}
                            required>
                    </input>
                    <input type="text" 
                            name="apellidos" 
                            placeholder="Apellidos" 
                            size="30" 
                            value={apellidos} 
                            onChange= {(e) => setApellidos(e.target.value)}
                            required>
                    </input>
                </div>

                <div className={styles.campos}>
                    <label>Correo Electrónico</label>
                    <label className={styles.t2}>Asunto</label>
                </div>
                <div className={styles.campos}>
                    <input type="text" 
                            name="email" 
                            placeholder="Email" 
                            size="30" 
                            value={email} 
                            onChange= {(e) => setEmail(e.target.value)}
                            required>
                    </input>
                    <input type="text" 
                            name="asunto" 
                            placeholder="Asunto" 
                            size="30" 
                            value={asunto} 
                            onChange= {(e) => setAsunto(e.target.value)}
                            required>
                    </input>
                </div>

                <div className={styles.campos}>
                    <label>Mensaje</label>
                </div>
                <div className={styles.campos}>
                    <textarea name="mensaje" 
                            placeholder="Mensaje" 
                            cols="60" 
                            rows="10" 
                            minLength="10" 
                            maxLength="1000" 
                            value={mensaje} 
                            onChange= {(e) => setMensaje(e.target.value)}
                            required>
                    </textarea>
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
