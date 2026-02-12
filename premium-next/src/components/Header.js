"use client";

import { useState } from "react";
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

  const assets = (path) => `/assets/${path}`;

  const FlagIcon = lang === "pl" ? GBFlag : PLFlag;

  return (
    <header
      id="masthead"
      itemScope="itemscope"
      itemType="https://schema.org/WPHeader"
      style={{
        background: "rgba(0, 0, 0, 0.6)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 9999,
        borderBottom: "none",
      }}
    >
      <div
        className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1140px",
          margin: "0 auto",
          padding: "15px 20px",
        }}
      >
        {/* LEFT - Logo */}
        <div className="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
          <div
            className="ast-builder-layout-element ast-flex site-header-focus-item"
            data-section="title_tagline"
          >
            <div className="site-branding">
              <div className="ast-site-identity" itemScope="itemscope" itemType="https://schema.org/Organization">
                <span className="site-logo-img">
                  <a href="/" className="custom-logo-link" rel="home">
                    <img
                      width="250"
                      src={assets("logo-komofrt.png")}
                      className="custom-logo"
                      alt="Komfort Premium"
                      decoding="async"
                      style={{ maxWidth: "200px", height: "auto" }}
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT - Navigation */}
        <div className="site-header-primary-section-right site-header-section ast-flex ast-flex-align-right site-header-section-right">

          {/* Desktop Nav */}
          <nav
            className="main-header-menu desktop-nav"
            style={{
              display: isMenuOpen ? "flex" : undefined,
            }}
          >
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
                    fontSize: "16px",
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
                    fontSize: "16px",
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
                    fontSize: "16px",
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
                    fontSize: "16px",
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
                  onClick={toggleLanguage}
                  aria-label="Toggle language"
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: "5px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FlagIcon />
                </button>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61577157325909&locale=pl_PL"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="16" height="16" fill="currentColor"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  className="btn-gold"
                  style={{
                    padding: "12px 30px",
                    fontSize: "14px",
                    letterSpacing: "0.9px",
                    marginLeft: "10px",
                  }}
                >
                  {t("book-a-ride")}
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <button
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
                onClick={() => { toggleLanguage(); setIsMenuOpen(false); }}
                aria-label="Toggle language"
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FlagIcon />
              </button>
            </li>
            <li style={{ display: "flex", justifyContent: "center" }}>
              <a
                href="https://www.facebook.com/profile.php?id=61577157325909&locale=pl_PL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                onClick={() => setIsMenuOpen(false)}
                style={{ color: "white", fontSize: "20px" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="16" height="16" fill="currentColor"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
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

      {/* Media queries moved to globals.css for reliability */}
    </header>
  );
}
