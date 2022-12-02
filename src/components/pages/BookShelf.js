import React from 'react';

// import bookShelf data
import { bookShelf } from '../../data';

const BookShelf = () => {
  return (
    <section id='hobbies' className='section bg-secondary'>
      <div className='container mx-auto pt-20'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-hobbies relative before:absolute before:opacity-20 before:-top-[13rem] before:-left-3/4  before:hidden before:lg:block'>
            My Hobbies
          </h2>
          <p className='subtitle'>
            Estudar é muito importante, mas o lazer é crucial no equilíbrio da vida, sendo ele também uma forma de abstração de conteúdo...
          </p>
        </div>
        <div className='grid lg:grid-cols-3 gap-8'>
          {bookShelf.map((hobby, index) => {
            const { icon, name, description } = hobby;
            return (
              <div className='bg-tertiary p-5 rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer' key={index}>
                <div className='text-violet-500 rounded-sm w-12 h-10 flex justify-center items-center mb-24 text-[28px]'>
                  {icon}
                </div>
                <h4 className='text-xl font-medium mb-2'>{name}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BookShelf;
