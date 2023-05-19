import React from 'react'
import { useState } from 'react'
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
    /* console.log("Se ejecuta la función")
    const datosCliente = {
         nombre,
         apellidos,
         email,
         asunto,
         mensaje
    }

    console.log(`Nombre:  ${datosCliente.nombre}`)

    await sendEmail(datosCliente) */

    //Reinicir el form
    setNombre('')
    setApellidos('')
    setEmail('')
    setAsunto('')
    setMensaje('')
    
  }

  return (
    <div className={styles.contenedor} id="contacto">
        <h2>Contacto</h2>
        <div className={styles.contenido}>
            <form 
                action="https://formsubmit.co/7ee4f70532c1d92a17289fe4132502ad" 
                method="POST"
                className={styles.formulario}>
                <div>
                    <div className={styles.filas}> 
                        <h3 className={styles.separacion2}>Nombre</h3>
                        <h3>Apellidos</h3>
                    </div>

                    <div className={styles.filas}> 
                        <input type="text" 
                        name="nombre" 
                        placeholder="Nombre" 
                        size="30" 
                        value={nombre} 
                        onChange= {(e) => setNombre(e.target.value)}
                        required
                        className={styles.campo1}>
                        </input>
                        <input type="text" 
                        name="apellidos" 
                        placeholder="Apellidos" 
                        size="30" 
                        value={apellidos} 
                        onChange= {(e) => setApellidos(e.target.value)}
                        required
                        className={styles.campo2}>
                        </input>
                    </div>

                    <div className={styles.filas}> 
                        <h3 className={styles.separacion1}>Correo Electrónico</h3>
                        <h3>Asunto</h3>
                    </div>

                    <div className={styles.filas}> 
                        <input type="email" 
                        name="email" 
                        placeholder="Email" 
                        size="30" 
                        value={email} 
                        onChange= {(e) => setEmail(e.target.value)}
                        required
                        className={styles.campo2}>
                        </input>
                        <input type="text" 
                        name="asunto" 
                        placeholder="Asunto" 
                        size="30" 
                        value={asunto} 
                        onChange= {(e) => setAsunto(e.target.value)}
                        required
                        className={styles.campo1}>
                        </input>
                    </div>

                    <div className={styles.filas}> 
                        <h3>Mensaje</h3>
                    </div>

                    <div className={styles.filas}> 
                        <textarea type="text" 
                            name="mensaje" 
                            placeholder="Mensaje" 
                            cols="80" 
                            rows="10" 
                            minLength="10" 
                            maxLength="1000" 
                            value={mensaje} 
                            onChange= {(e) => setMensaje(e.target.value)}
                            required>
                        </textarea>
                    </div>
                </div>
                <div className={styles.boton}>
                    <input className={styles.submit} type="submit" name="enviar" onSubmit={handleSubmit}></input>
                </div>
                <input type="hidden" name="_next" value="http://localhost:3000"/>
                <input type="hidden" name="_captcha" value="false"></input>
                <input type="hidden" name="_template" value="box"></input>

            </form>  
            <div className={styles.imagen}>
                <Image src="/img/astronauta3.svg" width={351.07} height={679.75} alt='imagen astronauta3'/>
            </div>
        </div>
    </div>
  )
}
