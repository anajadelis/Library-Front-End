import React from 'react';

// import img
import Image from '../../assets/img/about.png';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24 pt-20'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Library Studio Team
              </h2>
              <p className='mb-4 text-violet-500'>
                Estudantes da Universidade Católica de Pernambuco
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>

                Olá! Somos Ana Jade, Bruna, Higo, Letícia, Samara e Stephanie. Atualmente estudantes do 3º período do curso Sistemas para Internet, apaixonados por leitura.
                <br/><br/>
                Visando democratizar o acesso à leitura, decidimos criar o Library Studio (também justificativa para o nosso projeto integrador do período, haha), onde possamos conectar pessoas e idéias, através dos livros ❤ Sinta-se à vontade para entrar em contato conosco!
                <br/><br/>
  
              </p>
            </div>
            <a href='/contact'>
              <button className='btn btn-md md:btn-lg transition ease-in-out delay-150 bg-violet-900 hover:-translate-y-1 hover:scale-110 hover:bg-violet-800 duration-300'>
                Contact me
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
