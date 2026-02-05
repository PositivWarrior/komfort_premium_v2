"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { t, lang, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper to construct image paths
  const assets = (path) => `/assets/${path}`;

  return (
    <header
      id="masthead"
      itemScope="itemscope"
      itemType="https://schema.org/WPHeader"
      style={{ background: "rgba(0, 0, 0, 0.6)" }}
    >
      <p class="main-title bhf-hidden" itemProp="headline">
        <a
          id="header1"
          href="https://viptaxipoznan.pl/"
          title="Przewozy VIP Poznań"
          rel="home"
        >
          {t('header1')}
        </a>
      </p>
      <div
        data-elementor-type="wp-post"
        data-elementor-id="2685"
        className="elementor elementor-2685"
      >
        <div
          className="elementor-element elementor-element-21524674 e-flex e-con-boxed e-con e-parent e-lazyloaded"
          data-id="21524674"
          data-element_type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div className="e-con-inner" style={{ flexWrap: "nowrap" }}>
            {/* Logo Section */}
            <div
              className="elementor-element elementor-element-5e45c7d6 e-con-full e-flex e-con e-child"
              data-id="5e45c7d6"
              data-element_type="container"
            >
              <div
                className="elementor-element elementor-element-6153a548 elementor-widget elementor-widget-image"
                data-id="6153a548"
                data-element_type="widget"
                data-widget_type="image.default"
              >
                <div className="elementor-widget-container">
                  <a href="/">
                    <img
                      fetchPriority="high"
                      width="540"
                      height="230"
                      src={assets("logo-komofrt.png")}
                      className="attachment-large size-large wp-image-2759"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation Section */}
            <div
              className="elementor-element elementor-element-521441ce e-con-full e-flex e-con e-child"
              data-id="521441ce"
              data-element_type="container"
            >
              <div
                className="elementor-element elementor-element-76ac228 hfe-nav-menu__align-center hfe-submenu-icon-arrow hfe-submenu-animation-none hfe-link-redirect-child hfe-nav-menu__breakpoint-tablet elementor-widget elementor-widget-navigation-menu"
                data-id="76ac228"
                data-element_type="widget"
                data-widget_type="navigation-menu.default"
              >
                <div className="elementor-widget-container">
                  <div
                    className="hfe-nav-menu hfe-layout-horizontal hfe-nav-menu-layout horizontal hfe-pointer__none"
                    data-layout="horizontal"
                  >
                    {/* Menu Toggle for Mobile */}
                    <div
                      role="button"
                      className={`hfe-nav-menu__toggle elementor-clickable ${isMenuOpen ? "hfe-active-menu" : ""}`}
                      tabIndex="0"
                      aria-label="Menu Toggle"
                      aria-haspopup="true"
                      aria-expanded={isMenuOpen}
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <span className="screen-reader-text">Menu</span>
                      <div className="hfe-nav-menu-icon">
                        {isMenuOpen ? (
                             <i className="fas fa-times"></i>
                        ) : (
                             <svg
                                aria-hidden="true"
                                className="e-font-icon-svg e-fas-align-justify"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path d="M432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
                            </svg>
                        )}
                      </div>
                    </div>

                    {/* Menu Links */}
                    <nav
                      className={`hfe-nav-menu__layout-horizontal hfe-nav-menu__submenu-arrow ${isMenuOpen ? "sub-menu-open" : ""}`} // Add class to show menu if open, though original CSS might rely on JS slideToggle.
                      data-full-width="yes"
                      style={{ display: isMenuOpen ? "block" : "" }} /* Simple React inline toggle */
                    >
                      <ul id="menu-1-76ac228" className="hfe-nav-menu">
                        <li className="menu-item menu-item-type-custom menu-item-object-custom current_page_item menu-item-home parent hfe-creative-menu">
                          <a href="#o-nas" className="hfe-menu-item">
                            {t('header-o-nas')}
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom parent hfe-creative-menu">
                          <a href="#oferta" className="hfe-menu-item">
                            {t('offer')}
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom parent hfe-creative-menu">
                          <a href="#flota" className="hfe-menu-item">
                            {t('Nasza-flota')}
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom current_page_item menu-item-home parent hfe-creative-menu">
                          <a href="#kontakt" className="hfe-menu-item">
                            {t('header-kontakt')}
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            {/* Language Switcher and CTA */}
            <div
              className="elementor-element elementor-element-5915f682 e-con-full e-flex e-con e-child"
              style={{ width: "29%" }}
              data-id="5915f682"
              data-element_type="container"
            >
              <a
                className="lang-flag"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleLanguage();
                }}
              >
                <img
                  id="flag-img"
                  src={lang === 'pl' ? "https://flagcdn.com/gb.svg" : "https://flagcdn.com/pl.svg"}
                  alt={lang === 'pl' ? "English" : "Polski"}
                  style={{
                    width: "40px",
                    height: "28px",
                    verticalAlign: "middle",
                    borderRadius: "2px",
                    marginRight: "60px",
                  }}
                />
              </a>

              <div
                className="elementor-element elementor-hidden-tablet elementor-hidden-mobile elementor-element-8b98709 elementor-align-center elementor-mobile-align-left elementor-widget elementor-widget-button animated fadeIn"
                data-id="8b98709"
                data-element_type="widget"
                data-settings='{"_animation":"fadeIn","_animation_delay":400}'
                data-widget_type="button.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a
                      className="elementor-button elementor-button-link elementor-size-sm"
                      href="tel:+48533515202"
                    >
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">
                           {t('book-a-ride')}
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
