import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout';
import img from '../../public/images/profile/developer-pic-1.png'
import img2 from '../../public/images/svgs/miscellaneous_icons_1.svg'
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import Hireme from '@/components/Hireme';




const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Project</title>
        <meta name="description" content="my portfolio home page" />
        
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen '>
        <Layout className='pt-0'>
          <div className='flexBetween w-full'>
    {/* image container */}
            <div className='md:w-1/2 w-full'>
              <Image src={img} className='w-full h-auto object-contain' alt='hero-img'/>
    </div>


    {/* text container */}
      <div className='md:w-1/2 w-full flex-col flex items-start self-center '>
        <AnimatedText text='Turning Vision Into Reality With Code And Design. ' className='!text-left'/>
          
          <p className='my-4 text-base font-medium'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>

      {/* buttons */}
      <div className='flex item-center self-cente mt-2 gap-x-3 border'>
        <Link href='/dummy.pdf' target='_blank' className='flexCenter bg-dark gap-1 text-light py-2.5 px-6 rounded-lg text-base font-semibold hover:bg-light hover:text-dark transition-all duration-300 border-2 border-transparent hover:border-dark ' download={true}>Resume <LinkArrow className='w-6' />  </Link>
        <Link href='mailto:enitanpeters28@gmail.com' target='_blank' className='flexCenter hover:bg-dark gap-1 hover:text-light py-2.5 px-6 rounded-lg text-base font-semibold bg-light text-dark transition-all duration-300 border-2 border-dark  '>Contact</Link>
      </div>
      </div>
          </div>
        </Layout>


        <Hireme />

        <div className='absolute right-8 bottom-3 inline-block w-24'>
          <Image src={img2} width={96} alt='image' className='w-full h-auto'/>
        </div>
    </main>
    </>
  )
}
