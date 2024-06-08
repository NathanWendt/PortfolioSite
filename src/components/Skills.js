import React from 'react'
import {motion} from "framer-motion"


const Skill = ({name, x, y}) => {

    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold
            bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute 
            '
            whileHover={{scale:1.05}}
            initial={{x:0,y:0}}
            animate={{ x:x, y:y}}
            transition={{duration: 1.5}}
            >
                {name}
            </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
        <div className='w-full h-screen relative flex items-center 
        justify-center rounded-full bg-circularLight'>
            
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
            p-8 shadow-dark
            '
            whileHover={{scale:1.05}}
            >
                Web
            </motion.div>

            
            <Skill name="HTML" x="-21vw" y="-7vw"/>
            <Skill name="ReactJS" x="-20.5vw" y="7vw"/>
            <Skill name="Javascript" x="-11vw" y="0vw"/>
            <Skill name="NextJS" x="-28vw" y="-1vw"/>
            <Skill name="Tailwind CSS" x="-29vw" y="-14vw"/>
            <Skill name="Python" x="11vw" y="0vw"/>
            <Skill name="Pandas" x="11vw" y="-10vw"/>
            <Skill name="SQL" x="10vw" y="-17vw"/>
            <Skill name="neo4j" x="20vw" y="-16vw"/>
            <Skill name="Pytorch" x="12vw" y="9vw"/>
            <Skill name="OpenCV" x="6vw" y="18vw"/>
            <Skill name="Tensorflow" x="21.5vw" y="4vw"/>
            <Skill name="AWS" x="23vw" y="20vw"/>
            <Skill name="Stable Diffusion" x="38vw" y="8vw"/>
            <Skill name="GPT" x="34vw" y="15vw"/>
            <Skill name="Linux" x="0vw" y="-23vw"/>

            
        </div>
    </>
  )
}

export default Skills