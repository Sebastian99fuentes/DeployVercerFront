import React from "react";
import hero from "./Hero.jpg";
import hero2 from "./areas-deportivas.jpg";
import "./Hero.css";
import { Link } from "react-router";
interface Props {}
const Hero = (props: Props) => {
    return (
      <section id="hero" className="py-12">
  <div className="container flex flex-col-reverse mx-auto px-6 lg:flex-row lg:items-center">
    {/* Texto del Hero */}
    <div className="flex flex-col space-y-6 mb-12 lg:mb-0 lg:w-1/2 lg:pr-10">
      <h1 className="text-4xl font-bold text-center lg:text-5xl lg:text-left">
        Reserva de Implementos y Áreas Deportivas
      </h1>
      <p className="text-lg text-center text-gray-600 lg:text-left">
        Organiza tu tiempo y accede fácilmente a las mejores canchas y equipos 
        sin preocupaciones. ¡Optimiza tu experiencia deportiva!
      </p>
      <div className="flex justify-center lg:justify-start">
        <Link
          to="/search"
          className="py-3 px-6 text-lg font-bold text-white bg-lightGreen rounded hover:opacity-80"
        >
          Comienza a Reservar
        </Link>
      </div>
    </div>

    {/* Imagen del Hero */}
    <div className="lg:w-1/2 flex justify-center">
      <img
        src={hero2}
        alt="Reserva de implementos y áreas"
        className="w-full max-w-md lg:max-w-lg"
      />
    </div>
  </div>
</section>

      );
      
};
export default Hero;