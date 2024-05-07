import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import "./teamslider.css";

const TeamSlider = () => {
  const [mentors, setMentors] = useState([]);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

  useEffect(() => {
    fetch('http://127.0.0.1:8000/main/mentors/')
      .then(response => response.json())
      .then(data => {
        setMentors(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="team-slider">
      <section className="team padding">
        <Carousel breakPoints={breakPoints}>
          {mentors.map((mentor, index) => (
            <div key={index} className="items shadow">
              <div className="img">
                <img src={mentor.img} alt="" />
              </div>
              <div className="details">
                <h2>{mentor.name_en}</h2>
                <p>{mentor.work_en}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
    </div>
  );
};

export default TeamSlider;
