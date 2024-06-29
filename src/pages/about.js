import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/Headshot.jpg"
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Experience from '@/components/Experience.js'
import Education from '@/components/Education.js'
import AnimateText from '@/components/AnimateText.js'
import Layout from '@/components/Layout.js'
import Skills from '@/components/Skills.js'


const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

        return <span ref={ref}></span>
}


const about = () => {
    return (
        <>
            <Head>
                <title>Nathan Wendt | About Page</title>
                <meta name="description" content="an about page" />
            </Head>
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimateText text="Innovating Through Creativity and Capability" className='mb-16'/>
                    <div className='grid w-full grid-cols-8 gap-16 my-10'>
                        <div className='col-span-3 flex flex-col item-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'
                            >Biography
                            </h2>
                            <p className='font-medium'>
                                Hi! My name is Nathan Wendt. I am an engineer with a diverse background stemming from control systems
                                to deep learning. I completed a master&apos;s of electrical engineering from WSU and spent 4 years researching,
                                prototyping, and deploying deep learning applications at scale at Pacific Northwest National Labs. I am curious,
                                creative, driven, and eager to continue my professional development.
                            </p>
                            <p className='my-4 font-medium'>
                                I took a hiatus from my career in 2023 to travel, meditate, and pursue writing. In that time
                                I stayed professionally active freelancing prompt engineering, full-stack web development, and even 
                                opening a successful pop-up kitchen. 
                            </p>
                            <p className='font-medium'>
                                I am as much artist as engineer and I attribute much of my professional success to my creatitvity, intuition, and curiousity. I look forward to hearing
                                about your projects and figuring out how I can support your company&apos;s growth.
                            </p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                        bg-light p-8
                        '>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
                                <Image src={profilePic} alt='NathanWendt' className='w-full h-auto rounded-2xl' 
                                priority
                                sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                                />
                        </div>

                        <div className='col-span-2 flex flex-col items-end justify-between'>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumbers value = {4} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'> 
                                    Years of Experience
                                </h2>
                            </div>

                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumbers value = {15} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>
                                    Projects
                                </h2>
                            </div>

                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumbers value = {2} />
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>
                                    Publications
                                </h2>
                            </div>
                        </div>
                    </div>

                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    )
}


export default about