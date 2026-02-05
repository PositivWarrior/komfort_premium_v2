"use client";

import { createContext, useContext, useState, useEffect } from "react";

const translations = {
  'header-o-nas': {
    pl: 'O nas',
    en: 'About us',
  },
  header1: {
    pl: 'Komfort, klasa i bezpieczeństwo',
    en: 'Comfort, class and safety',
  },
  desc1: {
    pl: 'Działamy punktualnie, dyskretnie i profesjonalnie. Nasi kierowcy są doświadczeni, ubrani stosownie do sytuacji i potrafią odnaleźć się w każdej formalnej i nieformalnej sytuacji.',
    en: 'We operate punctually, discreetly, and professionally. Our drivers are experienced, dressed appropriately, and can adapt to any formal or informal situation.',
  },
  'header-kontakt': {
    pl: 'Kontakt',
    en: 'Contact',
  },
  offer: {
    pl: 'Oferta',
    en: 'Offer',
  },
  'lodz-and-surroundings': {
    pl: 'POZNAŃ I OKOLICE',
    en: 'POZNAŃ AND SURROUNDINGS',
  },
  'book-a-ride': {
    pl: 'Zamów przejazd',
    en: 'Book a ride',
  },
  'who-do-we-serve': {
    pl: 'Kogo ',
    en: 'Who do we ',
  },
  'who-do-we-serve-text': {
    pl: 'obsługujemy?',
    en: 'cater to?',
  },
  'why-clients-choose-us': {
    pl: 'Dlaczego klienci wybierają nas, a nie ',
    en: 'Why do clients choose us, and not ',
  },
  'why-clients-choose-us-text': {
    pl: 'zwykłe taksówki czy aplikacje przewozowe?',
    en: 'regular taxis or ride-sharing apps?',
  },
  'our-vehicles': {
    pl: 'Nasze pojazdy to wyłącznie auta klasy premium – czyste, komfortowe i gotowe, by robić wrażenie. Zamiast prowizorycznego przejazdu otrzymujesz usługę na najwyższym poziomie – taką, jakiej oczekują Twoi klienci, partnerzy biznesowi i Ty sam. Współpraca z nami to pewność, że wszystko będzie dopięte na ostatni guzik – bez nerwów, opóźnień i kompromisów.',
    en: 'Our vehicles are exclusively premium class cars – clean, comfortable, and ready to impress. Instead of a makeshift ride, you receive a top-level service – the kind your clients, business partners, and you yourself expect. Cooperating with us ensures everything will be perfectly arranged – without stress, delays, or compromises.',
  },
  'companies-and-corporations': {
    pl: 'Firmy i korporacje',
    en: 'Companies and corporations',
  },
  'companies-and-corporations-text': {
    pl: 'Oferujemy kompleksową obsługę transportu dla zarządów, gości biznesowych, partnerów strategicznych oraz pracowników uczestniczących w konferencjach, eventach czy podróżach służbowych.',
    en: 'We offer comprehensive transportation services for management boards, business guests, strategic partners, and employees participating in conferences, events, and business trips.',
  },
  Individuals: {
    pl: 'Osoby indywidualne',
    en: 'Individuals',
  },
  'Individuals-text': {
    pl: 'Zapewniamy transport dla klientów ceniących sobie komfort, bezpieczeństwo i prywatność. Obsługujemy transfery na lotnisko, przejazdy na uroczystości rodzinne, eventy prywatne czy koncerty.',
    en: 'We provide transportation for clients who value comfort, safety, and privacy. We offer airport transfers, family celebrations, private events, and concerts.',
  },
  'Event-agencies-and-hotels': {
    pl: 'Agencje eventowe i hotele',
    en: 'Event agencies and hotels',
  },
  'Event-agencies-and-hotels-text': {
    pl: 'Współpracujemy przy obsłudze wydarzeń, wesel, konferencji oraz transportu gości VIP. Działamy punktualnie i reprezentacyjnie – wiemy, że każdy szczegół ma znaczenie.',
    en: 'We collaborate on events, weddings, conferences, and VIP transportation. We deliver punctuality and exemplarity – we know that every detail matters.',
  },
  'Foreign-guests': {
    pl: 'Goście zagraniczni',
    en: 'Foreign guests',
  },
  'Foreign-guests-text': {
    pl: 'Prowadzimy przewozy z komunikacją w języku angielskim. Obsługujemy klientów z różnych krajów, zapewniając im komfortową podróż w bezpiecznych warunkach.',
    en: 'We provide transportation services with English-language communication. We serve clients from various countries, ensuring a comfortable and safe journey.',
  },
  'Transfers-to-and-from-the-airport': {
    pl: 'Przewozy z i ',
    en: 'Transfers to and ',
  },
  'Transfers-to-and-from-the-airport-bold': {
    pl: 'na lotnisko',
    en: 'from the airport',
  },
  'Transfers-to-and-from-the-airport-text': {
    pl: 'Zapewniamy punktualny i wygodny transport z oraz na lotnisko – zarówno dla klientów indywidualnych, jak i firm. Obsługujemy wszystkie kluczowe lotniska w Polsce i za granicą, m.in. Poznań-Ławica, Warszawa Chopina, Berlin Brandenburg, Gdańsk, Wrocław czy Katowice i inne.',
    en: 'We provide punctual and comfortable transport to and from the airport – for both individual clients and companies. We serve all key airports in Poland and abroad, including Poznań-Ławica, Warsaw Chopin, Berlin Brandenburg, Gdańsk, Wrocław, Katowice, and others.',
  },
  'Potrzebujesz-transportu-premium': {
    pl: 'Potrzebujesz transportu premium?',
    en: 'Do you need premium transport?',
  },
  'Skontaktuj-się-z-nami': {
    pl: 'Skontaktuj się z nami',
    en: 'Contact us',
  },
  'Skontaktuj-się-z-nami-text': {
    pl: 'Skontaktuj się z nami telefonicznie lub wyślij SMS a to my skontaktujemy się z Tobą.',
    en: 'Contact us by phone or send an SMS and we will get back to you.',
  },
  'Najczęstsze-pytania': {
    pl: 'Najczęstsze pytania',
    en: 'Frequently asked questions',
  },
  'Jak-wcześnie-muszę-zarezerwować-przejazd?': {
    pl: 'Jak wcześnie muszę zarezerwować przejazd?',
    en: 'How early do I need to book a ride?',
  },
  'Jak-wcześnie-muszę-zarezerwować-przejazd?-text': {
    pl: 'Rekomendujemy rezerwację z minimum 24-godzinnym wyprzedzeniem, szczególnie przy trasach międzynarodowych i transferach lotniskowych. Jednak jeśli potrzebujesz przejazdu „na już” – zadzwoń, zrobimy wszystko, by pomóc.',
    en: "We recommend booking at least 24 hours in advance, especially for international routes and airport transfers. However, if you need a ride 'right now' – call us, we will do our best to help.",
  },
  'Czy-obsługujecie-tylko-klientów-z-Łodzi?': {
    pl: 'Czy obsługujecie tylko klientów z Poznania?',
    en: 'Do you serve only clients from Poznań?',
  },
  'Czy-obsługujecie-tylko-klientów-z-Łodzi?-text': {
    pl: 'Nasza siedziba znajduje się w Poznaniu, ale obsługujemy klientów z całej Polski i zagranicy. Realizujemy przewozy z każdego miejsca – niezależnie czy jesteś w Warszawie, Berlinie czy mniejszej miejscowości.',
    en: 'Our headquarters is in Poznań, but we serve clients from all over Poland and abroad. We provide rides from any location – whether you are in Warsaw, Berlin, or a smaller town.',
  },
  'Jak-wygląda-rezerwacja?': {
    pl: 'Jak wygląda rezerwacja?',
    en: 'How does a reservation work?',
  },
  'Jak-wygląda-rezerwacja?-text': {
    pl: 'To proste – wystarczy kontakt telefoniczny lub e-mail. Ustalamy szczegóły, potwierdzamy trasę i gotowe. Bez zbędnych formalności.',
    en: "It's simple – just contact us by phone or email. We arrange the details, confirm the route, and that's it. No unnecessary formalities.",
  },
  'Czy-mogę-zarezerwować-przejazd-dla-kilku-osób?': {
    pl: 'Czy mogę zarezerwować przejazd dla kilku osób?',
    en: 'Can I book a ride for several people?',
  },
  'Czy-mogę-zarezerwować-przejazd-dla-kilku-osób?-text': {
    pl: 'Oczywiście. Dysponujemy komfortowymi busami 9-osobowymi oraz luksusowymi autami osobowymi. Dobierzemy pojazd do liczby pasażerów i charakteru przejazdu.',
    en: 'Of course. We have comfortable 9-seater vans and luxury passenger cars. We will select a vehicle according to the number of passengers and the nature of the ride.',
  },
  'Nasza-flota': {
    pl: 'Nasza flota',
    en: 'Our fleet',
  },
  'Nasza-flota-text': {
    pl: 'Zdjęcia przedstawiają część naszej floty. Aby sprawdzić dostępność konkretnego modelu prosimy o kontakt.',
    en: 'The photos show part of our fleet. To check the availability of a specific model, please contact us.',
  },
  'Zamów-usługę': {
    pl: 'Zamów usługę',
    en: 'Order a service',
  },
  'Zadzwoń-lub-wyślij-sms': {
    pl: 'Zadzwoń lub wyślij sms',
    en: 'Call or send an SMS',
  },
  Obsługujemy: {
    pl: 'Obsługujemy:',
    en: 'We serve:',
  },
  'Obsługujemy-text': {
    pl: 'Siedziba firmy znajduje się w Poznaniu lecz realizujemy przejazdy w całej Polsce i Europie',
    en: 'The company is based in Poznań but we provide rides throughout Poland and Europe.',
  },
  'pts-offers': {
    pl: 'Komfort Premium oferuje komfortową i bezpieczną obsługę autami klasy premium. Specjalizujemy się w luksusowym przewozie osób dla klientów biznesowych. Punktualność i jakość to nasz standard.',
    en: 'Komfort Premium offers comfortable and safe service with premium class cars. We specialize in luxury passenger transport for business clients. Punctuality and quality are our standard.',
  },
  'Monday-friday': {
    pl: 'Poniedziałek – Piątek: 08:00 – 17:00',
    en: 'Monday – Friday: 08:00 – 17:00',
  },
  Odnosniki: {
    pl: 'Odnośniki',
    en: 'Links',
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('pl');

  // Simple toggle
  const toggleLanguage = () => {
    setLang(prev => (prev === 'pl' ? 'en' : 'pl'));
  };

  // Helper to get text by key
  const t = (key) => {
    if (translations[key]) {
      return translations[key][lang];
    }
    return key; // Fallback to key if not found
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
