import React from 'react';

// import components
import Books from '../content/Books';

const HomeBook = () => {
  return (
    <section id='portfolio' className='section bg-primary min-h-[1400px]'>
      <div className='container mx-auto pt-20'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            Bookstan
          </h2>
          <p className='subtitle'>
            Que tal se divertir um pouco lendo alguns livros?? Aqui está um portfólio de livros incríveis para você se deliciar. Espero que aproveite!!
          </p>
        </div>
        <Books />
      </div>
    </section>
  );
};

export default HomeBook;