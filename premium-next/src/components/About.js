"use client";

import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const assets = (path) => `/assets/${path}`;

  return (
    <div className="e-con-inner">
      <div
        className="elementor-element elementor-element-887d07e elementor-widget__width-inherit elementor-invisible elementor-widget elementor-widget-text-editor"
        data-id="887d07e"
        data-element_type="widget"
        data-settings='{"_animation":"fadeIn"}'
        data-widget_type="text-editor.default"
      >
        <div
          className="elementor-widget-container"
          data-trans="lodz-and-surroundings"
        >
          <p>{t('lodz-and-surroundings')}</p>
        </div>
      </div>
      <div
        className="elementor-element elementor-element-d603e27 elementor-widget__width-initial premium-header-inline premium-lq__none premium-box-lq__none elementor-widget elementor-widget-premium-addon-dual-header"
        data-id="d603e27"
        data-element_type="widget"
        id="oferta"
        data-widget_type="premium-addon-dual-header.default"
      >
        <div className="elementor-widget-container">
          <h2 className="premium-dual-header-first-header">
            <span
              className="premium-dual-header-first-span"
              data-trans="why-clients-choose-us"
            >
              {t('why-clients-choose-us')}
            </span>
            <span
              className="premium-dual-header-second-header"
              data-trans="why-clients-choose-us-text"
            >
              {t('why-clients-choose-us-text')}
            </span>
          </h2>
        </div>
      </div>
      <div
        className="elementor-element elementor-element-925380c elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
        data-id="925380c"
        data-element_type="widget"
        data-widget_type="divider.default"
      >
        <div className="elementor-widget-container">
          <div className="elementor-divider">
            <span className="elementor-divider-separator"></span>
          </div>
        </div>
      </div>
      <div className="elementor-widget-container">
        <p style={{color: "#fff", fontWeight: 300, fontSize: "16px", lineHeight: 1.6, marginTop: "20px", textAlign: "center"}}>
          <span data-trans="our-vehicles">
            {t('our-vehicles')}
          </span>
        </p>
      </div>
      
      {/* WHO WE SERVE Section (4 Boxes) */}
       <div
        className="elementor-element elementor-element-d603e27 elementor-widget__width-initial premium-header-inline premium-lq__none premium-box-lq__none elementor-widget elementor-widget-premium-addon-dual-header"
        data-id="d603e27" // ID reused in HTML, but consistent
        data-element_type="widget"
        style={{marginTop: '50px'}}
    >
        <div className="elementor-widget-container">
            <h2 className="premium-dual-header-first-header">
                <span
                    className="premium-dual-header-first-span"
                    data-trans="who-do-we-serve"
                >
                    {t('who-do-we-serve')}
                </span>
                <span 
                    className="premium-dual-header-second-header"
                    data-trans="who-do-we-serve-text">
                    {t('who-do-we-serve-text')}
                </span>
            </h2>
        </div>
    </div>

    {/* Using a grid layout to mock the e-con-full e-flex layout for the boxes */}
    <div className="elementor-element e-con-boxed e-con e-parent" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '30px'}}>
        
        {/* Box 1 */}
        <div className="elementor-element e-child" style={{width: '300px', margin: '10px'}}>
             <div className="elementor-widget-container">
                <figure className="elementor-image-box-img">
                    <img
                        decoding="async"
                        width="500"
                        height="300"
                        src={assets("Projekt-bez-nazwy-2025-05-18T210741.764.png")}
                        className="attachment-full size-full"
                        alt=""
                    />
                </figure>
                <div className="elementor-image-box-content">
                    <h3 className="elementor-image-box-title" data-trans="companies-and-corporations">
                        {t('companies-and-corporations')}
                    </h3>
                    <p className="elementor-image-box-description" data-trans="companies-and-corporations-text">
                        {t('companies-and-corporations-text')}
                    </p>
                </div>
            </div>
        </div>

         {/* Box 2 */}
         <div className="elementor-element e-child" style={{width: '300px', margin: '10px'}}>
             <div className="elementor-widget-container">
                <figure className="elementor-image-box-img">
                    <img
                        decoding="async"
                        width="500"
                        height="300"
                        src={assets("Projekt-bez-nazwy-2025-05-18T205829.712.png")}
                        className="attachment-full size-full"
                        alt=""
                    />
                </figure>
                <div className="elementor-image-box-content">
                    <h3 className="elementor-image-box-title" data-trans="Individuals">
                         {t('Individuals')}
                    </h3>
                    <p className="elementor-image-box-description" data-trans="Individuals-text">
                        {t('Individuals-text')}
                    </p>
                </div>
            </div>
        </div>

         {/* Box 3 */}
         <div className="elementor-element e-child" style={{width: '300px', margin: '10px'}}>
             <div className="elementor-widget-container">
                <figure className="elementor-image-box-img">
                    <img
                        decoding="async"
                        width="500"
                        height="300"
                        src={assets("Projekt-bez-nazwy-2025-05-18T210651.483.png")}
                         className="attachment-full size-full"
                        alt=""
                    />
                </figure>
                <div className="elementor-image-box-content">
                    <h3 className="elementor-image-box-title" data-trans="Event-agencies-and-hotels">
                         {t('Event-agencies-and-hotels')}
                    </h3>
                    <p className="elementor-image-box-description" data-trans="Event-agencies-and-hotels-text">
                         {t('Event-agencies-and-hotels-text')}
                    </p>
                </div>
            </div>
        </div>

         {/* Box 4 */}
         <div className="elementor-element e-child" style={{width: '300px', margin: '10px'}}>
             <div className="elementor-widget-container">
                <figure className="elementor-image-box-img">
                    <img
                        decoding="async"
                        width="500"
                        height="300"
                        src={assets("Projekt-bez-nazwy-2025-05-18T205829.712.png")}
                         className="attachment-full size-full"
                        alt=""
                    />
                </figure>
                <div className="elementor-image-box-content">
                    <h3 className="elementor-image-box-title" data-trans="Foreign-guests">
                        {t('Foreign-guests')}
                    </h3>
                    <p className="elementor-image-box-description" data-trans="Foreign-guests-text">
                        {t('Foreign-guests-text')}
                    </p>
                </div>
            </div>
        </div>

    </div>
    </div>
  );
}
