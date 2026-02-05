"use client";
import { useLanguage } from "../context/LanguageContext";

export default function PremiumTransport() {
  const { t } = useLanguage();
  const assets = (path) => `/assets/${path}`;

  return (
    <section 
        style={{ 
            position: "relative", 
            padding: "100px 0", 
            textAlign: "center", 
            color: "white",
            overflow: "hidden",
            backgroundColor: "#000000" // Explicit black
        }}
    >
        {/* Background Image with Overlay */}
        <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0
        }}>
             {/* Gradient Overlay for better text readability and "black" feel */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.6))",
                zIndex: 1
            }}></div>
            <img 
                src={assets("0E0E0E-5-1024x1024.png")}
                alt="Premium Transport"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    opacity: 0.8 // Blend with black background
                }}
             />
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1, padding: "0 20px" }}>
            
            <div style={{ fontSize: "14px", color: "#ccc", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "15px" }}>
                MASZ PYTANIA?
            </div>

            <h2 style={{ fontSize: "40px", fontWeight: "300", lineHeight: "1.2", marginBottom: "30px" }}>
                {t('Potrzebujesz-transportu-premium')} <br />
                <strong style={{ fontWeight: "bold" }}>{t('Skontaktuj-się-z-nami')}</strong>
            </h2>

             {/* Gold Divider */}
            <div
                style={{
                width: "60px",
                height: "2px",
                backgroundColor: "#cba052",
                margin: "0 auto 30px auto"
                }}
            ></div>

            <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "40px", color: "#ddd" }}>
                {t('Skontaktuj-się-z-nami-text')}
            </p>

            <a 
                href="#kontakt"
                style={{
                    display: "inline-block",
                    border: "1px solid #cba052",
                    color: "white",
                    padding: "12px 30px",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                    backgroundColor: "transparent"
                }}
            >
                {t('book-a-ride') || "Zamów przejazd"}
            </a>

        </div>
    </section>
  );
}
