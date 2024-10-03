import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon.js';


const Details = ({position, company, companyLink, time, work}) => {
    const ref = useRef(null)
    return (
    <li ref = {ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference = {ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;
            <a 
                href={companyLink}
                target="_blank"
                className='text-primary capitalize'
            >
                @{company}
            </a> 
            </h3>
            <span className='capitalize font-medium text-dark/75'>
                {time}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </motion.div>
    </li>
    );
}

const Experience = () => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Experience
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />
                <ul className='w-full flex flex-col items-start justify-between ml-4'>

                    <Details 
                    position="Prompt Engineering"
                    company="DataAnnotation"
                    companyLink=""
                    time="7/23-Present"
                    work="Freelance prompt engineering for coding and data science LLM's. Involves curating effective prompts, correcting outputs, and providing comparitive feedback of multiple models for contrastive training."
                    />

                    <Details 
                    position="Senior Data Scientist and Researcher"
                    company="Pacific Northwest National Laboratories"
                    companyLink=""
                    time="8/19-1/23"
                    work="Full-lifecycle deep learning project development and applied research. Ownership of multiple small projects while also working as a technical lead in many more. Specializations in explainable computer vision with extensive exposure to attention mechanisms and Few-Shot learning."
                    />

                    <Details 
                    position="Research Assistant"
                    company="Washington State University"
                    companyLink=""
                    time="5/18-7/19"
                    work="Conducted research in network controls and optimization. Formulated proofs for network bounds and published results in a peer reviewed journal."
                    />

                    <Details 
                    position="OSSI Intern"
                    company="NASA AMES"
                    companyLink=""
                    time="6/18-8/18"
                    work="Developed a java based toolset for simulating cyber attacks within the smart-nas airtraffic control environment. Learned an extensive API and build an interactive tool within an 8 week program."
                    />
                </ul>
        </div>
    </div>
  )
}

export default Experience