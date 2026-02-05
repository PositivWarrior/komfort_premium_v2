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
    "KIA2zloty-scaled.jpg"
  ];

  // duplicate images for infinite scroll effect
  const marqueeImages = [...images, ...images];

  return (
    <section id="flota" style={{ backgroundColor: "#0c0c0c", color: "white", padding: "60px 0", overflow: "hidden" }}>
       
       {/* Header Section */}
       <div style={{ textAlign: "center", marginBottom: "50px", padding: "0 20px" }}>
          <div style={{ fontSize: "14px", color: "#666", marginBottom: "5px", textTransform: "uppercase" }}>
            {t('lodz-and-surroundings')}
          </div>
          <h2 style={{ fontSize: "40px", fontWeight: "300", margin: "0 0 20px 0" }}>
             {t('Nasza-flota').split(' ')[0]} <strong style={{ fontWeight: "bold" }}>{t('Nasza-flota').split(' ')[1]}</strong>
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
          
           <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "14px", lineHeight: "1.6", color: "#ccc" }}>
            {t('Nasza-flota-text')}
          </p>
       </div>

       {/* Marquee Carousel */}
       <div className="marquee-container" style={{ width: "100%", overflow: "hidden", whiteSpace: "nowrap" }}>
          <div 
            className="marquee-track"
            style={{ 
                display: "inline-block", 
                animation: "scroll 20s linear infinite" 
            }}
          >
            {marqueeImages.map((img, idx) => (
                <div 
                    key={idx} 
                    style={{ 
                        display: "inline-block", 
                        width: "350px", 
                        height: "250px", 
                        marginRight: "2px",
                        verticalAlign: "top"
                    }}
                >
                    <img
                        src={assets(img)}
                        alt={`Fleet ${idx}`}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
            ))}
          </div>

           {/* Duplicate track for seamless loop if needed, though doubling the array usually suffices if content is wider than screen. 
               For a true infinite CSS marquee, we often need two identical sets side by side.
               The animation moves the track by -50% width.
           */}
           <style jsx>{`
            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .marquee-track {
                width: max-content;
            }
            .marquee-track:hover {
                animation-play-state: paused;
            }
           `}</style>
       </div>

    </section>
  );
}
