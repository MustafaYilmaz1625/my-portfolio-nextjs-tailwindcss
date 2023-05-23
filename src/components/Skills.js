import React from 'react'
import {motion} from "framer-motion"

const Skill =({name,x,y})=>{
    return (
      <motion.div
        className="flex items-center justify-center absolute rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer "
        whileHover={{ scale: 1.5 }}
        initial={{x:0,y:0}}
        whileInView={{x:x,y:y}}
        transition={{duration:1.5}}
        viewport={{once:true}}
      >
        {name}
      </motion.div>
    );
}

const Skills = () => {
  return (
    <>
    <h2 className='fant-bold text-8xl mt-64 w-full text-center '>Skils</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight '>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer '
        whileHover={{scale:1.5}}
        >Web</motion.div>
        <Skill name="HTML" x="-20vw" y="-2vw" />
        <Skill name="CSS" x="-5vw" y="-9vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="Typescript" x="0vw" y="11vw" />
        <Skill name="ReactJS" x="-19vw" y="-15vw" />
        <Skill name="NextJS" x="13vw" y="-12vw" />
        <Skill name="Web Desing" x="33vw" y="-5vw" />
        <Skill name="Tailwind CSS" x="0vw" y="-23vw" />
        <Skill name="Material UI" x="-24vw" y="18vw" />
        <Skill name="Git/GitHub" x="22vw" y="18vw" />
    </div>
    </>
  )
}

export default Skills