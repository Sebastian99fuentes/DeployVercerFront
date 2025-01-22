import React from 'react'
import Hero from '../../Components/Hero/Hero'

interface Props  {}

const HomePage = () => {
  return (
    <div>
   <Hero />
      {/* About Us Section */}
      <section id="about-us" className="bg-gray-100 py-16">
        <div className="container mx-auto px-8 text-center lg:px-32">
          <h2 className="text-4xl font-bold mb-6">¿Quiénes Somos?</h2>
          <p className="text-lg text-gray-600">
            Somos una plataforma dedicada a optimizar el proceso de reserva de implementos deportivos
            y espacios físicos. Nuestro objetivo es brindarte comodidad, rapidez y certeza 
            en la disponibilidad de los recursos que necesitas para practicar tus deportes 
            favoritos.
          </p>
        </div>
      </section>
   {/* Hero Section */}
   

{/* How It Works Section */}
<section id="how-it-works" className="py-16">
  <div className="container mx-auto px-8 lg:px-32">
    <h2 className="text-4xl font-bold text-center mb-10">¿Cómo Funciona?</h2>
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
      {/* Paso 1 */}
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 text-lightGreen">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0L7.5 15m4.5 4.5l4.5-4.5" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold">Busca</h3>
        <p className="text-gray-600 mt-2">
          Explora nuestras opciones de Espacios Físicos e implementos deportivos disponibles en tu localidad.
        </p>
      </div>

      {/* Paso 2 */}
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 text-lightGreen">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
           <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clip-rule="evenodd" />
      </svg>
        </div>
        <h3 className="text-2xl font-bold">Reserva</h3>
        <p className="text-gray-600 mt-2">
          Elige el horario y el recurso que mejor se adapte a tus necesidades.
        </p>
      </div>

      {/* Paso 3 */}
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 text-lightGreen">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
          <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z" clip-rule="evenodd" />
          </svg>  
        </div>
        <h3 className="text-2xl font-bold">Disfruta</h3>
        <p className="text-gray-600 mt-2">
          Accede a las áreas y equipos que reservaste sin complicaciones.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Call to Action Section */}
      <section id="cta" className="bg-lightGreen py-16">
        <div className="container mx-auto px-8 text-center lg:px-32">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para empezar?
          </h2>
          <p className="text-lg text-white mb-10">
            Ahorra tiempo y asegura tu lugar con solo unos clics.
          </p>
          <a
            href="/register"
            className="py-4 px-8 text-xl font-bold text-lightGreen bg-white rounded shadow-md hover:opacity-80"
          >
            Regístrate Ahora
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;