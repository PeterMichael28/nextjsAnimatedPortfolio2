import Link from 'next/link';
import React from 'react'
import Logo from './Logo';
import { useRouter } from 'next/router';
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from './Icons';
import { motion } from 'framer-motion';


const Navbar = () => {

    const router = useRouter()
    console.log(router?.pathname)
    const NavLinks = ( { href, title, className=''} ) => (
        <Link href={href} className={`${className} relative  group flex flex-col`}>
            
        <span>{title}</span>
            <span className={`${router?.pathname === href ? 'w-full': 'w-0'} h-[1px] inline-block bg-dark absolute transition-all duration-300 group-hover:w-full left-0 -bottom-0`}>&nbsp;</span>
        </Link>
    )
  return (
      <header className='w-full px-32 py-8 font-medium flexBetween'>
          <nav className='flex items-center justify-center gap-4'>
              <NavLinks href='/' title='Home'/>
              <NavLinks href='/about' title='About'/>
              <NavLinks href='/projects' title='Projects'/>
              <NavLinks href='/articles' title='Articles'/>
          </nav>

       

          <nav className='flexCenter flex-wrap gap-4'>
          <motion.a whileTap={{scale: 0.9}} href='/' target='_blank' className={`socialIconsHover w-6`}><TwitterIcon /></motion.a>
          <motion.a whileTap={{scale: 0.9}} href='/' target='_blank' className={`socialIconsHover w-6`}><GithubIcon /></motion.a>
          <motion.a whileTap={{scale: 0.9}} href='/' target='_blank' className={`socialIconsHover w-6`}><LinkedInIcon /></motion.a>
          <motion.a whileTap={{scale: 0.9}} href='/' target='_blank' className={`socialIconsHover w-6`}><PinterestIcon /></motion.a>
          <motion.a whileTap={{scale: 0.9}} href='/' target='_blank' className={`socialIconsHover w-6`}><DribbbleIcon /></motion.a>
             
          </nav>

          {/* logo */}
          <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
          <Logo />
          </div>
    </header>
  )
}

export default Navbar