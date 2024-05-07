import React from "react";
import Heading from "../common/heading/Heading";
import "./about.css";
import { useTranslation } from "react-i18next";
import IMG from "../../assets/2024-03-29 16.24 1.png";
import TeamSlider from "../TeamSlider/TeamSlider";
import Slider from '../slider/Slider'

const AboutCard = () => {
  const { t } = useTranslation();

  return (
    <>
    <section className="aboutHome">
      <div className="container flexSB">
        <div className="right row">
          <Heading subtitle={t("ABOUT_US")} title={t("HELLO_MESSAGE")} />
          <div className="items">
            <p style={{ fontWeight: "bold" }}>{t("INTRO_TEXT_1")}</p>
            <div style={{ fontSize: "14.5px" }}>{t("INTRO_TEXT_2")}</div>
            <br />
            <p style={{ fontWeight: "bold" }}>{t("INTRO_TEXT_3")}</p>
            <div style={{ fontSize: "14.5px" }}>{t("INTRO_TEXT_4")}</div>
            <br />
            <p style={{ fontWeight: "bold" }}>{t("INTRO_TEXT_5")}</p>
            <div style={{ fontSize: "14.5px" }}>{t("INTRO_TEXT_6")}</div>
            <br />
          </div>
        </div>
        <div className="left row">
          <img src={IMG} alt="" />
        </div>
      </div>
      <div className="container flexSB">
        <div className="left row">
          <img src={IMG} alt="" />
        </div>
        <div className="right row">
          <Heading subtitle={t("MEET_OUR_CURATORS")} title="Meet Our curators" />
          <div className="items">
            <div style={{ fontSize: "14.5px" }}>{t("CURATORS_INFO_1")}</div>
            <br />
            <div style={{ fontSize: "14.5px" }}>{t("CURATORS_INFO_2")}</div>
            <br />
            <div style={{ fontSize: "14.5px" }}>{t("CURATORS_INFO_3")}</div>
            <br />
          </div>
        </div>
      </div>
    </section>
    <TeamSlider/>
    </>
  );
};

export default AboutCard;
