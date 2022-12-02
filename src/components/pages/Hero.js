import React from 'react';

const Hero = () => {

      return (
        <div className="min-h-screen text-white opacity-90 bg-fixed bg-cover bg-center .max-w-full .h-auto lg:mx-0 bg-no-repeat bg-[url('https://cdn.pixabay.com/photo/2019/11/19/22/24/watch-4638673_960_720.jpg')]">
          <div className='container mx-auto h-full'>
            <div className='flex items-center h-full pt-8'>
              <div className='mt-40 flex-1 flex flex-col items-center'>
                <h1 className='text-4xl leading-[44px] md:text-5xl text-center md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
                  " Só se vê bem com o coração, o essencial é invisível aos olhos "
                </h1>
                <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
                  O Pequeno Príncipe, Antoine de Saint-Exupéry
                </p>
                <a href='/HomeBooks'>
                  <button className=' btn btn-md md:btn-lg transition ease-in-out delay-150 bg-violet-900 hover:-translate-y-1 hover:scale-110 hover:bg-violet-800 duration-300'>
                    Entrar
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>	
      )
    }

export default Hero;
