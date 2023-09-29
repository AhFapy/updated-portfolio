import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SectionWrapper } from "../hoc"
import { styles } from "../style"
import { faCss3Alt, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons"

const Tech = () => {
  return (
    <>
    
    <main id="main-tech" className="text-white text-[5vw] flex flex-col justify-center items-center h-screen">
    <div className="pt-[6vh] flex flex-col items-center mt-[6vh] w-[90vw] h-[40vh]">
        <div>
            <h1 className={`${styles.sectionHeadText} text-center`}>
                Highly Skilled Technologies 🛠️<br/>
                <div className="bg-red w-[100vw] flex justify-center">
                <span className="text-[8vw] flex w-[75%] justify-evenly mt-[5vh]">
                    <FontAwesomeIcon className="hover:text-white text-orange-600 ease-in-out duration-500" icon={faHtml5} />
                    <FontAwesomeIcon className="hover:text-white text-blue-600 ease-in-out duration-500" icon={faCss3Alt} />
                    <FontAwesomeIcon className="hover:text-white text-yellow-600 ease-in-out duration-500" icon={faJs} />
                    <FontAwesomeIcon className="text-cyan-600 ease-in-out duration-500 hover:text-white" icon={faReact} />    
                </span>
                </div>
            </h1>
        </div>
    </div>
</main>
</>
)
}

export default SectionWrapper(Tech, "")