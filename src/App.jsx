import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About, Contact, Hero, Navbar, Tech, Works } from "./components"
import ServiceDetail from './components/ServiceDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <div className='relative z-0 bg-primary'>
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Hero />
              </div>
              <About />
              <Tech />
              <Works />
              {/* <Contact /> */}
            </div>
          }
        />
        
        {/* Página individual de servicio */}
        <Route path="/servicio/:id" element={<ServiceDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
