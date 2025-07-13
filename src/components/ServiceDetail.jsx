import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import imagen1 from "../assets/img-servicios-1.jpeg"
import imagen2 from "../assets/img-servicios-2.jpeg"
import imagen3 from "../assets/img-servicios-3.jpeg"
import imagen4 from "../assets/img-servicios-4.jpeg"
import imagen5 from "../assets/img-servicios-5.jpeg"

const data = {
  peluqueria: {
    title: "Peluquería",
    description:
      "Una experiencia diseñada para que tu melena vuelva a respirar. Trabajamos desde el diagnóstico profundo hasta el cuidado integral con técnicas naturales, respetuosas y efectivas.",
    video: "https://www.youtube.com/embed/YOUTUBE_ID",
    image: imagen1,
    team: [
      {
        nombre: "Chema",
        cargo: "Especialista en color y salud capilar",
        frase: "Me gusta ver cómo el brillo vuelve al pelo… y a la mirada.",
        horario: "Lunes a Viernes de 12:00 a 20:00",
      },
      {
        nombre: "Patricia",
        cargo: "Técnica en barros y diagnósticos personalizados",
        frase: "Cada cabello cuenta una historia. Mi trabajo es ayudarte a reescribirla.",
        horario: "Lunes a Viernes de 11:00 a 19:00",
      },
      {
        nombre: "Lidi",
        cargo: "Estilista y asesora de imagen",
        frase: "El cambio físico solo es la chispa. Lo importante es lo que despierta dentro.",
        horario: "Lunes de 14:00 a 20:00. Martes, Miércoles y Jueves de 12:00 a 20:00. Viernes de 10:00 a 20:00",
      },
      {
        nombre: "Paula",
        cargo: "Colorista y acompañante en transformaciones",
        frase: "Nada como ver a una mujer reconocerse en el espejo.",
        horario: "Miércoles, Jueves y Viernes de 10:00 a 20:00",
      },
      {
        nombre: "Diana",
        cargo: "Fundadora y especialista en imagen y peluquería",
        frase: "Una transformación bien guiada puede ser un antes y un después.",
        horario: "Miércoles por la mañana",
      },
    ],
  },

  colorimetria: {
    title: "Colorimetría + Visagismo",
    description:
      "Un estudio completo de tus rasgos y tonos para ayudarte a tomar decisiones que realcen tu imagen natural. Aquí empieza el verdadero cambio.",
    video: "https://www.youtube.com/embed/YOUTUBE_ID",
    image: imagen2,
    team: [
      {
        nombre: "Beatriz",
        cargo: "Especialista en colorimetría aplicada a imagen personal",
        frase: "Cada color comunica algo. Mi trabajo es que digas exactamente lo que quieres.",
        horario: "Disponible bajo cita previa",
      },
      {
        nombre: "Lucía",
        cargo: "Visagista y técnica en armonía facial",
        frase: "Cuando entendemos nuestro rostro, empezamos a reconciliarnos con el espejo.",
        horario: "Disponible bajo cita previa",
      },
    ],
  },

  firstexperience: {
    title: "First Experience",
    description:
      "Una transformación completa desde el primer encuentro. Analizamos tu cabello, tu rostro y tu estilo para empezar un proceso real de autoconexión.",
    video: "https://www.youtube.com/embed/YOUTUBE_ID",
    image: imagen3,
    team: [
      {
        nombre: "Diana",
        cargo: "Guía de transformación personal e imagen",
        frase: "No cambias solo cómo te ves. Cambias cómo te tratas.",
        horario: "Miércoles por la mañana",
      },
      {
        nombre: "Beatriz",
        cargo: "Asesora técnica en color y armonía",
        frase: "La primera vez siempre marca. Que marque para bien.",
        horario: "Disponible bajo cita previa",
      },
      {
        nombre: "Lucía",
        cargo: "Soporte emocional y visagista",
        frase: "Escuchar también es parte del cambio.",
        horario: "Disponible bajo cita previa",
      },
    ],
  },

  fullexperience: {
    title: "Full Experience",
    description:
      "Dos días para ti. Tratamiento integral de imagen, salud capilar, colorimetría, estilo, y mucho más. Una experiencia única para resetear cuerpo y mente.",
    video: "https://www.youtube.com/embed/YOUTUBE_ID",
    image: imagen4,
    team: [
      {
        nombre: "Diana",
        cargo: "Creadora del método de transformación consciente",
        frase: "Acompañarte en este viaje es un honor.",
        horario: "Miércoles por la mañana",
      },
      {
        nombre: "Beatriz",
        cargo: "Colorimetría y definición de estilo",
        frase: "Tu esencia ya existe. Solo hay que sacarla.",
        horario: "Disponible bajo cita previa",
      },
      {
        nombre: "Lucía",
        cargo: "Visagismo y apoyo emocional",
        frase: "Transformarte también es sostenerte.",
        horario: "Disponible bajo cita previa",
      },
    ],
  },

  integral: {
    title: "Asesoría Integral",
    description:
      "Transformación de imagen en profundidad. Paleta de colores, morfología, armario, estilo de vida. Lo trabajamos todo contigo.",
    video: "https://www.youtube.com/embed/YOUTUBE_ID",
    image: imagen5,
    team: [
      {
        nombre: "Diana",
        cargo: "Mentora de procesos de transformación femenina",
        frase: "El estilo no es moda. Es identidad.",
        horario: "Miércoles por la mañana",
      },
      {
        nombre: "Beatriz",
        cargo: "Color y análisis de silueta",
        frase: "Cuando sabes qué te favorece, ya no dudas.",
        horario: "Disponible bajo cita previa",
      },
      {
        nombre: "Lucía",
        cargo: "Psicoimagen y acompañamiento personal",
        frase: "Un cambio real empieza dentro.",
        horario: "Disponible bajo cita previa",
      },
    ],
  },
}


const ServiceDetail = () => {
  const { id } = useParams()
  const service = data[id]

  if (!service) return <div className="p-10 text-center text-xl">Servicio no encontrado</div>

  return (
    <div className="min-h-screen bg-[#D4E9FF] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-6 text-[#0F172A]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {service.title}
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-[#334155] mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {service.description}
        </motion.p>

        {/* Video VSL */}
        <motion.div
          className="aspect-video max-w-3xl mx-auto mb-20 rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <iframe
            src={service.video}
            title="Video de presentación"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full h-full"
            allowFullScreen
          />
        </motion.div>

        {/* Imagen + Equipo */}
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
          {/* Imagen */}
          <motion.div
            className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-auto object-cover rounded-xl"
            />
          </motion.div>

          {/* Tarjetas en filas de 2 */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.team.map((p, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow-xl text-left text-[#0F172A]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-1">{p.nombre}</h3>
                <p className="text-sm font-medium text-[#475569] mb-1">{p.cargo}</p>
                <p className="text-sm text-[#64748B] mb-2">{p.horario}</p>
                <p className="italic text-[#334155]">“{p.frase}”</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail
