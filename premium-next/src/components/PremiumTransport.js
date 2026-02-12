"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function PremiumTransport() {
  const { t } = useLanguage();
  const assets = (path) => `/assets/${path}`;

  const slides = [
    assets("Projekt-bez-nazwy-2025-05-17T162203.344.png"),
    assets("Projekt-bez-nazwy-2025-05-17T162727.238.png"),
    assets("Projekt-bez-nazwy-2025-05-17T163817.465.png"),
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "634px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        overflow: "hidden",
        marginTop: "100px",
      }}
    >
      {/* Background Slideshow with Fade Effect - Full Width */}
      <div className="hero-slideshow">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === activeSlide ? "active" : ""}`}
            style={{ backgroundImage: `url('${slide}')` }}
          />
        ))}
        {/* Radial gradient overlay matching reference */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "radial-gradient(at center center, rgba(0,0,0,0.45) 0%, #080808 80%)",
            zIndex: 1,
          }}
        />
      </div>

      <div
        style={{
          maxWidth: "1030px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
          padding: "70px 25px 30px 25px",
        }}
      >
        {/* Section Label */}
        <div className="section-label" style={{ color: "#ffffff", marginBottom: "5px" }}>
          MASZ PYTANIA?
        </div>

        {/* Title */}
        <h2
          className="section-title"
          style={{
            fontSize: "50px",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          {t("Potrzebujesz-transportu-premium")}{" "}
          <strong style={{ fontWeight: 600 }}>{t("Skontaktuj-się-z-nami")}</strong>
        </h2>

        {/* Gold Divider */}
        <div className="gold-divider" style={{ margin: "2px auto" }} />

        {/* Description */}
        <p
          style={{
            fontFamily: "var(--font-primary)",
            fontSize: "20px",
            fontWeight: 300,
            lineHeight: 1.6,
            color: "#FFFFFF",
            marginTop: "15px",
            padding: "0 10em",
          }}
        >
          {t("Skontaktuj-się-z-nami-text")}
        </p>

        {/* CTA Button */}
        <div style={{ marginTop: "30px" }}>
          <a className="btn-gold" href="#kontakt">
            {t("book-a-ride") || "Zamów przejazd"}
          </a>
        </div>
      </div>
    </section>
  );
}
