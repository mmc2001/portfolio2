import React from 'react'
import Layout from '@/components/layout'
import Portada from '@/components/P-Fotografia/portada'
import SobreMi from '@/components/P-Fotografia/sobreMi'


export default function fotografia() {
  return (
    <>
      <Layout 
          title={'Inicio'}
          description={'Portfolio fotográfico, desarrollador frontend y fotógrafo'}
        >  

          <Portada />
          
          <SobreMi />
          <h1 className="text-indigo-600 text-6xl font-bold uppercase">Holaaaaa</h1>
        </Layout>
    </>
  )
}
