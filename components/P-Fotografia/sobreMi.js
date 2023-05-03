import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function sobreMi() {
  return (
    <>
      {/* <h1>Los mejores momentos de la vida son aquellos <span className='text-center font-bold'>que deberían quedar inmortalizados para el recuerdo</span></h1>
      <div classname="grid grid-cols-2 gap-4">
        <div>
            <Image src="/img/foto-perfil.png" width={572} height={382} alt='imagen principal'/>
        </div>
        <div>
            <p>
                Lorem ipsum dolor sit amet. Et eaque Quis aut voluptas culpa ut velit earum in 
                consequatur suscipit quo deleniti quos et unde explicabo sed laboriosam repudiandae. 
                Est accusantium repudiandae et consequatur eligendi est autem libero.
            </p>
        </div>
        <Link href={"/#contacto2"}><button >Contactar</button></Link>
      </div> */}

        <div className="py-16 bg-gradient-to-br from-green-50 to-cyan-100">  
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="mb-12 space-y-2 text-center">
                <span className="block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-green-100 text-green-600">Blog</span>
                <h2 className="text-2xl text-cyan-900 font-bold md:text-4xl">Sharing is Caring</h2>
                <p className="lg:w-6/12 lg:mx-auto">Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum officia aliquid explicabo? Excepturi, voluptate?</p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
                <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                <img src="https://tailus.io/sources/blocks/twocards/preview/images/woman.jpg" alt="art cover" loading="lazy" width="1000" height="667" className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"/>
                <div className="sm:w-7/12 pl-0 p-5">
                    <div className="space-y-2">
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold text-cyan-900">Provident de illo eveniet commodi fuga fugiat laboriosam expedita.</h4>
                        <p className="text-gray-600">Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque! Temporibus...</p>
                    </div>
                    <a href="www.tailus.io" className="block w-max text-cyan-600">Read more</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}
