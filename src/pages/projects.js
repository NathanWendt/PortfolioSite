import AnimateText from '@/components/AnimateText.js'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout.js'
import projecPic from "../../public/images/profile/kung_fu_coder.png"

const projects = () => {
  return (
    <>
    <Head>
        <title>Nathan Wendt | About Page</title>
        <meta name="description" content="any description" />
    </Head>
    <main className='flex w-full flex-col items-center justify-center'>
      <Layout className='pt-16'>
        <AnimateText text="Coming soon." className='mb-16'/>

        <div className='relative h-[80%] rounded-2xl border-2 border-solid border-dark
                        bg-light p-8
                        '>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
            <Image src={projecPic} alt='NathanWendt' className='w-full h-auto rounded-2xl' />
            </div>
        </div>


      </Layout>
    </main>


    </>
  )
}

export default projects