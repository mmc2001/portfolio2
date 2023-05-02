import Layout from '../components/layout'
import Portada from '@/components/P-Personal/portada'
import SobreMi from '@/components/P-Personal/sobreMi'
import Contacto from '@/components/P-Personal/contacto'

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
