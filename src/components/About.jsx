import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion' 

import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from "../utils/motion"

import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div 
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'></img>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()} className='flex justify-center items-center flex-col'>
      <p className={`${styles.sectionSubText} text-center`}>Introduction</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Overview.</h2>
      <motion.p
    variants={fadeIn("", "", 0., 1)}
    className='mt-4 text-secondary text-center flex-center text-[17px] max-w-3xl leading-[30px]'
    >
      My name's Ahmed Mirza, a programmer from Barcelona, Spain. I have been creating digital solutions since I was 14,  but in January 2023 I decided to take my experience to the next level.
      With extensive experience, I can meet your needs and bring your projects to success. I will turn your ideas into reality with user friendly outcomes. 
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>

    </motion.div>

    </>
  )
}

export default SectionWrapper(About, "about")