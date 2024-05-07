import React from "react";
import { useTranslation } from "react-i18next";
import IMG from "../../assets/logo.png";
import Heading from "../common/heading/Heading";
import './ServicesCard.css'

const Services = () => {
  const { t } = useTranslation();

  return (
    <>
      <Heading subtitle={t("SERVICES")} />
      <div className="services-container">
        <div className="service-card borders">
          <img src={IMG} alt="#" />
          <h3>
            {t("FREE_CONSULTATION_TITLE")}
          </h3>
          <p>
            {t("FREE_CONSULTATION_DESCRIPTION")}
          </p>
        </div>

        <div className="service-card borders">
          <img src={IMG} alt="#" />
          <h3>
            {t("COMPLETE_ACCOMPANIMENT_TITLE")}
          </h3>
          <p>
            {t("COMPLETE_ACCOMPANIMENT_DESCRIPTION")}
          </p>
        </div>

        <div className="service-card borders">
          <img src={IMG} alt="#" />
          <h3>
            {t("INDIVIDUAL_SELECTION_TITLE")}
          </h3>
          <p>
            {t("INDIVIDUAL_SELECTION_DESCRIPTION")}
          </p>
        </div>

        <div className="service-card borders">
          <img src={IMG} alt="#" />
          <h3>
            {t("HELP_WITH_PREPARATION_TITLE")}
          </h3>
          <p>
            {t("HELP_WITH_PREPARATION_DESCRIPTION")}
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
