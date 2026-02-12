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

          {/* Facebook Section */}
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
              Facebook
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
              href="https://www.facebook.com/profile.php?id=61577157325909&locale=pl_PL"
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="16" height="16" fill="currentColor"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
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
