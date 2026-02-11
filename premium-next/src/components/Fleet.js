"use client";
import { useLanguage } from "../context/LanguageContext";

export default function Fleet() {
  const { t } = useLanguage();
  const assets = (path) => `/assets/${path}`;

  const images = [
    "Projekt-bez-nazwy-2025-05-23T115250.839.png",
    "Projekt-bez-nazwy-2025-05-23T115302.613.png",
    "Projekt-bez-nazwy-2025-05-23T115345.024.png",
    "KIA1zloty-scaled.jpg",
    "KIApopr.zloty-1-scaled.jpg",
    "KIA2zloty-scaled.jpg",
  ];

  // Duplicate for seamless infinite scroll
  const marqueeImages = [...images, ...images];

  return (
    <section
      id="flota"
      style={{
        backgroundColor: "#0e0e0e",
        color: "white",
        paddingTop: "80px",
        paddingBottom: "0px",
        overflow: "hidden",
      }}
    >
      {/* Header Section */}
      <div style={{ maxWidth: "795px", margin: "0 auto", textAlign: "center", padding: "0 25px" }}>
        {/* Section Label */}
        <div className="section-label" style={{ marginBottom: "-15px" }}>
          {t("lodz-and-surroundings")}
        </div>

        {/* Title */}
        <h2 className="section-title" style={{ textAlign: "center", marginTop: "20px" }}>
          {t("Nasza-flota").split(" ")[0]}{" "}
          <strong>{t("Nasza-flota").split(" ")[1]}</strong>
        </h2>

        {/* Gold Divider */}
        <div className="gold-divider" style={{ margin: "15px auto" }} />

        {/* Description */}
        <p
          className="body-text"
          style={{
            textAlign: "center",
            fontSize: "16px",
            fontWeight: 400,
          }}
        >
          {t("Nasza-flota-text")}
        </p>
      </div>

      {/* Marquee Carousel - with spacing from top */}
      <div
        style={{
          marginTop: "99px",
          width: "100%",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <div className="marquee-track">
          {marqueeImages.map((img, idx) => (
            <div
              key={idx}
              style={{
                display: "inline-block",
                width: "350px",
                height: "250px",
                marginRight: "5px",
                verticalAlign: "top",
              }}
            >
              <img
                src={assets(img)}
                alt={`Fleet ${idx}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
