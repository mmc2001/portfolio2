import React, { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from "../styles/Header.module.css"

export default function Header() {

  const router = useRouter()

  return (
    <div>
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Link href={'/'}>
                        <Image className={styles.logo} src="/img/logo2.png" width={150} height={40} alt='imagen logotipo' />
                </Link>

                {router.pathname != '/fotografia' ? (

                  <nav className={styles.navegacion1} >
                      <Link className={ router.pathname === '/' ? styles.active : ''} href="/">Inicio</Link>

                      <Link className={ router.pathname === '/sobre-mi' ? styles.active : ''} href="#sobre-mi">Sobre mi</Link>

                      <Link className={ router.pathname === '/contacto' ? styles.active : ''} href="#contacto">Contacto</Link>
                                          
                      <Link className={ router.pathname === '/fotografia' ? styles.active : ''} href="/fotografia">Fotógrafo</Link>
                  </nav>
                 ) : (
                  <nav className={styles.navegacion2} >
                      <Link className={ router.pathname === '/fotografia' ? styles.active : ''} href="/fotografia">Inicio</Link>

                      <Link className={ router.pathname === '/servicios' ? styles.active : ''} href="#servicios">Servicios</Link>

                      <Link className={ router.pathname === '/contacto' ? styles.active : ''} href="#contacto">Contacto</Link>
                                          
                      <Link className={ router.pathname === '/' ? styles.active : ''} href="/">Sobre mi</Link>
                  </nav>
                )}
            </div>
        </header>
    </div>
  )
}
