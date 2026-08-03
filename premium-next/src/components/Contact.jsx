"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import PrivacyFormNotice from "./PrivacyFormNotice";

export default function Contact() {
  const { t } = useLanguage();
  const assets = (path) => `/assets/${path}`;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Komfort Premium – ${formData.name}`);
    const body = encodeURIComponent(
      `Imię i nazwisko / Name: ${formData.name}\nE-mail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href = `mailto:rezerwacjepremium@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="kontakt"
      style={{
        backgroundColor: "#0c0c0c",
        color: "white",
        padding: "100px 0",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div
          className="contact-layout"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "stretch",
            gap: "0px",
          }}
        >
          {/* Left Column - Image */}
          <div className="contact-image-col" style={{ flex: "1 1 50%", minWidth: "300px" }}>
            <img
              src={assets("Projekt-bez-nazwy-2025-05-17T162727.238-1024x576.png")}
              alt="Contact"
              style={{ width: "90%", height: "auto", display: "block" }}
            />
          </div>

          {/* Right Column - Contact Details */}
          <div
            className="contact-info-col"
            style={{
              flex: "1 1 50%",
              minWidth: "300px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            {/* Title */}
            <h2
              style={{
                fontFamily: "var(--font-primary)",
                fontSize: "22px",
                fontWeight: 500,
                color: "#FFFFFF",
                marginBottom: "10px",
              }}
            >
              {t("Zamów-usługę")}
            </h2>

            {/* Phone */}
            <div className="contact-row">
              <div className="contact-row__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="28" height="28" fill="currentColor"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
              </div>
              <div className="contact-row__body">
                <div className="contact-row__label">
                  {t("Zadzwoń-lub-wyślij-sms")}
                </div>
                <a href="tel:+48533515202" className="contact-row__link">
                  +48 533 515 202
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="contact-row">
              <div className="contact-row__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="28" height="28" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
              </div>
              <div className="contact-row__body">
                <div className="contact-row__label">
                  {t("whatsapp-contact-label")}
                </div>
                <a
                  href="https://wa.me/48533515202"
                  className="contact-row__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("whatsapp-contact-cta")}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="contact-row">
              <div className="contact-row__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="28" height="28" fill="currentColor"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg>
              </div>
              <div className="contact-row__body">
                <div className="contact-row__label">E-mail:</div>
                <a
                  href="mailto:rezerwacjepremium@gmail.com"
                  className="contact-row__link"
                >
                  rezerwacjepremium@gmail.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="contact-row">
              <div className="contact-row__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="28" height="28" fill="currentColor"><path d="M384 476.1L192 421.2V35.9L384 90.8V476.1zm32-1.2V88.4L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3V394.6c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2V423.6L32.9 474.5C17.1 480.8 0 469.2 0 452.2V117.4c0-9.8 6-18.6 15.1-22.3z"/></svg>
              </div>
              <div className="contact-row__body">
                <div className="contact-row__label">{t("Obsługujemy")}</div>
                <div className="contact-row__text">{t("Obsługujemy-text")}</div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__field">
                <label htmlFor="contact-name">{t("contact-form-name")}</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contact-form-name-placeholder")}
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-email">{t("contact-form-email")}</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("contact-form-email-placeholder")}
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-message">{t("contact-form-message")}</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contact-form-message-placeholder")}
                />
              </div>

              <PrivacyFormNotice className="contact-form__notice" />

              <button type="submit" className="btn-gold contact-form__submit">
                {t("contact-form-submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
