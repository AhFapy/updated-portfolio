import { useParams } from "react-router-dom"

const servicios = {
  peluqueria: {
    titulo: "Peluquería",
    descripcion: "Aquí va la explicación larga de peluquería.",
  },
  visagismo: {
    titulo: "Colorimetría + Visagismo",
    descripcion: "Aquí va una explicación completa sobre visagismo.",
  },
  // Añade el resto de servicios...
}

const ServiceDetail = () => {
  const { id } = useParams()
  const servicio = servicios[id]

  if (!servicio) {
    return <div className="p-8 text-center">Servicio no encontrado.</div>
  }

  return (
    <div className="min-h-screen bg-[#D4E9FF] p-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-bold text-[#0F172A] mb-4">{servicio.titulo}</h1>
        <p className="text-[#334155] text-lg">{servicio.descripcion}</p>
      </div>
    </div>
  )
}

export default ServiceDetail
