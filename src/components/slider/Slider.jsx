import React, { useState, useEffect } from 'react';
import { Carousel } from '3d-react-carousal';
import './slider.css'; 

const Slider = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/main/certificates/')
      .then(response => response.json())
      .then(data => {
        const slideData = data.map(item => (
          <img key={item.id} src={item.img} alt={item.name_ru || item.name_en || item.name_uz} className='images-slider'/>
        ));
        setSlides(slideData);
        setLoading(false); // Устанавливаем, что данные загружены
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      {/* Условное отображение компонента Carousel */}
      {!loading && (
        <div className="slider-container"> 
          <Carousel slides={slides} interval={4000} className="slider-item"/>
        </div>
      )}
    </>
  );
}

export default Slider;
