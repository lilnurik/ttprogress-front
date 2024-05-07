import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"
import Slide from "../slider/Slider"
import App from "../../App"
import CarouselExample from "../slider/Slider"
import MyApp from "../slider/Slider"
import Slider from "../slider/Slider"
import Services from "../ServicesCard/ServicesCard"
import Awrapper from "../about/Awrapper"
import Map from "../Map/Map"
import UnivesitySlider from "../UniversitySlider/UnivesitySlider"

const Home = () => {
  return (
    <>
      <Hero />
      <Awrapper />

      <Slider/>
      <Services/>
      <AboutCard />
      <Map/>
      <UnivesitySlider/>
      
    </>
  )
}

export default Home
