import React from 'react'
import { Round } from './Icons';
import Link from 'next/link';

const Hireme = () => {
  return (
      <div className='fixed left-4 bottom-4 flexCenter overflow-hidden'>
          <div className='w-48 h-auto flexCenter relative '>
            <Round className='fill-dark animate-spin-slow '/>
              <Link href='/' className='flexCenter absolute left-1/2
               top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-dark rounded-full font-semibold w-20 h-20 hover:bg-light hover:text-dark transition-all duration-300'>Hire Me</Link>
          </div>
    </div>
  )
}

export default Hireme