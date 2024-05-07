import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import { useTranslation } from "react-i18next"

const Hero = () => {

  const { t, i18n } = useTranslation();


  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle={t('WELCOME TO ACADEMIA')} title={t('Best Online Education Expertise')}  />
            <p>{t('Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.')}</p>
            <div className='button'>
              <button className='primary-btn'>
                {t('GET STARTED NOW' )}<i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                {t('VIEW COURSE' )}<i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
