# Komfort Premium

Strona internetowa firmy **Komfort Premium** – luksusowego transportu VIP w Poznaniu i okolicach. Projekt obejmuje nowoczesną wersję witryny opartą o Next.js oraz archiwalną statyczną wersję wyeksportowaną z WordPress.

**Produkcja:** [komfortpremium.eu](https://komfortpremium.eu)

## O projekcie

Komfort Premium oferuje m.in.:

- przewozy VIP i transport biznesowy,
- transfery lotniskowe (Poznań-Ławica i dalej),
- wynajem limuzyn z kierowcą,
- obsługę klientów indywidualnych i firm.

Aktywna wersja strony znajduje się w katalogu `premium-next/` – to wielojęzyczna (PL/EN) aplikacja Next.js z eksportem statycznym (`output: 'export'`), przygotowana pod hosting współdzielony (np. Hostinger).

## Struktura repozytorium

```text
komfort_premium_v2/
├── premium-next/          # Główna aplikacja Next.js (React 19, App Router)
│   ├── public/assets/     # Logo, zdjęcia floty, grafiki
│   ├── src/app/           # Layout, strona główna, ikony (logo firmy)
│   ├── src/components/    # Sekcje: Header, Hero, Oferta, Opinie itd.
│   ├── scripts/           # Pobieranie opinii Google
│   └── postbuild.js       # Optymalizacja pod Apache / Hostinger
├── assets/                # Zasoby ze starej wersji strony
├── index.html             # Archiwalna strona (WordPress / Elementor)
└── .github/workflows/     # Automatyczna aktualizacja opinii i deploy
```

## Uruchomienie lokalne

Przejdź do katalogu aplikacji Next.js:

```bash
cd premium-next
npm install
npm run dev
```

Strona będzie dostępna pod adresem [http://localhost:3000](http://localhost:3000).

## Build produkcyjny

```bash
cd premium-next
npm run build
```

Polecenie:

1. pobiera najnowsze opinie Google (`prebuild`),
2. buduje statyczną wersję strony do katalogu `out/`,
3. uruchamia optymalizację `postbuild.js` (inline CSS, `.htaccess`, cache).

Zawartość folderu `premium-next/out/` należy wgrać na serwer produkcyjny.

## Kluczowe funkcje

| Obszar | Opis |
|--------|------|
| **Wydajność** | Statyczny export HTML/CSS/JS, optymalizacja pod PageSpeed |
| **SEO** | Metadata API, Open Graph, Schema.org (LocalBusiness), sitemap, robots.txt |
| **i18n** | Przełączanie PL/EN bez przeładowania strony (`LanguageContext`) |
| **Opinie Google** | Pobierane przy buildzie; brak zapytań API po stronie użytkownika |
| **CI/CD** | GitHub Actions: codzienna aktualizacja opinii i deploy FTP na Hostinger |

## Konfiguracja (opcjonalna)

W katalogu `premium-next/` utwórz plik `.env.local`:

```env
GOOGLE_PLACES_API_KEY=twoj_klucz_api
GOOGLE_PLACE_ID=ChIJG2ww4MCTMkcRvgaBdLz1z9A
```

Bez klucza API build nadal działa – wykorzystywane są ostatnio zapisane opinie z pliku `src/data/google-reviews.json`.

## Więcej informacji

Szczegółowy opis architektury, skryptów i procesu wdrożenia: [`premium-next/README.md`](premium-next/README.md).

## Kontakt

- **Telefon:** +48 533 515 202  
- **E-mail:** rezerwacjepremium@gmail.com  
- **Strona:** [komfortpremium.eu](https://komfortpremium.eu)
