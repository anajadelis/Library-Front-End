import React from 'react';

const Book = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>
        <a href={item.pdf} target='_black'><img className=' h-96 object-cover md:w-50 rounded-2xl' src={item.image} alt='' /></a>
      </div>
      <p className='capitalize text-violet-500 text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.title}</h3>
      <p className='text-base max-w-md'>{item.synopsis}</p>
    </div>
  );
};

export default Book;
