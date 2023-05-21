import React, { useEffect, useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="flex justify-center items-center gap-10 h-96 my-7">
      <img
        src={images[currentIndex]}
        alt="Carousel Image"
        className="h-full"
      />
      <div className='flex flex-col justify-evenly items-left h-full text-4xl'>
        <p>Moda Circular ♻️</p>
        <p>Sostenibilidad 🌱</p>
        <p>Mercado Orgánico 🍉</p>
        <p>Pet-friendly 🐶</p>
      </div>
    </div>
  );
};

export default Carousel;
