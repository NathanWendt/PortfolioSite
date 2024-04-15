import React from 'react'
import {motion} from "framer-motion"


const Skill = ({name, x, y}) => {

    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold
            bg-dark text-light p-8 shadow-dark cursor-pointer absolute 
            py-3 px-6 shadow-dark
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
            <motion.div className='flex items-center justify-center rounded-full font-semibold
            bg-dark text-light p-8 shadow-dark cursor-pointer
            p-8 shadow-dark
            '
            whileHover={{scale:1.05}}
            >
                Web
            </motion.div>
            <Skill name="CSS" x="-16vw" y="-12vw"/>
            <Skill name="HTML" x="-7vw" y="-7vw"/>
            <Skill name="ReactJS" x="-15vw" y="7vw"/>
            <Skill name="Javascript" x="-7vw" y="0vw"/>
            <Skill name="Python" x="0vw" y="10vw"/>
            <Skill name="SQL" x="10vw" y="-10vw"/>
            <Skill name="Bash" x="12vw" y="7vw"/>
            <Skill name="Pytorch" x="2vw" y="5vw"/>
            <Skill name="neo4j" x="20vw" y="-16vw"/>
            <Skill name="Adobe Illustrator" x="-5vw" y="15vw"/>
            <Skill name="NextJS" x="-5vw" y="-10vw"/>
            <Skill name="Tailwind CSS" x="-22vw" y="-14vw"/>
        </div>
    </>
  )
}

export default Skills