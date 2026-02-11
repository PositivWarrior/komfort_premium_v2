"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Offer() {
  const { t } = useLanguage();
  const assets = (path) => `/assets/${path}`;

  const OfferBlock = ({ reverse, image, titlePlain, titleBold, text, labelKey }) => (
    <div
      style={{
        display: "flex",
        flexDirection: reverse ? "row-reverse" : "row",
        flexWrap: "wrap",
        gap: "0px",
        marginTop: "80px",
      }}
      className={reverse ? "offer-row offer-row-reverse" : "offer-row"}
    >
      {/* Image Column */}
      <div className="offer-col" style={{ flex: "1 1 50%", minWidth: "300px" }}>
        <img
          loading="lazy"
          decoding="async"
          src={assets(image)}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      {/* Text Column */}
      <div
        className="offer-col"
        style={{
          flex: "1 1 50%",
          minWidth: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 40px",
        }}
      >
        {/* Section Label */}
        <div className="section-label" style={{ marginBottom: "-15px" }}>
          {t(labelKey || "offer")}
        </div>

        {/* Title */}
        <h2 className="section-title" style={{ textAlign: "left", marginTop: "20px" }}>
          {titlePlain && t(titlePlain)}
          <strong>{titleBold && t(titleBold)}</strong>
        </h2>

        {/* Description */}
        <p className="body-text" style={{ textAlign: "left", marginTop: "15px" }}>
          {text && t(text)}
        </p>

        {/* CTA Button */}
        <div style={{ marginTop: "30px" }}>
          <a className="btn-gold" href="#kontakt">
            {t("book-a-ride")}
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section style={{ backgroundColor: "#0e0e0e", overflow: "hidden" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <OfferBlock
          reverse={false}
          image="0E0E0E-1-1024x1024.png"
          titlePlain="Transfers-to-and-from-the-airport"
          titleBold="Transfers-to-and-from-the-airport-bold"
          text="Transfers-to-and-from-the-airport-text"
          labelKey="offer"
        />
        <OfferBlock
          reverse={true}
          image="0E0E0E-1-1024x1024.png"
          titlePlain="Transfers-to-and-from-the-airport"
          titleBold="Transfers-to-and-from-the-airport-bold"
          text="Transfers-to-and-from-the-airport-text"
          labelKey="offer"
        />
        <OfferBlock
          reverse={false}
          image="0E0E0E-1-1024x1024.png"
          titlePlain="Transfers-to-and-from-the-airport"
          titleBold="Transfers-to-and-from-the-airport-bold"
          text="Transfers-to-and-from-the-airport-text"
          labelKey="offer"
        />
        <OfferBlock
          reverse={true}
          image="0E0E0E-1-1024x1024.png"
          titlePlain="Transfers-to-and-from-the-airport"
          titleBold="Transfers-to-and-from-the-airport-bold"
          text="Transfers-to-and-from-the-airport-text"
          labelKey="offer"
        />
      </div>
    </section>
  );
}
