"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const GBFlag = () => (
  <svg width="24" height="16" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="40" fill="#012169"/>
    <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8"/>
    <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4"/>
    <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="12"/>
    <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="6"/>
  </svg>
);

const PLFlag = () => (
  <svg width="24" height="16" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="20" fill="#fff"/>
    <rect y="20" width="60" height="20" fill="#DC143C"/>
  </svg>
);

export default function Header() {
  const { t, lang, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const assets = (path) => `/assets/${path}`;

  const FlagIcon = lang === "pl" ? GBFlag : PLFlag;

  // Scroll listener — switch from fully transparent to semi-transparent
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // check on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="masthead"
      itemScope="itemscope"
      itemType="https://schema.org/WPHeader"
      style={{
        background: scrolled ? "rgba(0, 0, 0, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(10px)" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 9999,
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        transition: "background 0.3s ease, backdrop-filter 0.3s ease, border-bottom 0.3s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1140px",
          margin: "0 auto",
          padding: "8px 20px",
        }}
      >
        {/* LEFT - Logo */}
        <div>
          <a href="/" rel="home">
            <img
              width="250"
              src={assets("logo-komofrt.png")}
              className="custom-logo"
              alt="Komfort Premium"
              decoding="async"
              style={{ maxWidth: "160px", height: "auto" }}
            />
          </a>
        </div>

        {/* RIGHT - Navigation */}
        <div style={{ display: "flex", alignItems: "center" }}>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <ul
              style={{
                display: "flex",
                flexDirection: "row",
                listStyle: "none",
                padding: 0,
                margin: 0,
                alignItems: "center",
                gap: "25px",
              }}
            >
              <li>
                <a
                  href="#o-nas"
                  style={{
                    color: "#FFFFFF",
                    textDecoration: "none",
                    fontFamily: "var(--font-primary)",
                    fontSize: "15px",
                    fontWeight: 400,
                    letterSpacing: "0.3px",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "rgb(197, 163, 92)")}
                  onMouseLeave={(e) => (e.target.style.color = "#FFFFFF")}
                >
                  {t("header-o-nas")}
                </a>
              </li>
              <li>
                <a
                  href="#oferta"
                  style={{
                    color: "#FFFFFF",
                    textDecoration: "none",
                    fontFamily: "var(--font-primary)",
                    fontSize: "15px",
                    fontWeight: 400,
                    letterSpacing: "0.3px",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "rgb(197, 163, 92)")}
                  onMouseLeave={(e) => (e.target.style.color = "#FFFFFF")}
                >
                  {t("offer")}
                </a>
              </li>
              <li>
                <a
                  href="#flota"
                  style={{
                    color: "#FFFFFF",
                    textDecoration: "none",
                    fontFamily: "var(--font-primary)",
                    fontSize: "15px",
                    fontWeight: 400,
                    letterSpacing: "0.3px",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "rgb(197, 163, 92)")}
                  onMouseLeave={(e) => (e.target.style.color = "#FFFFFF")}
                >
                  {t("Nasza-flota")}
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  style={{
                    color: "#FFFFFF",
                    textDecoration: "none",
                    fontFamily: "var(--font-primary)",
                    fontSize: "15px",
                    fontWeight: 400,
                    letterSpacing: "0.3px",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "rgb(197, 163, 92)")}
                  onMouseLeave={(e) => (e.target.style.color = "#FFFFFF")}
                >
                  {t("header-kontakt")}
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    console.log("Language toggle clicked, current:", lang);
                    toggleLanguage();
                  }}
                  aria-label="Toggle language"
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.25)",
                    borderRadius: "4px",
                    cursor: "pointer",
                    padding: "4px 8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#fff",
                    fontSize: "12px",
                    fontFamily: "var(--font-primary)",
                    transition: "border-color 0.3s ease",
                  }}
                >
                  <FlagIcon />
                  <span>{lang === "pl" ? "EN" : "PL"}</span>
                </button>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/komfort_premium._?igsh=NGNtdDY5dTF2ZTJn&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{
                    color: "#FFFFFF",
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "rgb(197, 163, 92)")}
                  onMouseLeave={(e) => (e.target.style.color = "#FFFFFF")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  className="btn-gold"
                  style={{
                    padding: "10px 28px",
                    fontSize: "13px",
                    letterSpacing: "0.9px",
                    marginLeft: "5px",
                  }}
                >
                  {t("book-a-ride")}
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-toggle"
            aria-label="Menu"
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontSize: "28px",
              cursor: "pointer",
            }}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="24" height="24" fill="currentColor"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" fill="currentColor"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <nav
          className="mobile-menu"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.95)",
            padding: "20px 0",
          }}
        >
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              listStyle: "none",
              padding: 0,
              gap: "20px",
              textAlign: "center",
            }}
          >
            <li>
              <a
                href="#o-nas"
                onClick={() => setIsMenuOpen(false)}
                style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
              >
                {t("header-o-nas")}
              </a>
            </li>
            <li>
              <a
                href="#oferta"
                onClick={() => setIsMenuOpen(false)}
                style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
              >
                {t("offer")}
              </a>
            </li>
            <li>
              <a
                href="#flota"
                onClick={() => setIsMenuOpen(false)}
                style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
              >
                {t("Nasza-flota")}
              </a>
            </li>
            <li>
              <a
                href="#kontakt"
                onClick={() => setIsMenuOpen(false)}
                style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
              >
                {t("header-kontakt")}
              </a>
            </li>
            <li style={{ display: "flex", justifyContent: "center" }}>
              <button
                type="button"
                onClick={() => { toggleLanguage(); setIsMenuOpen(false); }}
                aria-label="Toggle language"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.25)",
                  borderRadius: "4px",
                  cursor: "pointer",
                  padding: "6px 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#fff",
                  fontSize: "14px",
                  fontFamily: "var(--font-primary)",
                }}
              >
                <FlagIcon />
                <span>{lang === "pl" ? "EN" : "PL"}</span>
              </button>
            </li>
            <li style={{ display: "flex", justifyContent: "center" }}>
              <a
                href="https://www.instagram.com/komfort_premium._?igsh=NGNtdDY5dTF2ZTJn&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                onClick={() => setIsMenuOpen(false)}
                style={{ color: "white", fontSize: "20px" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
              </a>
            </li>
            <li>
              <a
                href="#kontakt"
                className="btn-gold"
                style={{ padding: "12px 30px", fontSize: "14px" }}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("book-a-ride")}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
