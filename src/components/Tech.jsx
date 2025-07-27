import React, { useRef, useState } from 'react'
import { SectionWrapper } from '../hoc'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { textVariant } from "../utils/motion"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

import imagen1 from "../assets/img-servicios-1.jpeg"
import imagen2 from "../assets/img-servicios-2.jpeg"
import imagen3 from "../assets/img-servicios-3.jpeg"
import imagen4 from "../assets/img-servicios-4.jpeg"
import imagen5 from "../assets/img-servicios-5.jpeg"

const services = [
  {
    slug: "peluqueria",
    title: "PELUQUERÍA",
    description: "Nuestro servicio estrella: barros, balayage, micros... Diseñado para cuidar tu cabello de forma saludable, natural y elegante.",
    image: imagen3,
  },
  {
    slug: "colorimetria",
    title: "Colorimetría + Visagismo",
    description: "Ideal si buscas descubrir tus colores favorecedores y potenciar tus rasgos con un estudio de rostro y tono que te ayude a tomar decisiones acertadas en imagen personal.",
    image: imagen2,
  },
  {
    slug: "firstexperience",
    title: "First Experience",
    description: "Perfecto si quieres una transformación guiada desde el primer momento, con diagnóstico personalizado en cabello, estilismo, corte y tratamiento.",
    image: imagen1,
  },
  {
    slug: "fullexperience",
    title: "Full Experience",
    description: "Ideal si buscas una experiencia premium de dos días para cuidarte por dentro y por fuera: colorimetría avanzada, visagismo, terapia, peluquería y asesoramiento integral.",
    image: imagen4,
  },
  {
    slug: "integral",
    title: "Asesoría Integral",
    description: "Ideal si quieres transformar tu imagen de forma completa (4 días): definir estilo, paleta de colores, silueta y armario con acompañamiento personalizado.",
    image: imagen5,
  }
]


const Services = () => {
  const scrollRef = useRef(null)
  const [selected, setSelected] = useState(null)

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -400 : 400,
        behavior: 'smooth',
      })
    }
  }


  return (
    <section className="w-full py-24 bg-[#D4E9FF]" id="services">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TITULAR SLIDER */}
        <motion.div variants={textVariant()} className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-[#0F172A]">
            Nuestras <span className="text-[#295D8D]">Experiencias</span>
          </h1>
          <p className="text-[#334155] text-xl max-w-3xl mx-auto mt-6">
            Diseñadas para que redescubras tu esencia a través de la imagen.
          </p>
        </motion.div>

        {/* FLECHAS */}
        <div className="relative">
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 justify-between w-full px-4 z-20">
            <button
              onClick={() => scroll("left")}
              className="bg-white rounded-full p-3 shadow hover:scale-110 transition"
            >
              <FaChevronLeft className="text-[#0F172A] text-xl" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-white rounded-full p-3 shadow hover:scale-110 transition"
            >
              <FaChevronRight className="text-[#0F172A] text-xl" />
            </button>
          </div>

          {/* SLIDER */}
          <div
            className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar px-2"
            ref={scrollRef}
          >
            {services.map((service, index) => (
              <Link
                to={`/servicio/${service.slug}`}
                key={index}
                className="min-w-[400px] max-w-[420px] bg-white rounded-xl shadow-lg transition-all duration-300 flex-shrink-0 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 object-cover rounded-t-xl"
                />
                <div className="p-6">
                  <h3 className="text-[#0F172A] font-bold text-xl mb-3 uppercase">
                    {service.title}
                  </h3>
                  <p className="text-[#475569] text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}

export default SectionWrapper(Services, "services")
