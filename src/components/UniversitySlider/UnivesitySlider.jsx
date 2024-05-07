import React, { useState, useEffect } from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import IMG from "../../assets/logo.png";
import "./universityslider.css";
import Heading from "../common/heading/Heading";
import { useTranslation } from "react-i18next";

const UnivesitySlider = () => {
  const [showSlides, setShowSlides] = useState(8);

  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowSlides(2);
      } else {
        setShowSlides(8);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Heading subtitle={t("OUR_ACHIEVEMENTS")} />
      <Carousel
        className="exampleCarousel1"
        show={showSlides}
        slide={1}
        swiping={true}
        autoSwipe={2000}
        leftArrow={false}
        rightArrow={false}
        responsive={true}
      >
        <img src={IMG} alt="" />
        <img src={IMG} alt="" />
        <img src={IMG} alt="" />
        <img src={IMG} alt="" />
        <img src={IMG} alt="" />
        <img src={IMG} alt="" />
        <img src={IMG} alt="" />
        <img src={IMG} alt="" />
        <img src={IMG} alt="" />
        <img src={IMG} alt="" />
        <img src={IMG} alt="" />
        <img src={IMG} alt="" />
        <img src={IMG} alt="" />
        <img src={IMG} alt="" />
      </Carousel>
    </>
  );
};

export default UnivesitySlider;
