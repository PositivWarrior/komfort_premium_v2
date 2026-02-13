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
      <div className="reviews-outer" style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 20px" }}>
        {/* Header */}
        <div style={{ maxWidth: "795px", margin: "0 auto", textAlign: "center", marginBottom: "50px" }}>
          <div className="section-label" style={{ marginBottom: "5px" }}>
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
            type="button"
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="14" height="14" fill="currentColor"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
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
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="12" height="12" fill="currentColor" style={{ fontSize: "12px" }}><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
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
            type="button"
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="14" height="14" fill="currentColor"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
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
