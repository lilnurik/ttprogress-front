import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Back from "../common/back/Back";
import "./contact.css";
import Heading from "../common/heading/Heading";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.560917616659!2d69.2966940765519!3d41.31841470027002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5d6934c904f%3A0x115045946fc92d8b!2sTUT%20Workspace!5e0!3m2!1sru!2s!4v1714153603027!5m2!1sru!2s";
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
      <Heading subtitle={t("CONTACT_US_C")} />
      {/* <Back title={t("CONTACT_US")} /> */}

      <section className="contacts">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe className="map" src={map} title={t("MAP")} />
          </div>
          <div className="right row">
            <h1>{t("CONTACT_US")}</h1>
            <p>{t("WE_ARE_OPEN_FOR_ANY_SUGGESTION")}</p>

            <div className="items grid2">
              <div className="box">
                <h4>{t("ADDRESS")}</h4>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
              <div className="box">
                <h4>{t("EMAIL")}</h4>
                <p>info@yoursite.com</p>
              </div>
              {contacts.map(contact => (
              <div className="box">
                <h4>{t("PHONE")}</h4>
                <p>{contact.first_contact}</p>
                <p>{contact.second_contact}</p>
              </div>
              ))}
            </div>

            <form action="">
              <div className="flexSB">
                <input type="text" placeholder={t("NAME")} />
                <input type="email" placeholder={t("EMAIL")} />
              </div>
              <input type="text" placeholder={t("SUBJECT")} />
              <textarea cols="30" rows="10">
                {t("CREATE_A_MESSAGE_HERE")}
              </textarea>
              <button className="primary-btn">{t("SEND_MESSAGE")}</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
