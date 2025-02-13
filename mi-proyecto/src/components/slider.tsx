import { useState } from "react";
import Botton from "./Button";
interface SliderProps {
  images: string[];
}

function Slider({ images }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Avanzar a la siguiente imagen
  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  // Retroceder a la imagen anterior
  const prevSlide = () => {
    setCurrentIndex(
      (currentIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-xl font-semibold">Nuestros Proyectos</h2>
      <p className="text-gray-600 mb-4">Trabajos exitosos que hablan por nosotros</p>
      
      {/* Contenedor de la imagen */}
      <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg bg-primary flex justify-center items-center h-64">
        {/* Botón de retroceso */}
        <button
          onClick={prevSlide}
          className="absolute left-4 text-white text-3xl bg-black p-2 rounded-full opacity-50 hover:opacity-100 transition duration-200"
        >
          &#8592;
        </button>

        {/* Imagen del slider */}
        <img
          src={images[currentIndex]}
          alt="Slider image"
          className="w-full h-full object-cover"
        />

        {/* Botón de avance */}
        <button
          onClick={nextSlide}
          className="absolute right-4 text-secundary text-3xl bg-primary p-2 rounded-full opacity-50 hover:opacity-100 transition duration-200"
        >
          &#8594;
        </button>
      </div>
      
      {/* Botón adicional para ver más proyectos (opcional) */}
     
       <Botton text="Ver más proyectos" link="https://github.com/jagarcia05/practica-5.1-" />
    </div>
  );
}

export default Slider;
