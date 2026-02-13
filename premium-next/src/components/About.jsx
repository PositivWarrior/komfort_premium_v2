"use client";

import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const assets = (path) => `/assets/${path}`;

  return (
    <>
      {/* SECTION 1: "Why clients choose us" */}
      <section
        id="o-nas"
        style={{
          backgroundColor: "#0e0e0e",
          padding: "80px 0 0 0",
        }}
      >
        <div style={{ maxWidth: "795px", margin: "0 auto", padding: "0 25px", textAlign: "center" }}>
          {/* Section Label */}
          <div className="section-label" style={{ marginBottom: "5px" }}>
            {t("lodz-and-surroundings")}
          </div>

          {/* Section Title */}
          <h2 className="section-title" style={{ textAlign: "center" }}>
            {t("why-clients-choose-us")}
            <strong>{t("why-clients-choose-us-text")}</strong>
          </h2>

          {/* Gold Divider */}
          <div className="gold-divider" style={{ margin: "15px auto" }} />

          {/* Description */}
          <p
            className="body-text"
            style={{ textAlign: "center", marginTop: "10px" }}
          >
            {t("our-vehicles")}
          </p>
        </div>
      </section>

      {/* SECTION 2: "Who do we serve" */}
      <section
        id="oferta"
        style={{
          backgroundColor: "#0e0e0e",
          padding: "80px 0 0 0",
        }}
      >
        <div style={{ maxWidth: "795px", margin: "0 auto", padding: "0 25px", textAlign: "center" }}>
          {/* Section Label */}
          <div className="section-label" style={{ marginBottom: "5px" }}>
            {t("lodz-and-surroundings")}
          </div>

          {/* Section Title */}
          <h2 className="section-title" style={{ textAlign: "center" }}>
            {t("who-do-we-serve")}
            <strong>{t("who-do-we-serve-text")}</strong>
          </h2>

          {/* Gold Divider */}
          <div className="gold-divider" style={{ margin: "15px auto" }} />
        </div>

        {/* 4 Cards Grid - 2x2 */}
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            maxWidth: "1200px",
            margin: "30px auto 0 auto",
            padding: "0 15px",
            gap: "0px",
          }}
        >
          {/* Box 1: Firmy i korporacje */}
          <div className="about-card-wrap" style={{ padding: "35px" }}>
            <div className="card-bg" style={{ textAlign: "center", height: "100%" }}>
              <figure style={{ marginBottom: "15px" }}>
                <img
                  decoding="async"
                  src={assets("Projekt-bez-nazwy-2025-05-18T210741.764.png")}
                  alt=""
                  style={{ width: "100%", height: "auto", transition: "transform 0.3s ease" }}
                />
              </figure>
              <h3 className="card-title">{t("companies-and-corporations")}</h3>
              <p className="card-description" style={{ marginTop: "10px", lineHeight: 1.6 }}>
                {t("companies-and-corporations-text")}
              </p>
            </div>
          </div>

          {/* Box 2: Osoby indywidualne */}
          <div className="about-card-wrap" style={{ padding: "35px" }}>
            <div className="card-bg" style={{ textAlign: "center", height: "100%" }}>
              <figure style={{ marginBottom: "15px" }}>
                <img
                  decoding="async"
                  src={assets("Projekt-bez-nazwy-2025-05-18T205829.712.png")}
                  alt=""
                  style={{ width: "100%", height: "auto", transition: "transform 0.3s ease" }}
                />
              </figure>
              <h3 className="card-title">{t("Individuals")}</h3>
              <p className="card-description" style={{ marginTop: "10px", lineHeight: 1.6 }}>
                {t("Individuals-text")}
              </p>
            </div>
          </div>

          {/* Box 3: Agencje eventowe */}
          <div className="about-card-wrap" style={{ padding: "35px" }}>
            <div className="card-bg" style={{ textAlign: "center", height: "100%" }}>
              <figure style={{ marginBottom: "15px" }}>
                <img
                  decoding="async"
                  src={assets("Projekt-bez-nazwy-2025-05-18T210651.483.png")}
                  alt=""
                  style={{ width: "100%", height: "auto", transition: "transform 0.3s ease" }}
                />
              </figure>
              <h3 className="card-title">{t("Event-agencies-and-hotels")}</h3>
              <p className="card-description" style={{ marginTop: "10px", lineHeight: 1.6 }}>
                {t("Event-agencies-and-hotels-text")}
              </p>
            </div>
          </div>

          {/* Box 4: Goście zagraniczni */}
          <div className="about-card-wrap" style={{ padding: "35px" }}>
            <div className="card-bg" style={{ textAlign: "center", height: "100%" }}>
              <figure style={{ marginBottom: "15px" }}>
                <img
                  decoding="async"
                  src={assets("Projekt-bez-nazwy-2025-05-18T205829.712.png")}
                  alt=""
                  style={{ width: "100%", height: "auto", transition: "transform 0.3s ease" }}
                />
              </figure>
              <h3 className="card-title">{t("Foreign-guests")}</h3>
              <p className="card-description" style={{ marginTop: "10px", lineHeight: 1.6 }}>
                {t("Foreign-guests-text")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
