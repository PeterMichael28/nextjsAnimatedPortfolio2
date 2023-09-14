import { motion } from 'framer-motion';
import React from 'react'


const variant = {
    initial: {
        opacity: 1
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.2
        }
    }
}

const singleVariant = {
    initial: {
        opacity: 0,
        y: 50
    },
    animate: {
        opacity: 1,
        y:0,
        transition: {
            duration: 1
        }
    }
}
// initial={{opacity: 0, y: 50}} animate={{opacity: 1,  y:0,}} transition={{delay: 0.5 * i, duration: 1}}

const AnimatedText = ({text, className=''}) => {
  return (
      <div className='w-full mx-auto py-2 flexCenter text-center overflow-hidden'>
          <motion.h1 variants={variant} initial='initial' animate='animate' className={`${className} inline-block w-full text-dark font-bold capitalize text-5xl `}>{text.split(' ').map((w,i) => (
              <motion.span variants={singleVariant}   key={w+i} className='inline-block'>{w }&nbsp;</motion.span>
          )) }</motion.h1>
          
    </div>
  )
}

export default AnimatedText