import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Komfort Premium",
  description: "Komfort Premium - Przewozy VIP Poznań. Luksusowy transport osobowy, wynajem limuzyn z kierowcą. Punktualność, dyskrecja i bezpieczeństwo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl-PL">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M72X9VZL');`}
        </Script>

        {/* FontAwesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Local Assets CSS */}
        <link rel="stylesheet" href="/assets/frontend.css" />
        <link rel="stylesheet" href="/assets/pa-frontend-59ddf31bc.min.css" />
        <link rel="stylesheet" href="/assets/index.css" />
        <link rel="stylesheet" href="/assets/cff-style.min.css" />
        <link rel="stylesheet" href="/assets/font-awesome.min.css" />
        <link rel="stylesheet" href="/assets/header-footer-elementor.css" />
        <link rel="stylesheet" href="/assets/frontend.min.css" />
        <link rel="stylesheet" href="/assets/post-5.css" />
        <link rel="stylesheet" href="/assets/liquid-glass.min.css" />
        <link rel="stylesheet" href="/assets/button-line.min.css" />
        <link rel="stylesheet" href="/assets/widget-text-editor.min.css" />
        <link rel="stylesheet" href="/assets/fadeIn.min.css" />
        <link rel="stylesheet" href="/assets/swiper.min.css" />
        <link rel="stylesheet" href="/assets/e-swiper.min.css" />
        <link rel="stylesheet" href="/assets/widget-divider.min.css" />
        <link rel="stylesheet" href="/assets/widget-image-box.min.css" />
        <link rel="stylesheet" href="/assets/widget-image.min.css" />
        <link rel="stylesheet" href="/assets/widget-nested-accordion.min.css" />
        <link rel="stylesheet" href="/assets/prettyphoto.min.css" />
        <link rel="stylesheet" href="/assets/image-effects.min.css" />
        <link rel="stylesheet" href="/assets/flipster.min.css" />
        <link rel="stylesheet" href="/assets/widget-google_maps.min.css" />
        <link rel="stylesheet" href="/assets/widget-heading.min.css" />
        <link rel="stylesheet" href="/assets/widget-icon-box.min.css" />
        <link rel="stylesheet" href="/assets/post-899.css" />
        <link rel="stylesheet" href="/assets/post-2685.css" />
        <link rel="stylesheet" href="/assets/post-2715.css" />
        <link rel="stylesheet" href="/assets/style.min.css" />
        <link rel="stylesheet" href="/assets/theme.min.css" />
        <link rel="stylesheet" href="/assets/header-footer.min.css" />
        <link rel="stylesheet" href="/assets/elementor-icons.min.css" />
        <link rel="stylesheet" href="/assets/widget-icon-list.min.css" />
        <link rel="stylesheet" href="/assets/widget-social-icons.min.css" />
        <link rel="stylesheet" href="/assets/brands.css" />
        <link rel="stylesheet" href="/assets/fontawesome.css" />
        <link rel="stylesheet" href="/assets/solid.css" />
        <link rel="stylesheet" href="/assets/css" />
        <link rel="stylesheet" href="/assets/themify.css" />
        <link rel="stylesheet" href="/assets/linearicons.css" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
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

        {/* Scripts moved to the end */}
        <Script src="/assets/jquery.min.js.pobrane" strategy="beforeInteractive" />
        <Script src="/assets/jquery-migrate.min.js.pobrane" strategy="beforeInteractive" />
        <Script src="/assets/flipster.min.js.pobrane" strategy="lazyOnload" />
        <Script src="/assets/js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
