import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"

const testimonios = [
  {
    nombre: "Beatriz García",
    texto:
      "Lidia es una profesional increíble. Desde el primer momento me hizo sentir cómoda y segura. Supo asesorarme y el tratamiento está siendo perfecto, mi pelo ha cambiado mucho desde que estoy en sus manos incluso mejor de lo que imaginaba, ¡ME ENCANTA! Recomendado 100% para tod@s l@s que les apetezca un cambio.",
  },
  {
    nombre: "Mónica Vigo",
    texto:
      "No me han tratado así de bien en la vida. Lidia me asesoró desde el principio y me explicó el proceso. Me ayudó a recuperar mi melena sana y con brillo. El ambiente fue súper agradable y el masaje de cabeza… el mejor del mundo. ¡Gracias Lidia!",
  },
  {
    nombre: "Mercedes Gutiérrez",
    texto:
      "Estoy encantada con la peluquería. Me ha atendido Chema la mayoría de las veces (y una vez Lidia) y noto mi pelo mucho más sano y bonito. Además, hay muy buen ambiente y el tiempo allí se pasa volando.",
  },
  {
    nombre: "Ilda Ventura Figueira",
    texto:
      "Sin duda la mejor peluquería de Madrid y con los mejores profesionales. Excelente trato y resultados. 100% recomendable. Os deseo mucho éxito.",
  },
]

const faqsPeluqueria = [
  {
    pregunta: "¿Puedo ir solo a peinarme o tengo que hacer un tratamiento?",
    respuesta:
      "Claro, puedes venir solo a peinarte, cortarte o hacerte color. Pero siempre comenzamos con un diagnóstico para asegurarnos de que elegimos lo mejor para tu cabello.",
  },
  {
    pregunta: "¿Trabajáis con productos naturales?",
    respuesta:
      "Sí, priorizamos el uso de barros y técnicas respetuosas con tu salud y el medio ambiente.",
  },
]

const faqsAsesoria = [
  {
    pregunta: "¿Y si no sé qué estilo me queda?",
    respuesta:
      "Empezamos con un diagnóstico personalizado. No necesitas saber nada. Solo estar abierta al cambio.",
  },
  {
    pregunta: "¿Esto es solo para mujeres jóvenes?",
    respuesta:
      "No. Nuestro método se adapta a cualquier edad, etapa o estilo de vida.",
  },
  {
    pregunta: "¿Tengo que cambiar todo mi armario?",
    respuesta:
      "No. Te ayudamos a usar lo que ya tienes y solo sumar si es necesario.",
  },
]

const ExtraSections = () => {
  return (
    <div className="bg-[#D4E9FF] py-20 px-6">
      {/* Testimonios */}
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-secondary text-[17px]">Lo que dicen nuestras clientas</p>
        <h2 className="text-[#0F172A] text-[30px] font-bold">Testimonios reales.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-7 mb-24">
        {testimonios.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.75, type: "spring" }}
          >
            <Tilt
              options={{ max: 25, scale: 1, speed: 400 }}
              className="bg-white p-6 rounded-2xl w-full max-w-[360px] shadow-lg"
            >
              <p className="text-[#475569] mb-4">"{item.texto}"</p>
              <h4 className="text-[#0F172A] font-semibold">{item.nombre}</h4>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* FAQs Peluquería */}
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <p className="text-secondary text-[17px]">Para quienes buscan cuidarse el cabello</p>
        <h2 className="text-[#0F172A] text-[26px] font-bold">Preguntas frecuentes sobre Peluquería</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-7 mb-16">
        {faqsPeluqueria.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.75, type: "spring" }}
          >
            <Tilt
              options={{ max: 15, scale: 1, speed: 400 }}
              className="bg-white p-6 rounded-2xl w-full max-w-[360px] shadow-md"
            >
              <h4 className="text-[#0F172A] font-semibold mb-2">{item.pregunta}</h4>
              <p className="text-[#475569] text-[15px]">{item.respuesta}</p>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* FAQs Asesoría */}
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <p className="text-secondary text-[17px]">Si vienes a asesorarte en imagen</p>
        <h2 className="text-[#0F172A] text-[26px] font-bold">Preguntas frecuentes sobre Asesoría</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-7 mb-24">
        {faqsAsesoria.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.75, type: "spring" }}
          >
            <Tilt
              options={{ max: 15, scale: 1, speed: 400 }}
              className="bg-white p-6 rounded-2xl w-full max-w-[360px] shadow-md"
            >
              <h4 className="text-[#0F172A] font-semibold mb-2">{item.pregunta}</h4>
              <p className="text-[#475569] text-[15px]">{item.respuesta}</p>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* Cierre emocional */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="text-[#0F172A] text-[30px] font-bold">Estás a una decisión de volver a verte</h2>
        <p className="text-[#475569] text-[16px] mt-4 max-w-2xl mx-auto">
          Puedes seguir igual... o empezar a reconocerte. Lo difícil no es cambiar, es seguir sin hacerlo.
        </p>
      </motion.div>

      <div className="flex justify-center">
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          href="#"
          className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#1f2937] transition"
        >
          Quiero empezar mi transformación
        </motion.a>
      </div>
    </div>
  )
}

export default SectionWrapper(ExtraSections, "extra")
