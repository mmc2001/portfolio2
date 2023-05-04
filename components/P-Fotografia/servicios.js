import React from 'react'

export default function servicios() {
  return (
    
    <>
        <div className="mt-12 grid place-items-center gap-2">
            <h1 className="capitalize text-6xl font-extrabold">Servicios</h1>
        </div>
        <div className="m-8 grid grid-cols-4 gap-1 ">
            <div className="col-span-1 md:col-span-1' bg-purple-400" >
                <div className="mx-auto overflow-hidden relative justify-end  cursor-pointer capitalize flex flex-col rounded-md bg-red-500 w-72 h-96 z-50 object-cover text-white">
                    <img src="https://images.unsplash.com/photo-1520975916090-3105956dac38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="desktop" />
                    <div className="absolute p-3 flex flex-col">
                        <span>Sesiones</span>
                    </div>
                </div>
            </div>

            <div className="col-span-1 md:col-span-1' bg-purple-400" >
                <div className="mx-auto overflow-hidden relative justify-end  cursor-pointer capitalize flex flex-col rounded-md bg-red-500 w-72 h-96 z-50 object-cover text-white">
                    <img src="https://images.unsplash.com/photo-1520975916090-3105956dac38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="desktop" />
                    <div className="absolute p-3 flex flex-col">
                        <span>Eventos</span>
                    </div>
                </div>
            </div>

            <div className="col-span-1 md:col-span-1' bg-purple-400" >
                <div className="mx-auto overflow-hidden relative justify-end  cursor-pointer capitalize flex flex-col rounded-md bg-red-500 w-72 h-96 z-50 object-cover text-white">
                    <img src="https://images.unsplash.com/photo-1520975916090-3105956dac38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="desktop" />
                    <div className="absolute p-3 flex flex-col">
                        <span>Graduaciones</span>
                    </div>
                </div>
            </div>

            <div className="col-span-1 md:col-span-1' bg-purple-400" >
                <div className="mx-auto overflow-hidden relative justify-end  cursor-pointer capitalize flex flex-col rounded-md w-72 h-96 z-50 object-cover text-white">
                    <img src="https://images.unsplash.com/photo-1520975916090-3105956dac38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="desktop" />
                    <div className="absolute p-3 flex flex-col">
                        <span>Deporte</span>
                    </div>
                </div>
            </div>

        </div>
    
    </>
  )
}
