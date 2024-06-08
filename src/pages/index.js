import Head from 'next/head'

import Layout from '@/components/Layout'
import profilePic from "../../public/images/profile/CodeChimp.png";
import Image from "next/image"
import AnimateText from '@/components/AnimateText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightbulb from "../../public/images/svgs/miscellaneous_icons_1.svg";


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex item-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimateText text="Transforming Vision Into Reality With Innovative Development." className='!text-6xl !text-left'/>
              <p className='my-4 text-base font-medium'>
              With a combined 5 years of experience in full-stack software development and full-lifecycle project development in deep learning,
              I can help turn your plans into polished products.
              I have capabilities spanning database management, UI/UX development, and deploying deep learning apps on cloud infrastructures.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href="NathanWendtCV.pdf" target={"_blank"}
                className="flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark"
                download={true}

                >Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link href="mailto:nswendt90@gmail.com" target={"_blank"}
                className='ml-4 text-lg font-medium capitalize text-dark underline'
                >Contact</Link>
              </div>
            </div>
            <div className='w-1/2'>
              <Image src={profilePic} alt="NathanWendt" className='w-full h-auto' />
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  )
}
