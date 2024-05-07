import React from 'react'
import Heading from '../common/heading/Heading'
import IMG from '../../assets/ttmap.png'
import { useTranslation } from "react-i18next";
import './map.css'

const Map = () => {

  const { t } = useTranslation();

  return (
    <div className='container-map'>
      <Heading subtitle={t('WE_ARE_ALWAYS_WITH_YOU')} title='' />
      <div className="map-img">
      <img src={IMG} alt="" />
      </div>
    </div>
  )
}

export default Map
