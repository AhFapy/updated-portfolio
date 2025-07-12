import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="w-full min-h-[100vh] bg-[#D4E9FF] flex flex-col items-center justify-center px-6 py-16">
      {/* Contenedor principal */}
      <div className="max-w-4xl w-full flex flex-col items-center text-center gap-8">

        {/* Título y descripción */}
        <div className="space-y-5">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-[#0F172A]">
            Arte <span className="text-[#295D8D]">2.0</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#1E293B] leading-relaxed">
            El nuevo espacio de Belleza, Estilo y Asesoría.
            <br />
            Vive una experiencia transformadora desde la imagen.
          </p>
          <p className="text-sm text-[#64748B] mt-2">Mira el vídeo y descúbrelo tú misma.</p>
        </div>

        {/* Vídeo embebido con sombra chillona */}
<div className="w-full h-[300px] max-w-3xl rounded-xl overflow-hidden border-4 border-white shadow-[0_40px_100px_rgba(122,176,234)]">
  <div className="bg-black w-full h-full text-center flex justify-center items-center aspect-w-16 aspect-h-9 text-white text-lg font-medium">
    VSL
  </div>
</div>

      </div>
    </section>
  )
}

export default Hero
