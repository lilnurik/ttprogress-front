import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./footer.css";
import Form from "./Form";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { t, i18n } = useTranslation();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/main/contacts/")
      .then(response => response.json())
      .then(data => {
        setContacts(data);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      {currentPath !== "/contact" && <Form className="footer-form" />}
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>ACADEMIA</h1>
            <span>{t("ONLINE_EDUCATION_LEARNING")}</span>
            <p>{t("A_SMALL_RIVER_NAMED_DUDEN")}</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>{t("EXPLORE")}</h3>
            <ul>
              <li>{t("ABOUT_US_F")}</li>
              <li>{t("SERVICES_F")}</li>
              <li>{t("COURSES_F")}</li>
              <li>{t("BLOG")}</li>
              <li>{t("CONTACT_US")}</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>{t("QUICK_LINKS")}</h3>
            <ul>
              <li>{t("CONTACT_US")}</li>
              <li>{t("PRICING")}</li>
              <li>{t("TERMS_CONDITIONS")}</li>
              <li>{t("PRIVACY")}</li>
              <li>{t("FEEDBACKS")}</li>
            </ul>
          </div>
          
          <div className='box last'>
            <h3>{t("HAVE_A_QUESTIONS")}</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              {contacts.map(contact => (
                <li key={contact.id}>
                  <i className='fa fa-phone-alt'></i>
                  {contact.first_contact}
                </li>
              ))}
              {contacts.map(contact => (
                <li key={contact.id}>
                  <i className='fa fa-phone-alt'></i>
                  {contact.second_contact}
                </li>
              ))}
              <li>
                <i className='fa fa-paper-plane'></i>
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          {t("COPYRIGHT")} ©2024 {t("ALL_RIGHTS_RESERVED")} | {t("MADE_WITH_LOVE")} by Doppi-Dev.
        </p>
      </div>
    </>
  );
}

export default Footer;
