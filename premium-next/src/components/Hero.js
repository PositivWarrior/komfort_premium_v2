"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
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
    <div
      data-elementor-type="wp-page"
      data-elementor-id="899"
      className="elementor elementor-899"
    >
      <div
        className="elementor-element elementor-element-44fb991 e-flex e-con-boxed e-con e-parent e-lazyloaded"
        data-id="44fb991"
        data-element_type="container"
        style={{
          position: "relative",
          minHeight: "792px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Slideshow with Fade Effect */}
        <div className="hero-slideshow">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide ${index === activeSlide ? "active" : ""}`}
              style={{ backgroundImage: `url('${slide}')` }}
            />
          ))}
          {/* Dark overlay */}
          <div className="hero-overlay" />
        </div>

        <div
          className="e-con-inner"
          style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 20px" }}
        >
          {/* Main Title */}
          <div
            className="elementor-element elementor-element-981fda0 premium-header-inline elementor-widget elementor-widget-premium-addon-dual-header"
            data-id="981fda0"
            data-element_type="widget"
          >
            <div className="elementor-widget-container" style={{ textAlign: "center" }}>
              <h2 className="premium-dual-header-first-header">
                <span
                  className="premium-dual-header-first-span hero-title-span"
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: "74px",
                    fontWeight: 100,
                    color: "#FFFFFF",
                    display: "inline",
                  }}
                >
                  {t("header1")}
                </span>
              </h2>
            </div>
          </div>

          {/* Description */}
          <div
            className="elementor-element elementor-element-9261ac1 elementor-widget elementor-widget-text-editor"
            data-id="9261ac1"
            data-element_type="widget"
          >
            <div
              className="elementor-widget-container"
              style={{ textAlign: "center", padding: "0 10em", marginTop: "20px" }}
            >
              <p
                style={{
                  color: "#FFFFFF",
                  fontFamily: 'var(--font-primary)',
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: 1.6,
                }}
              >
                {t("desc1")}
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div
            className="elementor-element elementor-element-40dc129 elementor-align-center elementor-widget elementor-widget-button"
            data-id="40dc129"
            data-element_type="widget"
            style={{ marginTop: "30px" }}
          >
            <div className="elementor-widget-container">
              <div className="elementor-button-wrapper">
                <a className="btn-gold" href="#kontakt">
                  {t("book-a-ride")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
