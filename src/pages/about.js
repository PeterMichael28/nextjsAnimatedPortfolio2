import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import img2 from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";





const AnimateNumber = ( { value } ) => {
    const textRef = useRef(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {duration: 6000})
    const isInView = useInView(textRef, {once: true})

    useEffect( () => {
        if ( isInView ) {
            motionValue.set(value)
        }
    }, [isInView, motionValue, value])


    useEffect( () => {
        springValue.on( 'change', (latest) => {
            // console.log(latest)
            if ( textRef.current && latest.toFixed( 0 ) <= value) {
                textRef.current.textContent = latest.toFixed( 0 )
                
            }
        })
    }, [springValue, value])
    
    return <span ref={textRef }>{ value}</span>
}

const About = () => {
 return (
  <>
   <Head>
    <title>About section</title>
    <meta
     name="description"
     content="My portfolio about page"
    />
   </Head>

   <main className="w-full flex-col flexCenter">
    <Layout className="pt-16">
     <AnimatedText text="Passion Fuels Purpose!" />

     <div className="grid w-full grid-cols-8 gap-16  mt-16">
      <div className="col-span-3 flex-col flex items-start justify-start">
       <h2 className="mb-2 text-lg font-bold uppercase text-dark/75">
        Biography
       </h2>

       <p className="font-medium">
        {` Hi, I'm CodeBucks, a web developer and UI/UX
        designer with a passion for creating beautiful,
        functional, and user-centered digital experiences.
        With 4 years of experience in the field. I am always
        looking for new and innovative ways to bring my
        clients' visions to life.`}
       </p>

       <p className="font-medium my-5">
        {` I believe that design is about more than just making
        things look pretty – it's about solving problems and
        creating intuitive, enjoyable experiences for users.`}
       </p>

       <p className="font-medium">
        {`Whether I'm working on a website, mobile app,
        or other digital product, I bring my commitment to
        design excellence and user-centered thinking to
        every project I work on. I look forward to the
        opportunity to bring my skills and passion to your
        next project.`}
       </p>
      </div>

      {/* profile image */}
      <div className="col-span-3 relative h-max rounded-2xl border-2 border-dark bg-light p-8">
       <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
       <Image
        src={img2}
        alt="profile-image"
        className="w-full h-auto rounded-lg"
       />
      </div>

      {/* counters */}
      <div className="col-span-2 flexBetween flex-col ">
       <div className="flex flex-col items-end justify-center">
        <span className="inline-block text-6xl font-bold "><AnimateNumber  value={50}/>+</span>
        <h2 className="text-xl font-medium capitalize text-dark/75">Satisfied clients</h2>
       </div>

       <div className="flex flex-col items-end justify-center">
        <span className="inline-block text-6xl font-bold "><AnimateNumber  value={40}/>+</span>
        <h2 className="text-xl font-medium capitalize text-dark/75">Completed Projects</h2>
       </div>

       <div className="flex flex-col items-end justify-center">
        <span className="inline-block text-6xl font-bold "><AnimateNumber  value={2}/>+</span>
        <h2 className="text-xl font-medium capitalize text-dark/75">years of experience</h2>
       </div>
      </div>
     </div>
    </Layout>
   </main>
  </>
 );
};

export default About;
