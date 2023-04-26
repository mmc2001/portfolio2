import React, { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from "../styles/Footer.module.css"

export default function Footer() {

  const router = useRouter()

  return (
    <div>
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <nav className={styles.navegacion} >
                    <Link href="/">Inicio</Link>

                    <Link href="#sobre-mi">Sobre mi</Link>

                    <Link href="#contacto">Contacto</Link>
                                        
                    <Link href="/fotografia">Fotógrafo</Link>
                </nav>

                <Link href={'/'}>
                        <Image className={styles.logo} src="/img/logo2.png" width={80} height={40} alt='imagen logotipo' />
                </Link>
            </div>
            </header>
    </div>
  )
}