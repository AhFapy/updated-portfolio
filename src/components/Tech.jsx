import React from 'react'
import { SectionWrapper } from '../hoc'
import { styles } from '../style'

import imagen1 from "../assets/img-servicios-1.jpeg"
import imagen2 from "../assets/img-servicios-2.jpeg"
import imagen3 from "../assets/img-servicios-3.jpeg"
import imagen4 from "../assets/img-servicios-4.jpeg"
import imagen5 from "../assets/img-servicios-5.jpeg"

const services = [
  {
    title: "PELUQUERÍA",
    description: "Nuestro servicio estrella: barros, balayage, micros... Diseñado para cuidar tu cabello de forma saludable, natural y elegante.",
    image: imagen1,
  },
  {
    title: "Colorimetría + Visagismo",
    description: "Ideal si buscas descubrir tus colores favorecedores y potenciar tus rasgos con un estudio de rostro y tono que te ayude a tomar decisiones acertadas en imagen personal.",
    image: imagen2,
  },
  {
    title: "First Experience",
    description: "Perfecto si quieres una transformación guiada desde el primer momento, con diagnóstico personalizado en cabello, estilismo, corte y tratamiento.",
    image: imagen3,
  },
  {
    title: "Full Experience",
    description: "Ideal si buscas una experiencia premium de dos días para cuidarte por dentro y por fuera: colorimetría avanzada, visagismo, terapia, peluquería y asesoramiento integral.",
    image: imagen4,
  },
  {
    title: "Asesoría Integral",
    description: "Ideal si quieres transformar tu imagen de forma completa (4 días): definir estilo, paleta de colores, silueta y armario con acompañamiento personalizado.",
    image: imagen5,
  }
]

const Services = () => {
  return (
    <section className="w-full py-20 bg-[#D4E9FF]">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-[#0F172A] text-center">
          Nuestros <span className="text-[#295D8D]">Servicios</span>
        </h1>
        <p className="text-[#334155] text-lg max-w-2xl mx-auto mb-12 text-center">
          Diseñados para que redescubras tu esencia a través de la imagen.
        </p>

        <div className="flex flex-col items-center space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`w-full max-w-[1100px] flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Imagen adaptada a vertical */}
<div className="w-full md:w-1/2 flex justify-center">
  <div className="w-full max-w-[500px] max-h-[400px] rounded-xl overflow-hidden shadow-lg shadow-[#295D8D]/50">
    <img
      src={service.image}
      alt={service.title}
      className="w-full h-full object-cover"
    />
  </div>
</div>

              {/* Texto */}
              <div className="w-full md:w-1/2 bg-white rounded-xl p-6 shadow-lg text-left hover:shadow-2xl transition duration-300 ease-in-out">
                <h3 className="text-[#0F172A] font-bold text-xl mb-2">
                  {service.title}
                </h3>
                <p className="text-[#475569] text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionWrapper(Services, "services")
