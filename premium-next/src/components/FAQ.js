"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  const assets = (path) => `/assets/${path}`;
  
  // State to track which question is expanded. Default to first one (0) or null.
  // The design shows one open.
  const [activeIndex, setActiveIndex] = useState(0);

  const faqItems = [
    {
      questionKey: "Jak-wcześnie-muszę-zarezerwować-przejazd?",
      answerKey: "Jak-wcześnie-muszę-zarezerwować-przejazd?-text",
    },
    {
      questionKey: "Czy-obsługujecie-tylko-klientów-z-Łodzi?",
      answerKey: "Czy-obsługujecie-tylko-klientów-z-Łodzi?-text",
    },
    {
      questionKey: "Jak-wygląda-rezerwacja?",
      answerKey: "Jak-wygląda-rezerwacja?-text",
    },
    {
      questionKey: "Czy-mogę-zarezerwować-przejazd-dla-kilku-osób?",
      answerKey: "Czy-mogę-zarezerwować-przejazd-dla-kilku-osób?-text",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section id="faq" style={{ backgroundColor: "#0c0c0c", color: "white", paddingTop: "80px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        
        <div style={{ display: "flex", flexWrap: "wrap", gap: "60px" }}>
          
          {/* Left Column - Image with Gold Line */}
          <div style={{ flex: "1 1 400px", position: "relative" }}>
             {/* Vertical Gold Line Overlay */}
             <div 
                style={{ 
                    position: "absolute", 
                    top: "-40px", 
                    bottom: "-40px", 
                    left: "50%", 
                    width: "1px", 
                    backgroundColor: "#cba052",
                    zIndex: 10
                }}
             ></div>

             <div style={{ position: "relative", zIndex: 1, overflow: "hidden", height: "100%" }}>
                <img 
                    src={assets("0E0E0E-1-1024x1024.png")} 
                    alt="Chauffeur" 
                    style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "400px" }}
                />
             </div>
          </div>

          {/* Right Column - FAQ Content */}
          <div style={{ flex: "1 1 500px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            
            <div style={{ marginBottom: "40px" }}>
                <div style={{ fontSize: "14px", color: "#666", marginBottom: "5px", textTransform: "uppercase" }}>FAQ</div>
                <h2 style={{ fontSize: "36px", fontWeight: "300", margin: 0 }}>
                    {t('Najczęstsze-pytania').split(' ')[0]} <strong style={{ fontWeight: "bold" }}>{t('Najczęstsze-pytania').split(' ').slice(1).join(' ')}</strong>
                </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {faqItems.map((item, index) => {
                    const isOpen = activeIndex === index;
                    return (
                        <div key={index} style={{ borderBottom: "1px solid #222" }}>
                            <button
                                onClick={() => toggleFAQ(index)}
                                style={{
                                    background: "none",
                                    border: "none",
                                    color: "white",
                                    cursor: "pointer",
                                    fontSize: "16px",
                                    display: "flex",
                                    alignItems: "center",
                                    width: "100%",
                                    textAlign: "left",
                                    padding: "15px 0",
                                    outline: "none"
                                }}
                            >
                                <span style={{ color: "#cba052", marginRight: "15px", fontSize: "18px" }}>
                                    {isOpen ? "—" : "+"}
                                </span>
                                {t(item.questionKey)}
                            </button>
                            
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                                    transition: "grid-template-rows 0.3s ease-out",
                                }}
                            >
                                <div style={{ overflow: "hidden" }}>
                                    <div style={{ 
                                        border: "1px solid #444", 
                                        padding: "20px", 
                                        marginBottom: "20px", 
                                        backgroundColor: "#111",
                                        lineHeight: "1.6",
                                        fontSize: "14px",
                                        color: "#ccc",
                                        marginTop: "10px"
                                    }}>
                                        {t(item.answerKey)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div style={{ marginTop: "40px" }}>
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
                        transition: "all 0.3s ease"
                    }}
                >
                    {t('Zamów przejazd') || "Zamów przejazd"}
                 </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
