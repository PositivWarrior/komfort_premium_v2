"use client";

import { useLanguage } from "../context/LanguageContext";
import { useState, useEffect } from "react";

export default function Reviews() {
  const { t } = useLanguage();

  const reviews = [
    {
      name: "Dominika B.",
      time: "4 miesięcy temu",
      text: "Świetna obsługa, szybki kontakt. Wszystko na czas i bezproblemowo. Gorąco polecam!",
      reply: "Pani Dominiko bardzo dziękuję za miłe słowa i polecamy się na przyszłość 😉😎🚖",
      initial: "D",
      color: "#8e44ad",
    },
    {
      name: "Adam K.",
      time: "rok temu",
      text: "Miałem wyznaczone badanie tomograficzne zadzwoniłem dzień prędzej po taxi wszystko umówione przez sms..",
      reply: "Panie Adamie ogromnie dziękuję za",
      initial: "A",
      color: "#c0392b",
    },
    {
      name: "Przemysław S.",
      time: "rok temu",
      text: "Rewelacja, gorąco polecam. Taxi czekało już na nas 15min przed czasem. Cena taka jak ustalono przy zamawianiu. Bardzo kulturalny",
      reply: "Bardzo dziękuję Panie Przemku za",
      initial: "P",
      color: "#27ae60",
    },
    {
      name: "Daria K.",
      time: "rok temu",
      text: "Serdecznie polecam współpracę z Panem Jakubem. Realizowaliśmy kilkanaście transferów dla ważnych gości z zagranicy i współpraca",
      reply: "Pani Dario bardzo dziękuję za miłe",
      initial: "D",
      color: "#16a085",
    },
    {
      name: "Tomek P.",
      time: "6 miesięcy temu",
      text: "Wszystko super, bardzo dobry kontakt, transport na lotnisko jak i odbiór świetnie dograny!",
      reply: "Panie Tomku wielkie dzięki! 😎💪🚖",
      initial: "T",
      color: "#16a085",
    },
    {
      name: "Kuba K.",
      time: "8 miesięcy temu",
      text: "Pełen profesjonalizm. Super człowiek z humorem. Nigdy nie zostałem tak dobrze obsłużony. Perfekto",
      reply: "Panie Jakubie wielkie dzięki. Staramy się dalej 😉😎🚖",
      initial: "K",
      color: "#27ae60",
    },
    {
      name: "Michał Tomasz G.",
      time: "7 miesięcy temu",
      text: "Nowa, czysta, bardzo wygodna i sprawna limuzyna z pojemnym bagażnikiem. Właściciel, pan Jakub, jest uprzejmy i kulturalny...",
      reply: "Panie Michale bardzo dziękuję za miłe słowa...",
      initial: "M",
      color: "#2980b9",
    },
    {
      name: "Magdalena C.",
      time: "rok temu",
      text: "Pełen profesjonalizm, elastyczne i życzliwe podejście, polecamy!",
      reply: "Wielkie dzięki za miłe słowo 💪🚕",
      initial: "M",
      color: "#009688",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;
  const totalCount = reviews.length;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % totalCount);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + totalCount) % totalCount);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleReviews = () => {
    let items = [];
    for (let i = 0; i < visibleCount; i++) {
      items.push(reviews[(startIndex + i) % totalCount]);
    }
    return items;
  };

  const visibleReviews = getVisibleReviews();

  return (
    <section
      id="reviews"
      style={{
        backgroundColor: "#0e0e0e",
        color: "white",
        paddingTop: "80px",
        paddingBottom: "60px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 60px" }}>
        {/* Header */}
        <div style={{ maxWidth: "795px", margin: "0 auto", textAlign: "center", marginBottom: "50px" }}>
          <div className="section-label" style={{ marginBottom: "-15px" }}>
            OPINIE
          </div>
          <h2 className="section-title" style={{ textAlign: "center", marginTop: "20px" }}>
            Opinie <strong>o nas</strong>
          </h2>
          <div className="gold-divider" style={{ margin: "15px auto" }} />
        </div>

        {/* Carousel Container */}
        <div style={{ position: "relative" }}>
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            style={{
              position: "absolute",
              left: "-40px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              color: "white",
              fontSize: "24px",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            <i className="fas fa-chevron-left" />
          </button>

          {/* Reviews Grid */}
          <div
            className="reviews-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
            }}
          >
            {visibleReviews.map((review, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#1e1e1e",
                  padding: "20px",
                  borderRadius: "4px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  minHeight: "300px",
                  fontFamily: "var(--font-primary)",
                  fontSize: "13px",
                }}
              >
                {/* Google Icon Top Right */}
                <div style={{ position: "absolute", top: "15px", right: "15px" }}>
                  <svg viewBox="0 0 512 512" width="16" height="16">
                    <path
                      d="M482.56 261.36c0-16.73-1.5-32.83-4.29-48.27H256v91.29h127.01c-5.47 29.5-22.1 54.49-47.09 71.23v59.21h76.27c44.63-41.09 70.37-101.59 70.37-173.46z"
                      fill="#4285f4"
                    />
                    <path
                      d="M256 492c63.72 0 117.14-21.13 156.19-57.18l-76.27-59.21c-21.13 14.16-48.17 22.53-79.92 22.53-61.47 0-113.49-41.51-132.05-97.3H45.1v61.15c38.83 77.13 118.64 130.01 210.9 130.01z"
                      fill="#34a853"
                    />
                    <path
                      d="M123.95 300.84c-4.72-14.16-7.4-29.29-7.4-44.84s2.68-30.68 7.4-44.84V150.01H45.1C29.12 181.87 20 217.92 20 256c0 38.08 9.12 74.13 25.1 105.99l78.85-61.15z"
                      fill="#fbbc05"
                    />
                    <path
                      d="M256 113.86c34.65 0 65.76 11.91 90.22 35.29l67.69-67.69C373.03 43.39 319.61 20 256 20c-92.25 0-172.07 52.89-210.9 130.01l78.85 61.15c18.56-55.78 70.59-97.3 132.05-97.3z"
                      fill="#ea4335"
                    />
                  </svg>
                </div>

                {/* User Info */}
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: review.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {review.initial}
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold", fontSize: "13px" }}>{review.name}</div>
                    <div style={{ fontSize: "11px", color: "#888" }}>{review.time}</div>
                  </div>
                </div>

                {/* Stars */}
                <div style={{ display: "flex", gap: "2px", color: "#e7711b" }}>
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star" style={{ fontSize: "12px" }} />
                  ))}
                </div>

                {/* Text */}
                <div
                  style={{
                    fontSize: "13px",
                    lineHeight: "1.4",
                    color: "#ddd",
                    flex: 1,
                    overflow: "hidden",
                  }}
                >
                  {review.text}
                </div>

                {/* Owner Reply */}
                {review.reply && (
                  <div
                    style={{
                      borderLeft: "2px solid #555",
                      paddingLeft: "8px",
                      marginTop: "10px",
                      fontSize: "11px",
                      color: "#aaa",
                    }}
                  >
                    <div style={{ fontWeight: "bold", marginBottom: "2px", color: "#777" }}>
                      Odpowiedź od właściciela{" "}
                      <span style={{ fontSize: "10px", fontWeight: "normal" }}>{review.time}</span>
                    </div>
                    <div
                      style={{
                        overflow: "hidden",
                        maxHeight: "40px",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {review.reply}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            style={{
              position: "absolute",
              right: "-40px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              color: "white",
              fontSize: "24px",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            <i className="fas fa-chevron-right" />
          </button>

          {/* Dots Pagination */}
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#3498db",
              }}
            />
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#444",
              }}
            />
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#444",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
