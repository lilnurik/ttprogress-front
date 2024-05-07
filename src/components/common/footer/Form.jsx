import React from "react";
import "./Form.css"; // Make sure to create a Form.css file in the same directory
import IMG from '../../../assets/2024-03-29 16.24 1.png'
import { useTranslation } from "react-i18next";

const Form = () => {
  const { t, i18n } = useTranslation();

  let namingText = "";
  let placeholderName = "";
  let placeholderEmail = "";
  let placeholderPhone = "";
  let placeholderLevel = "";
  let placeholderIELTS = "";
  let placeholderCountry = "";
  let buttonText = "";

  if (i18n.language === 'ru') {
    namingText = "Мс. Турсуной";
    placeholderName = "Имя";
    placeholderEmail = "Эл. почта";
    placeholderPhone = "Телефон";
    placeholderLevel = "Уровень студента";
    placeholderIELTS = "IELTS";
    placeholderCountry = "Страна для подачи";
    buttonText = "Отправить →";
  } else if (i18n.language === 'uz') {
    namingText = "Мс. Турсуной";
    placeholderName = "Ism";
    placeholderEmail = "Elektron pochta";
    placeholderPhone = "Telefon";
    placeholderLevel = "O'quvchining darajasi";
    placeholderIELTS = "IELTS";
    placeholderCountry = "Ariza yuborish uchun mamlakat";
    buttonText = "Yuborish →";
  } else {
    namingText = "Ms. Tursunoy";
    placeholderName = "Name";
    placeholderEmail = "Email";
    placeholderPhone = "Phone";
    placeholderLevel = "Student Level";
    placeholderIELTS = "IELTS";
    placeholderCountry = "Country for application";
    buttonText = "SUBMIT →";
  }

  return (
    <div className="form-container">
      <div className="profile-section">
        <img
          src={IMG}
          alt="Ms. Tursunoy"
          className="profile-image"
        />
        <div className="naming">
          <h2 style={{ color: "white" }}>{namingText}</h2>
          <p>SEO & Consultant</p>
          <p style={{ color: "white" }}>{t("LEAVE_YOUR_CONTACTS")}</p>
        </div>
      </div>
      <form className="contact-form">
        <div className="grid-container">
          <input type="text" placeholder={placeholderName} />
          <input type="email" placeholder={placeholderEmail} />
          <input type="tel" placeholder={placeholderPhone} />
          <input type="text" placeholder={placeholderLevel} />
          <input type="text" placeholder={placeholderIELTS} />
          <input type="text" placeholder={placeholderCountry} />
        </div>
        <button type="submit">{buttonText}</button>
      </form>
    </div>
  );
};

export default Form;
