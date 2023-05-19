import Portada from '@/components/portada'
import SobreMi from '@/components/sobreMi'
import Timeline from './timeline'
import Contacto from '@/components/contacto'


export default function Layout (){
  return (
    <>
      <Portada />
      <SobreMi />
      <Timeline />
      <Contacto />
    </>
  )
}

