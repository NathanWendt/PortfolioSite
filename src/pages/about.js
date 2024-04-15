import AnimateText from '@/components/AnimateText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import profilePic from "../../public/images/profile/kung_fu_coder.png"
import Image from 'next/image'
import Skills from '@/components/Skills'

const about = () => {
    return (
        <>
            <Head>
                <title>Nathan Wendt | About Page</title>
                <meta name="description" content="an about page" />
            </Head>
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimateText text="Innovating Through Creativity and Capability" />
                    <div className='grid w-full grid-cols-8 gap-16 my-10'>
                        <div className='col-span-4 flex flex-col item-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'
                            >Biography
                            </h2>
                            <p className='font-medium'>
                                Hi! My name is Nathan Wendt. I am an engineer with a diverse background stemming from control systems
                                to deep learning. I completed a master's of electrical engineering from WSU and spent 4 years researching,
                                prototyping, and deploying deep learning applications at scale at Pacific Northwest National Labs. I am creative,
                                curious, and driven, and eager to continue filling out my professional portfolio.
                            </p>
                            <p className='my-4 font-medium'>
                                The 9-5 grind wasn't for me, so I quit. Since then, I have made money freelancing prompt engineering, recommendationt systems,
                                and web design, and even started a successful pop-up kitchen.
                            </p>
                            <p className='font-medium'>
                                I am a writer, chef, and engineer with digital nomad aspirations. My goal is to build out my working portfolio
                                with lucrative remote freelance opportunities that I can work from anywhere in the world. I look forward to hearing
                                about your needs and figuring out how I can support your company's growth.
                            </p>
                        </div>
                        <div className='col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark
                        bg-light
                        '>
                        
                            <Image src={profilePic} alt='NathanWendt' className='w-full h-auto rounded-2xl' />

                        </div>
                    </div>

                    <Skills />
                </Layout>
            </main>
        </>
    )
}


export default about