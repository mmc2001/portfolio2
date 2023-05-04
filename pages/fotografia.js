import React from 'react'
import Layout from '@/components/layout'
import Portada from '@/components/P-Fotografia/portada'
import SobreMi from '@/components/P-Fotografia/sobreMi'
import TrabajosEjemplo from '@/components/P-Fotografia/trabajosEjemplo'
import Servicios from '@/components/P-Fotografia/servicios'


export default function fotografia() {
  return (
    <>
      <Layout 
          title={'Inicio'}
          description={'Portfolio fotográfico, desarrollador frontend y fotógrafo'}
        >  

          <Portada />
          <SobreMi />
          <TrabajosEjemplo/>
          <Servicios />

        </Layout>
    </>
  )
}
