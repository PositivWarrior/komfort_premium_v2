"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Offer() {
  const { t } = useLanguage();
  const assets = (path) => `/assets/${path}`;

  // Helper to render a block
  const OfferBlock = ({ reverse, image, titlePlain, titleBold, text, index }) => (
    <div
        className="elementor-element e-flex e-con-boxed e-con e-parent"
        style={{marginBottom: '40px'}}
    >
        <div className="e-con-inner" style={{ flexDirection: reverse ? "row-reverse" : "row", display: 'flex', alignItems: 'center' }}>
            <div className="elementor-element e-con-full e-flex e-con e-child" style={{flex: 1}}>
                <div className="elementor-widget-container">
                    <img
                        loading="lazy"
                        decoding="async"
                        width="800"
                        height="800"
                        src={assets(image)}
                        className="attachment-large size-large"
                        alt=""
                        style={{width: '100%', height: 'auto'}}
                    />
                </div>
            </div>
            <div className="elementor-element e-con-full e-flex e-con e-child" style={{flex: 1, padding: '20px'}}>
                 <div className="elementor-widget-container" data-trans="offer">
                   <p style={{fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase'}}>{t('offer')}</p>
                </div>
                <div className="elementor-widget-container">
                    <h2 className="premium-dual-header-first-header">
                        <span className="premium-dual-header-first-span">
                            {titlePlain && t(titlePlain)}
                        </span>
                        <span className="premium-dual-header-second-header">
                             {titleBold && t(titleBold)}
                        </span>
                    </h2>
                </div>
                 <div className="elementor-widget-container">
                    <p>
                        {text && t(text)}
                    </p>
                </div>
                 <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                        <a className="elementor-button elementor-button-link elementor-size-sm" href="#kontakt">
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
  );

  return (
    <div style={{marginTop: '50px'}}>
        <OfferBlock 
            reverse={false} 
            image="0E0E0E-1-1024x1024.png"
            titlePlain="Transfers-to-and-from-the-airport"
            titleBold="Transfers-to-and-from-the-airport-bold"
            text="Transfers-to-and-from-the-airport-text"
        />
        <OfferBlock 
            reverse={true} 
            image="0E0E0E-1-1024x1024.png"
            titlePlain="Transfers-to-and-from-the-airport"
            titleBold="Transfers-to-and-from-the-airport-bold"
            text="Transfers-to-and-from-the-airport-text"
        />
        <OfferBlock 
            reverse={false} 
            image="0E0E0E-1-1024x1024.png"
            titlePlain="Transfers-to-and-from-the-airport"
            titleBold="Transfers-to-and-from-the-airport-bold"
            text="Transfers-to-and-from-the-airport-text"
        />
        <OfferBlock 
            reverse={true} 
            image="0E0E0E-1-1024x1024.png"
            titlePlain="Transfers-to-and-from-the-airport"
            titleBold="Transfers-to-and-from-the-airport-bold"
            text="Transfers-to-and-from-the-airport-text"
        />
    </div>
  );
}
