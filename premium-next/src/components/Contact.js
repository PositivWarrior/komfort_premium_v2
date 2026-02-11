"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const assets = (path) => `/assets/${path}`;

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
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "stretch",
            gap: "0px",
          }}
        >
          {/* Left Column - Image */}
          <div style={{ flex: "1 1 50%", minWidth: "300px" }}>
            <img
              src={assets("Projekt-bez-nazwy-2025-05-17T162727.238-1024x576.png")}
              alt="Contact"
              style={{ width: "90%", height: "auto", display: "block" }}
            />
          </div>

          {/* Right Column - Contact Details */}
          <div
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
            <div
              style={{
                display: "flex",
                gap: "24px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  color: "rgb(197, 163, 92)",
                  fontSize: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <i className="fa-solid fa-phone" />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-primary)",
                    fontWeight: 600,
                    fontSize: "16px",
                    marginBottom: "1px",
                    color: "#FFFFFF",
                  }}
                >
                  {t("Zadzwoń-lub-wyślij-sms")}
                </div>
                <a
                  href="tel:+48533515202"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "16px",
                  }}
                >
                  +48 533 515 202
                </a>
              </div>
            </div>

            {/* Email */}
            <div
              style={{
                display: "flex",
                gap: "24px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  color: "rgb(197, 163, 92)",
                  fontSize: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <i className="fa-regular fa-comment" />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-primary)",
                    fontWeight: 600,
                    fontSize: "16px",
                    marginBottom: "1px",
                    color: "#FFFFFF",
                  }}
                >
                  E-mail:
                </div>
                <a
                  href="mailto:rezerwacjepremium@gmail.com"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "16px",
                  }}
                >
                  rezerwacjepremium@gmail.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div
              style={{
                display: "flex",
                gap: "24px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  color: "rgb(197, 163, 92)",
                  fontSize: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <i className="fa-regular fa-map" />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-primary)",
                    fontWeight: 600,
                    fontSize: "16px",
                    marginBottom: "1px",
                    color: "#FFFFFF",
                  }}
                >
                  {t("Obsługujemy")}
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.5,
                    color: "#FFFFFF",
                  }}
                >
                  {t("Obsługujemy-text")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
