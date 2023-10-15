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
      <p className={`${styles.sectionSubText} text-center`}>My Offer</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Why Me?</h2>
      <motion.p
    variants={fadeIn("", "", 0., 1)}
    className='mt-4 text-secondary text-center flex-center text-[17px] max-w-3xl leading-[30px]'
    >
I will completely revolutionize the <span className='text-white font-semibold'>initial impression</span> people have of you, crafting <span className='text-white font-semibold'>Breathtaking Visual Experiences</span>. <br/><br/>
Say goodbye to <span className='text-white font-semibold'>Extra Financial Outlays</span> for Hosting. <br/><br/>
Rest assured, I've got your back – <span className='text-white font-semibold'>ZERO charges for any minor website tweaks</span>. <br/><br/>
I am unwavering in my commitment to deliver <span className='text-white font-semibold'>unadulterated excellence</span>. Your website will reign as a <span className='text-white font-semibold'>pinnacle solution</span>. <br/><br/>
Feel utterly <span className='text-white font-semibold'>Comfortable and Secure</span>. I offer a <span className='text-white font-semibold'>5-day Refund Guarantee</span>.




    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10 justify-center'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>

    </motion.div>

    </>
  )
}

export default SectionWrapper(About, "about")