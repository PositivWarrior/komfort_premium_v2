"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const assets = (path) => `/assets/${path}`;

  return (
    <footer
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        paddingTop: "60px",
        paddingBottom: "20px",
        fontFamily: "var(--font-primary)",
        fontSize: "15px",
        textAlign: "center",
      }}
    >
      {/* Main Footer Content */}
      <div
        className="footer-content"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "1140px",
          margin: "0 auto",
          padding: "0 20px",
          gap: "60px",
        }}
      >
        {/* LEFT COLUMN */}
        <div
          className="footer-left"
          style={{
            flex: "1 1 500px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <div style={{ marginBottom: "30px" }}>
            <img
              src={assets("logo-komofrt.png")}
              alt="Komfort Premium"
              width="250"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>

          {/* Description */}
          <div style={{ marginBottom: "30px", lineHeight: "1.6", color: "#e0e0e0" }}>
            <p>{t("pts-offers")}</p>
          </div>

          {/* Golden Divider */}
          <div
            style={{
              width: "200px",
              height: "2px",
              backgroundColor: "rgb(197, 163, 92)",
              margin: "0 auto 30px auto",
            }}
          />

          {/* Hours */}
          <div style={{ marginBottom: "30px", fontWeight: 400 }}>
            {t("Monday-friday")}
          </div>

          {/* Golden Divider */}
          <div
            style={{
              width: "200px",
              height: "2px",
              backgroundColor: "rgb(197, 163, 92)",
              margin: "0 auto 30px auto",
            }}
          />

          {/* Contact Info */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <a
              href="mailto:rezerwacjepremium@gmail.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                color: "white",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" fill="rgb(197, 163, 92)"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
              <span>rezerwacjepremium@gmail.com</span>
            </a>
            <a
              href="tel:+48533515202"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                color: "white",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" fill="rgb(197, 163, 92)"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
              <span>+48 533 515 202</span>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div
          className="footer-right"
          style={{
            flex: "1 1 300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Links Section */}
          <div
            style={{
              marginBottom: "40px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "normal",
                marginBottom: "10px",
                color: "white",
                fontFamily: "var(--font-primary)",
              }}
            >
              {t("Odnosniki")}
            </h3>
            <div
              style={{
                width: "100px",
                height: "2px",
                backgroundColor: "rgb(197, 163, 92)",
                marginBottom: "20px",
              }}
            />

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                alignItems: "center",
              }}
            >
              <li>
                <a href="#o-nas" style={{ textDecoration: "none", color: "white" }}>
                  {t("header-o-nas")}
                </a>
              </li>
              <li>
                <a href="#oferta" style={{ textDecoration: "none", color: "white" }}>
                  {t("offer")}
                </a>
              </li>
              <li>
                <a href="#flota" style={{ textDecoration: "none", color: "white" }}>
                  {t("Nasza-flota")}
                </a>
              </li>
              <li>
                <a href="#kontakt" style={{ textDecoration: "none", color: "white" }}>
                  {t("header-kontakt")}
                </a>
              </li>
            </ul>
          </div>

          {/* Instagram Section */}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "normal",
                marginBottom: "10px",
                color: "white",
                fontFamily: "var(--font-primary)",
              }}
            >
              Instagram
            </h3>
            <div
              style={{
                width: "100px",
                height: "2px",
                backgroundColor: "rgb(197, 163, 92)",
                marginBottom: "20px",
              }}
            />
            <a
              href="https://www.instagram.com/komfort_premium._?igsh=NGNtdDY5dTF2ZTJn&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#ffffff",
                fontSize: "24px",
                backgroundColor: "rgb(197, 163, 92)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="footer-row-container"
        style={{
          borderTop: "1px solid #333",
          marginTop: "60px",
          paddingTop: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1140px",
          margin: "60px auto 0 auto",
          padding: "20px 20px 0 20px",
          flexWrap: "wrap",
          fontSize: "14px",
          color: "#777",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={assets("logo-komofrt.png")}
            alt="Komfort Premium"
            width="100"
            style={{ opacity: 0.7 }}
          />
        </div>
        <div>NIP 8411626366</div>
      </div>
    </footer>
  );
}
