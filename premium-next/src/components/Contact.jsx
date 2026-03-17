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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="28" height="28" fill="currentColor"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="28" height="28" fill="currentColor"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="28" height="28" fill="currentColor"><path d="M384 476.1L192 421.2V35.9L384 90.8V476.1zm32-1.2V88.4L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3V394.6c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2V423.6L32.9 474.5C17.1 480.8 0 469.2 0 452.2V117.4c0-9.8 6-18.6 15.1-22.3z"/></svg>
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
