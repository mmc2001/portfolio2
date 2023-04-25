import Layout from '../components/layout'
import Portada from '@/components/portada'
import SobreMi from '@/components/sobreMi'
import Contacto from '@/components/contacto'

export default function Home() {

  return (
    <>
        <Layout 
          title={'Inicio'}
          description={'Portfolio, desarrollador frontend y fotógrafo'}
        >  

          <Portada />
          <SobreMi />
          <Contacto />
          
        </Layout>
    </>
  )
}
