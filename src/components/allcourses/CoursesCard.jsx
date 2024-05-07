import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './courses.css';
import Heading from '../common/heading/Heading';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/service/service/')
      .then(response => response.json())
      .then(data => {
        setServices(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const goToService = (id) => {
    window.location.href = `/service/${id}`;
  };

  return (
    <>
      <Heading subtitle={"Services"} />
      <div className="services2">
        {services.map((service) => (
          <div className="service-cards" key={service.id}>
            <img src={service.img} alt={service.name_ru} className="service-image" />
            <h3 className="service-title">{service.name_ru}</h3>
            <button className='service-btn service-link' onClick={() => goToService(service.id)}>
              Подробнее
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
