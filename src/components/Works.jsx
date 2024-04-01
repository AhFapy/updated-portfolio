import { Tilt } from "react-tilt"
import {motion} from "framer-motion"

import { styles } from "../style"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import {fadeIn, textVariant} from "../utils/motion"
import clickImg from "../assets/click-img.webp"

  
const ProjectCard = ({index, name, description, tags, image, source_code_link, handleWindow}) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
    className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[100px] hover:cursor-pointer" onClick={() => handleWindow(source_code_link)}>
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <img className="w-[3rem] h-[3rem] rounded-full" src={clickImg}></img>
          </div>
        </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
        ))}
      </div>
    </Tilt>
  </motion.div>
)

const Works = () => {
  const handleWindow = function(link) {
    window.open(link)
  }

  return (
    <>
    <motion.div variants={textVariant()} className='flex justify-center items-center flex-col'>
      <p className={`${styles.sectionSubText} text-center`}>My Work</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Projects.</h2>
    </motion.div>

    <div className="w-full flex justify-center">
      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center"
      >
          In this projects you can see my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to view it deeply. It reflects my ability to solve complex problems and work with different technologies.
      </motion.p>
    </div>

     <div className="mt-20 flex flex-wrap justify-center gap-7">
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} index={index} {...project} handleWindow={handleWindow}/> 
      )
      )}
    </div> 

    </>
  )
}

export default SectionWrapper(Works, "work")