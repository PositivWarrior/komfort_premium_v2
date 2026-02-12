import { Inter_Tight } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin", "latin-ext"],
  weight: ["100", "300", "400", "500", "600", "700"],
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

      </head>
      <body className={interTight.variable}>
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
