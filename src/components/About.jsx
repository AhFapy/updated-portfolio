import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="bg-white p-[1px] rounded-[20px] shadow-xl transition-transform hover:scale-[1.03]"
      >
        <div 
          className="bg-[#F8FAFC] rounded-[20px] py-8 px-6 min-h-[280px] flex justify-center items-center flex-col"
        >
<span className="object-contain mb-4 text-5xl">{icon}</span>
          <h3 className="text-[#0F172A] text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div 
        variants={textVariant()}
        className="flex flex-col items-center text-center"
      >
        <p className="text-[#64748B] text-sm tracking-widest uppercase font-medium mb-2">
          Nuestra forma de trabajar
        </p>
        <h2 className="text-[#0F172A] text-4xl sm:text-5xl font-extrabold mb-6">
          El Método de <span className="text-[#295D8D]">Arte 2.0</span>
        </h2>
        
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="max-w-3xl text-[#334155] text-[17px] leading-[30px] px-4 sm:px-0"
        >
          No se trata solo de cambiar tu imagen. Se trata de <span className="text-[#295D8D] font-medium">reconectar contigo</span>.
          <br /><br />
          Desde la elección del color que armoniza con tu piel hasta el corte que potencia tu mirada, cada detalle está pensado para reflejar tu <span className="text-[#295D8D] font-medium">esencia auténtica</span>.
          <br /><br />
          Nuestro compromiso es que salgas no solo diferente, sino también más tú que nunca.
        </motion.p>
      </motion.div>

      <div className="mt-16 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
