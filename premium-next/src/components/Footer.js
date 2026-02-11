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
              <i className="fas fa-envelope" style={{ color: "rgb(197, 163, 92)" }} />
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
              <i className="fas fa-phone-alt" style={{ color: "rgb(197, 163, 92)" }} />
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
              <i className="fab fa-facebook-f" />
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
