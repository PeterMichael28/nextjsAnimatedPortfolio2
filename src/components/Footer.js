import React from 'react'
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
  return (
      <footer className='w-full border-t-2 border-dark font-medium text-lg '>
          <Layout className='py-8 flexBetween '>
              <span>{ new Date().getFullYear() } &copy; All RIghts Reserved</span>
              
              <div className='flexCenter'>
                  Build with <span className='text-primary text-2xl px-2'>&#9825;</span> by &nbsp;
              <Link href='https://michaelpeter.vercel.app' className='font-bold underline underline-offset-4' target='_blank'>Michael</Link>
              </div>
              <Link href='/'>Say hello</Link>
          </Layout>
    </footer>
  )
}

export default Footer