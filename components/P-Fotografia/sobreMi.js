import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function sobreMi() {
  return (
    <>

        <h1 className="pt-40 pr-10 md:px-20 sm:px-14 lg:flex justify-center text-6xl ">Los mejores momentos de la vida son aquellos</h1>
        <span className='py-8 pl-80 lg:flex justify-center text-6xl font-bold'> que deberían quedar inmortalizados para el recuerdo</span>

        <div className="flex items-center p-10 w-full h-full bg-white">
            <div className="border-t pt-10 grid grid-cols-2 gap-8">
                <div className="flex flex-col justify-start">
                    <div className="flex flex-col w-full object-cover h-4/6 justify-items-start rounded-lg overflow-hidden">
                        <img className="w-full h-full object-cover" src='https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' alt='nike shoes' />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col gap-4">
                        <h1 className="capitalize text-6xl font-extrabold">Nuestro Trabajo</h1>
                        <h2 className="text-3xl">¿Qué hacemos?</h2>
                        <p className="xl:text-4xl text-gray-500	">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatibus voluptatum nisi maxime obcaecati impedit? Ratione error eum qui quidem? Veniam
                            accusamus ea repudiandae itaque, explicabo quidem perspiciatis. Culpa, asperiores deserunt.
                        </p>
                        <p className="xl:text-4xl text-gray-500	">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatibus voluptatum nisi maxime obcaecati impedit? Ratione error eum qui quidem? Veniam
                            accusamus ea repudiandae itaque, explicabo quidem perspiciatis. Culpa, asperiores deserunt.
                        </p>
                        <Link className="bg-azul mt-10 px-5 py-3 text-gray-700 rounded-lg w-1/5 text-center" href={"/#contacto2"}><button >Contactar</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
