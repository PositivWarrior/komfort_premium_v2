"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const assets = (path) => `/assets/${path}`;

  return (
    <div
      data-elementor-type="wp-page"
      data-elementor-id="899"
      className="elementor elementor-899"
    >
        {/* We wrap the content in the original container structure */}
      <div
        className="elementor-element elementor-element-44fb991 e-flex e-con-boxed e-con e-parent e-lazyloaded"
        data-id="44fb991"
        data-element_type="container"
        data-settings='{"background_background":"slideshow"}' // truncated for cleanliness, swiper handling relies on legacy scripts for now
      >
        <div
            className="elementor-background-slideshow swiper swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events swiper-rtl swiper-watch-progress swiper-backface-hidden"
            dir="rtl"
        >
            <div className="swiper-wrapper">
                {/* Manual Slides for now - original logic used Elementor's JS to build this from JSON. 
                    Since we want "split code" but "working the same", we should ideally use a React Swiper.
                    For this pass, we will render the static HTML and hope the lazy-loaded legacy script picks it up, 
                    OR just render one static image as fallback if script fails. 
                    I'll render the static markup populated. */}
                <div className="elementor-background-slideshow__slide swiper-slide">
                    <div className="elementor-background-slideshow__slide__image" style={{backgroundImage: `url('${assets("Projekt-bez-nazwy-2025-05-17T162203.344.png")}')`}}></div>
                </div>
                 <div className="elementor-background-slideshow__slide swiper-slide">
                    <div className="elementor-background-slideshow__slide__image" style={{backgroundImage: `url('${assets("Projekt-bez-nazwy-2025-05-17T162727.238.png")}')`}}></div>
                </div>
                 <div className="elementor-background-slideshow__slide swiper-slide">
                    <div className="elementor-background-slideshow__slide__image" style={{backgroundImage: `url('${assets("Projekt-bez-nazwy-2025-05-17T163817.465.png")}')`}}></div>
                </div>
            </div>
            </div>
        
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-981fda0 premium-header-inline premium-lq__none premium-box-lq__none elementor-widget elementor-widget-premium-addon-dual-header"
            data-id="981fda0"
            data-element_type="widget"
            data-widget_type="premium-addon-dual-header.default"
          >
            <div className="elementor-widget-container">
              <h2 className="premium-dual-header-first-header">
                <span className="premium-dual-header-first-span">
                  {t('header1')}
                </span>
              </h2>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-9261ac1 elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
            data-id="9261ac1"
            data-element_type="widget"
            data-widget_type="text-editor.default"
          >
            <div className="elementor-widget-container">
              <p>
                <span>
                  {t('desc1')}
                </span>
              </p>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-40dc129 elementor-align-center elementor-mobile-align-left elementor-widget elementor-widget-button animated fadeIn"
            data-id="40dc129"
            data-element_type="widget"
            data-settings='{"_animation":"fadeIn","_animation_delay":400}'
            data-widget_type="button.default"
          >
            <div className="elementor-widget-container">
              <div className="elementor-button-wrapper">
                <a
                  className="elementor-button elementor-button-link elementor-size-sm"
                  href="#kontakt"
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
  );
}
