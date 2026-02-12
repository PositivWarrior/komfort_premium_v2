"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  const assets = (path) => `/assets/${path}`;

  const [activeIndex, setActiveIndex] = useState(0);

  const faqItems = [
    {
      questionKey: "Jak-wcześnie-muszę-zarezerwować-przejazd?",
      answerKey: "Jak-wcześnie-muszę-zarezerwować-przejazd?-text",
    },
    {
      questionKey: "Czy-obsługujecie-tylko-klientów-z-Łodzi?",
      answerKey: "Czy-obsługujecie-tylko-klientów-z-Łodzi?-text",
    },
    {
      questionKey: "Jak-wygląda-rezerwacja?",
      answerKey: "Jak-wygląda-rezerwacja?-text",
    },
    {
      questionKey: "Czy-mogę-zarezerwować-przejazd-dla-kilku-osób?",
      answerKey: "Czy-mogę-zarezerwować-przejazd-dla-kilku-osób?-text",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      style={{
        backgroundColor: "#0e0e0e",
        color: "white",
        paddingTop: "80px",
        paddingBottom: "0px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0px",
          }}
        >
          {/* Left Column - Image */}
          <div
            style={{
              flex: "1 1 50%",
              minWidth: "300px",
              position: "relative",
            }}
          >
            <div style={{ position: "relative", zIndex: 1, overflow: "hidden", height: "100%" }}>
              <img
                src={assets("0E0E0E-1-1024x1024.png")}
                alt="Chauffeur"
                style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "400px" }}
              />
            </div>
          </div>

          {/* Right Column - FAQ Content */}
          <div
            style={{
              flex: "1 1 50%",
              minWidth: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 0 0 40px",
            }}
          >
            {/* Section Label + Title */}
            <div style={{ marginBottom: "30px" }}>
              <div className="section-label" style={{ marginBottom: "5px" }}>FAQ</div>
              <h2 className="section-title" style={{ textAlign: "left", marginTop: "20px" }}>
                {t("Najczęstsze-pytania").split(" ")[0]}{" "}
                <strong>{t("Najczęstsze-pytania").split(" ").slice(1).join(" ")}</strong>
              </h2>
            </div>

            {/* Accordion Items */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {faqItems.map((item, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div
                    key={index}
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.19)",
                    }}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "white",
                        cursor: "pointer",
                        fontFamily: "var(--font-primary)",
                        fontSize: "16px",
                        fontWeight: 400,
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        textAlign: "left",
                        padding: "21px 0",
                        outline: "none",
                        gap: "15px",
                      }}
                    >
                      <span
                        style={{
                          color: "rgb(197, 163, 92)",
                          fontSize: "15px",
                          flexShrink: 0,
                          transition: "transform 0.3s ease",
                        }}
                      >
                        {isOpen ? "—" : "+"}
                      </span>
                      {t(item.questionKey)}
                    </button>

                    <div
                      className="faq-answer-wrap"
                      data-open={isOpen ? "true" : "false"}
                    >
                      <div className="faq-answer-inner">
                        <div
                          style={{
                            padding: "25px",
                            fontFamily: "var(--font-primary)",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: 1.6,
                            color: "#FFFFFF",
                          }}
                        >
                          {t(item.answerKey)}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div style={{ marginTop: "30px" }}>
              <a className="btn-gold" href="#kontakt">
                {t("book-a-ride") || "Zamów przejazd"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
