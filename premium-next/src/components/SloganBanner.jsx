"use client";

export default function SloganBanner() {
  return (
    <section className="slogan-banner" aria-label="Zamów sobie spokój.">
      <a href="#kontakt" className="slogan-banner__link">
        <img
          src="/assets/obraz.png"
          alt="Zamów sobie spokój."
          className="slogan-banner__img"
          width={599}
          height={96}
          decoding="async"
        />
      </a>
    </section>
  );
}
