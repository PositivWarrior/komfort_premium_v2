import { Inter_Tight } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin", "latin-ext"],
  weight: ["100", "300", "400", "500", "600", "700"],
});

/* ───────────────────────────────────────────────
   SEO METADATA — bilingual PL + EN
   ─────────────────────────────────────────────── */
export const metadata = {
  // ── Core ──────────────────────────────────────
  title: "Komfort Premium – Przewozy VIP Poznań | VIP Transport Poznań | Luksusowy Transport Osobowy",
  description:
    "Komfort Premium – luksusowy transport osobowy Poznań. Wynajem limuzyn z kierowcą, transfery lotniskowe, przewozy VIP, transport biznesowy. Punktualność, dyskrecja i bezpieczeństwo. | Luxury personal transport Poznań. Limousine hire with driver, airport transfers, VIP rides, business transport.",

  // ── Keywords (bilingual) ─────────────────────
  keywords: [
    // Polish keywords
    "przewozy VIP Poznań",
    "transport VIP Poznań",
    "luksusowy transport Poznań",
    "wynajem limuzyny z kierowcą Poznań",
    "transfer lotnisko Poznań",
    "transfer Ławica",
    "przewozy biznesowe Poznań",
    "limuzyna z szoferem Poznań",
    "transport premium Poznań",
    "przewozy osobowe Poznań",
    "taxi premium Poznań",
    "komfort premium",
    "kierowca VIP Poznań",
    "transfery lotniskowe Polska",
    "transport międzymiastowy premium",
    "przewozy międzynarodowe VIP",
    // English keywords
    "VIP transport Poznań",
    "luxury transport Poznań Poland",
    "limousine service Poznań",
    "airport transfer Poznań",
    "chauffeur service Poznań",
    "premium car hire with driver Poznań",
    "business transport Poznań",
    "executive transport Poland",
    "VIP rides Poznań",
    "Poznań airport transfer",
    "private driver Poznań",
  ],

  // ── Author & Site info ───────────────────────
  authors: [{ name: "Komfort Premium" }],
  creator: "Komfort Premium",
  publisher: "Komfort Premium",
  applicationName: "Komfort Premium",

  // ── Robots ────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Canonical & Alternates (hreflang) ─────────
  metadataBase: new URL("https://komfortpremium.eu"),
  alternates: {
    canonical: "/",
    languages: {
      "pl-PL": "/",
      "en-US": "/",
      "x-default": "/",
    },
  },

  // ── Open Graph (Facebook / social sharing) ────
  openGraph: {
    type: "website",
    locale: "pl_PL",
    alternateLocale: "en_US",
    url: "https://komfortpremium.eu",
    siteName: "Komfort Premium",
    title: "Komfort Premium – Przewozy VIP Poznań | Luxury VIP Transport",
    description:
      "Luksusowy transport osobowy Poznań. Wynajem limuzyn z kierowcą, transfery na lotnisko, transport biznesowy. | Luxury personal transport Poznań. Limousine hire, airport transfers, business transport.",
    images: [
      {
        url: "/assets/Projekt-bez-nazwy-2025-05-17T162727.238-1536x864.png",
        width: 1536,
        height: 864,
        alt: "Komfort Premium – Luksusowy transport VIP Poznań / Luxury VIP Transport Poznań",
        type: "image/png",
      },
    ],
  },

  // ── Twitter Card ──────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Komfort Premium – Przewozy VIP Poznań | VIP Transport Poznań",
    description:
      "Luksusowy transport osobowy, wynajem limuzyn z kierowcą, transfery lotniskowe. | Luxury personal transport, limousine hire with driver, airport transfers.",
    images: ["/assets/Projekt-bez-nazwy-2025-05-17T162727.238-1536x864.png"],
  },

  // ── Verification (Google Search Console) ──────
  // WAŻNE: Wklej tu swój kod weryfikacyjny z Google Search Console
  // Instrukcja: Przejdź na https://search.google.com/search-console →
  //   Dodaj usługę → Wpisz "komfortpremium.eu" → Wybierz "Tag HTML" →
  //   Skopiuj wartość content z tagu meta
  verification: {
    google: "googlef388205ed475e502",
    // Opcjonalnie inne weryfikacje:
    // yandex: "YANDEX_CODE",
    // bing: "BING_CODE",
  },

  // ── Icons ─────────────────────────────────────
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },

  // ── Manifest ──────────────────────────────────
  manifest: "/manifest.json",

  // ── Category ──────────────────────────────────
  category: "transport",
};

/* ───────────────────────────────────────────────
   JSON-LD Structured Data (Schema.org)
   Helps Google understand the business
   ─────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // ── 1. Local Business ───────────────────────
    {
      "@type": "LocalBusiness",
      "@id": "https://komfortpremium.eu/#business",
      name: "Komfort Premium",
      alternateName: "Komfort Premium - Przewozy VIP Poznań",
      description:
        "Luksusowy transport osobowy Poznań. Wynajem limuzyn z kierowcą, transfery lotniskowe, przewozy VIP i transport biznesowy. Luxury personal transport in Poznań. Limousine hire with driver, airport transfers, VIP rides and business transport.",
      url: "https://komfortpremium.eu",
      telephone: "+48533515202",
      email: "rezerwacjepremium@gmail.com",
      image: "https://komfortpremium.eu/assets/Projekt-bez-nazwy-2025-05-17T162727.238-1536x864.png",
      logo: "https://komfortpremium.eu/assets/logo-komofrt.png",
      priceRange: "$$$",
      currenciesAccepted: "PLN, EUR",
      paymentAccepted: "Cash, Bank Transfer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Poznań",
        addressRegion: "Wielkopolskie",
        addressCountry: "PL",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 52.4064,
        longitude: 16.9252,
      },
      areaServed: [
        {
          "@type": "Country",
          name: "Poland",
        },
        {
          "@type": "Country",
          name: "Germany",
        },
        {
          "@type": "Country",
          name: "Netherlands",
        },
        {
          "@type": "Country",
          name: "Belgium",
        },
        {
          "@type": "Country",
          name: "Czech Republic",
        },
        {
          "@type": "Country",
          name: "Austria",
        },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      sameAs: [
        "https://www.facebook.com/profile.php?id=61577157325909",
        "https://www.instagram.com/komfort_premium._",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "5",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Usługi transportowe / Transport Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Transfer lotniskowy / Airport Transfer",
              description:
                "Punktualny transfer na lotnisko i z lotniska autem klasy premium. Punctual airport transfer in a premium class car.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Transport międzymiastowy / Intercity Transfer",
              description:
                "Komfortowe przewozy między miastami w całej Polsce. Comfortable intercity transport throughout Poland.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Transport międzynarodowy / International Transport",
              description:
                "Przewozy międzynarodowe do Niemiec, Belgii, Holandii, Czech, Austrii. International transport to Germany, Belgium, Netherlands, Czech Republic, Austria.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Transport biznesowy / Business Transport",
              description:
                "Obsługa firm i korporacji, transport gości VIP, obsługa konferencji i eventów. Corporate transport, VIP guest service, conference and event support.",
            },
          },
        ],
      },
    },

    // ── 2. Website ──────────────────────────────
    {
      "@type": "WebSite",
      "@id": "https://komfortpremium.eu/#website",
      url: "https://komfortpremium.eu",
      name: "Komfort Premium",
      description: "Luksusowy transport VIP Poznań | Luxury VIP Transport Poznań",
      publisher: {
        "@id": "https://komfortpremium.eu/#business",
      },
      inLanguage: ["pl-PL", "en-US"],
    },

    // ── 3. WebPage ──────────────────────────────
    {
      "@type": "WebPage",
      "@id": "https://komfortpremium.eu/#webpage",
      url: "https://komfortpremium.eu",
      name: "Komfort Premium – Przewozy VIP Poznań | VIP Transport Poznań",
      isPartOf: {
        "@id": "https://komfortpremium.eu/#website",
      },
      about: {
        "@id": "https://komfortpremium.eu/#business",
      },
      description:
        "Komfort Premium oferuje luksusowy transport osobowy w Poznaniu i okolicach. Wynajem limuzyn z kierowcą, transfery lotniskowe, przewozy VIP. | Komfort Premium offers luxury personal transport in Poznań. Limousine hire with driver, airport transfers, VIP rides.",
      inLanguage: ["pl-PL", "en-US"],
    },

    // ── 4. FAQ Schema ───────────────────────────
    {
      "@type": "FAQPage",
      "@id": "https://komfortpremium.eu/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Jak wcześnie muszę zarezerwować przejazd? / How early do I need to book a ride?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `Rekomendujemy rezerwację z minimum 24-godzinnym wyprzedzeniem, szczególnie przy trasach międzynarodowych i transferach lotniskowych. Jeśli potrzebujesz przejazdu na już - zadzwoń, zrobimy wszystko, by pomóc. / We recommend booking at least 24 hours in advance, especially for international routes and airport transfers. If you need a ride right now - call us, we will do our best to help.`,
          },
        },
        {
          "@type": "Question",
          name: "Czy obsługujecie tylko klientów z Poznania? / Do you serve only clients from Poznań?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nasza siedziba znajduje się w Poznaniu, ale obsługujemy klientów z całej Polski i zagranicy. Realizujemy przewozy z każdego miejsca. / Our headquarters is in Poznań, but we serve clients from all over Poland and abroad. We provide rides from any location.",
          },
        },
        {
          "@type": "Question",
          name: "Jak wygląda rezerwacja? / How does a reservation work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To proste – wystarczy kontakt telefoniczny lub e-mail. Ustalamy szczegóły, potwierdzamy trasę i gotowe. Bez zbędnych formalności. / It's simple – just contact us by phone or email. We arrange the details, confirm the route, and that's it.",
          },
        },
        {
          "@type": "Question",
          name: "Czy mogę zarezerwować przejazd dla kilku osób? / Can I book a ride for several people?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oczywiście. Dysponujemy komfortowymi busami 9-osobowymi oraz luksusowymi autami osobowymi. Dobierzemy pojazd do liczby pasażerów. / Of course. We have comfortable 9-seater vans and luxury passenger cars. We will select a vehicle accordingly.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl-PL">
      <head>
        <meta name="google-site-verification" content="LA3U03MmvkgiD_eFtLfxLJcxgTYxPVXSFjydrFP6v6c" />

        {/* Geo meta tags for local SEO */}
        <meta name="geo.region" content="PL-WP" />
        <meta name="geo.placename" content="Poznań" />
        <meta name="geo.position" content="52.4064;16.9252" />
        <meta name="ICBM" content="52.4064, 16.9252" />

        {/* Content language hints */}
        <meta httpEquiv="content-language" content="pl, en" />

        {/* Additional SEO meta */}
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />

        {/* Canonical — Next.js generates this from metadata.alternates.canonical */}
        {/* Removed manual canonical and hreflang — Next.js handles these via metadata export */}
        {/* Duplicate canonical/hreflang tags confuse Google. The metadata export above is the single source of truth. */}

        {/* FontAwesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={interTight.variable}>
        {/* Google Tag Manager - must be in body, not head */}
        <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M72X9VZL');`}
        </Script>

        {/* GTM NoScript */}
        <noscript>
            <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-M72X9VZL"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
            ></iframe>
        </noscript>
        
        {children}
      </body>
    </html>
  );
}
