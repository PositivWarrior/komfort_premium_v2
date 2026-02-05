"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const assets = (path) => `/assets/${path}`;

  return (
    <section id="kontakt" style={{ backgroundColor: "#0c0c0c", color: "white", padding: "80px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "60px" }}>
          
          {/* Left Column - Image */}
          <div style={{ flex: "1 1 500px" }}>
             <img
                src={assets("Projekt-bez-nazwy-2025-05-17T162727.238-1024x576.png")}
                alt="Contact"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
          </div>

          {/* Right Column - Contact Details */}
          <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", gap: "30px", paddingTop: "20px" }}>
            
            <h2 
                style={{ 
                    fontSize: "24px", 
                    marginBottom: "10px", 
                    fontWeight: "normal" 
                }}
            >
                {t('Zamów-usługę')}
            </h2>

             {/* Phone */}
             <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ 
                    color: "#cba052", 
                    fontSize: "24px", 
                    border: "1px solid #cba052", 
                    borderRadius: "50%", 
                    width: "40px", 
                    height: "40px", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    flexShrink: 0
                }}>
                    <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                     <div style={{ fontWeight: "bold", marginBottom: "5px" }}>{t('Zadzwoń-lub-wyślij-sms')}</div>
                     <a href="tel:+48533515202" style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>+48 533 515 202</a>
                </div>
             </div>

             {/* Email */}
             <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ 
                    color: "#cba052", 
                    fontSize: "24px", 
                     border: "1px solid #cba052", 
                    borderRadius: "50%", 
                    width: "40px", 
                    height: "40px", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    flexShrink: 0
                }}>
                    <i className="fa-regular fa-comment"></i>
                </div>
                <div>
                     <div style={{ fontWeight: "bold", marginBottom: "5px" }}>E-mail:</div>
                     <a href="mailto:rezerwacjepremium@gmail.com" style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>rezerwacjepremium@gmail.com</a>
                </div>
             </div>

             {/* Address */}
              <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ 
                    color: "#cba052", 
                    fontSize: "24px", 
                     border: "1px solid #cba052", 
                    borderRadius: "50%", 
                    width: "40px", 
                    height: "40px", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    flexShrink: 0
                }}>
                    <i className="fa-regular fa-map"></i>
                </div>
                <div>
                     <div style={{ fontWeight: "bold", marginBottom: "5px" }}>{t('Obsługujemy')}</div>
                     <div style={{ fontSize: "16px", lineHeight: "1.5" }}>{t('Obsługujemy-text')}</div>
                </div>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
}
