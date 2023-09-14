import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'

// const motionLink = motion(Link)

const Logo = () => {
  return (
      <div className='flexCenter mt-2'>
          <motion.a href='/' className='w-12 h-12 bg-dark text-light flexCenter rounded-full text-xl font-bold cursor-pointer'
              whileHover={ {
              backgroundColor: [ "#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212" ],
              transition: { duration:3}
              } }
            // whileHover={{
            //     scale: 1.2,
            //     transition: { duration: 1 },
            //   }}
          >MP</motion.a>
    </div>
  )
}

export default Logo