'use client';

import { createContext, useContext, useState } from 'react';

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
		pl: 'Dlaczego klienci wybierają nas,',
		en: 'Why do clients choose us,',
	},
	'why-clients-choose-us-text': {
		pl: ' a nie zwykłe taksówki czy aplikacje przewozowe?',
		en: ' and not regular taxis or ride-sharing apps?',
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
	'offer-intercity': {
		pl: 'Transfery ',
		en: 'Inter-city ',
	},
	'offer-intercity-bold': {
		pl: 'między miastami',
		en: 'transfers',
	},
	'offer-intercity-text': {
		pl: 'Oferujemy ekskluzywne przewozy między miastami na terenie całego kraju. Poznań – Warszawa? Wrocław – Kraków? A może inne połączenie? Nie musisz męczyć się w pociągu, stać w kolejkach czy martwić się przesiadkami. Odbierzemy Cię spod drzwi i zawieziemy dokładnie tam, gdzie trzeba. Idealna opcja dla przedsiębiorców, menedżerów, osób podróżujących w celach służbowych i prywatnych.',
		en: 'We offer exclusive inter-city transfers throughout the country. Poznań – Warsaw? Wrocław – Kraków? Or maybe another connection? No need to struggle on a train, stand in queues, or worry about transfers. We will pick you up from your door and take you exactly where you need to be. The perfect option for entrepreneurs, managers, and travelers on business or personal trips.',
	},
	'offer-where': {
		pl: 'Gdzie ',
		en: 'Where do we ',
	},
	'offer-where-bold': {
		pl: 'działamy?',
		en: 'operate?',
	},
	'offer-where-text': {
		pl: 'Nasza firma ma siedzibę w Poznaniu, ale obsługujemy klientów z całej Polski – niezależnie od miejsca rozpoczęcia lub zakończenia przejazdu. Oferujemy komfortowe przewozy VIP zarówno na trasach lokalnych, jak i krajowych czy międzynarodowych. Jeśli potrzebujesz dojazdu na lotnisko, do hotelu, na spotkanie biznesowe, konferencję czy prywatne wydarzenie – dowieziemy Cię dokładnie tam, gdzie potrzebujesz, punktualnie i w klasie premium.',
		en: 'Our company is headquartered in Poznań, but we serve clients from all over Poland – regardless of the start or end point. We offer comfortable VIP transportation on local, national, and international routes. Whether you need a ride to the airport, hotel, business meeting, conference, or private event – we will take you exactly where you need to be, on time and in premium class.',
	},
	'offer-international': {
		pl: 'Obsługa tras ',
		en: 'International ',
	},
	'offer-international-bold': {
		pl: 'międzynarodowych',
		en: 'route services',
	},
	'offer-international-text': {
		pl: 'Realizujemy komfortowe przewozy zagraniczne dla osób, które oczekują dyskretnej, wygodnej i pewnej podróży. Najczęściej obsługujemy trasy do Niemiec, Belgii, Holandii, Czech, Austrii, ale jesteśmy otwarci na inne kierunki. Dla klientów indywidualnych i firm. Często wybierana opcja przy wyjazdach służbowych, relokacjach, czy dla osób, które po prostu chcą podróżować wygodniej niż samolotem lub autokarem.',
		en: 'We provide comfortable international transport for those who expect a discreet, comfortable, and reliable journey. We most frequently serve routes to Germany, Belgium, the Netherlands, Czech Republic, and Austria, but we are open to other destinations. For individual clients and companies. A frequently chosen option for business trips, relocations, or for those who simply want to travel more comfortably than by plane or coach.',
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
		pl: 'Komfort Premium. oferuje komfortową i bezpieczną obsługę autami klasy premium. Specjalizujemy się w luksusowym przewozie osób dla klientów biznesowych. Punktualność i jakość to nasz standard.',
		en: 'Komfort Premium. offers a comfortable and safe service with premium class cars. We specialize in luxury passenger transport for business clients. Punctuality and quality are our standard.',
	},
	'Monday-friday': {
		pl: 'Poniedziałek – Piątek: 08:00 – 17:00',
		en: 'Monday – Friday: 08:00 – 17:00',
	},
	Odnosniki: {
		pl: 'Odnośniki',
		en: 'Links',
	},
	'footer-privacy-policy': {
		pl: 'Polityka prywatności',
		en: 'Privacy Policy',
	},
	'cookie-banner-title': {
		pl: 'Pliki cookies i prywatność',
		en: 'Cookies and privacy',
	},
	'cookie-banner-text': {
		pl: 'Używamy plików cookies, w tym Google Analytics (przez Google Tag Manager), aby analizować ruch na stronie, zachowania użytkowników oraz optymalizować indeksowanie witryny. Klikając „Akceptuję”, wyrażasz zgodę na ich użycie. Więcej informacji znajdziesz w naszej Polityce prywatności.',
		en: 'We use cookies, including Google Analytics (via Google Tag Manager), to analyze site traffic, user behavior, and optimize website indexing. By clicking "Accept", you consent to their use. You can find more information in our Privacy Policy.',
	},
	'cookie-banner-accept': {
		pl: 'Akceptuję',
		en: 'Accept',
	},
	'cookie-banner-privacy-link': {
		pl: 'Polityka prywatności',
		en: 'Privacy Policy',
	},
	'privacy-modal-close': {
		pl: 'Zamknij',
		en: 'Close',
	},
	'privacy-policy-title': {
		pl: 'Polityka prywatności (RODO)',
		en: 'Privacy Policy (GDPR)',
	},
	'privacy-policy-updated': {
		pl: 'Ostatnia aktualizacja: 5 lipca 2026 r.',
		en: 'Last updated: July 5, 2026',
	},
	'privacy-policy-section-1-title': {
		pl: '1. Administrator danych',
		en: '1. Data Controller',
	},
	'privacy-policy-section-1-text': {
		pl: 'Administratorem Twoich danych osobowych jest Komfort Premium (NIP: 8411626366), z siedzibą w Poznaniu, Polska. W sprawach związanych z ochroną danych osobowych możesz skontaktować się z nami pod adresem e-mail: rezerwacjepremium@gmail.com lub telefonicznie: +48 533 515 202.',
		en: 'The controller of your personal data is Komfort Premium (Tax ID: 8411626366), based in Poznań, Poland. For matters related to personal data protection, you can contact us at rezerwacjepremium@gmail.com or by phone at +48 533 515 202.',
	},
	'privacy-policy-section-2-title': {
		pl: '2. Jakie dane przetwarzamy',
		en: '2. What Data We Process',
	},
	'privacy-policy-section-2-text': {
		pl: 'W zależności od sposobu korzystania ze strony możemy przetwarzać: dane podane w formularzu kontaktowym (imię, adres e-mail, treść wiadomości), dane techniczne (adres IP, typ przeglądarki, system operacyjny, czas wizyty), dane z plików cookies oraz dane analityczne dotyczące sposobu korzystania ze strony.',
		en: 'Depending on how you use the website, we may process: data provided in the contact form (name, email address, message content), technical data (IP address, browser type, operating system, visit time), cookie data, and analytics data related to how the website is used.',
	},
	'privacy-policy-section-3-title': {
		pl: '3. Google Analytics i Google Tag Manager',
		en: '3. Google Analytics and Google Tag Manager',
	},
	'privacy-policy-section-3-text': {
		pl: 'Strona korzysta z Google Tag Manager oraz Google Analytics (usługi Google LLC) w celu analizy wyszukiwań użytkowników, zachowań na stronie oraz optymalizacji indeksowania witryny w wyszukiwarkach. Narzędzia te mogą gromadzić m.in. informacje o odwiedzanych podstronach, czasie spędzonym na stronie, źródle ruchu oraz urządzeniu użytkownika. Dane te są przetwarzane w formie zanonimizowanej lub pseudonimizowanej. Google może przekazywać dane do państw trzecich, w tym do USA, na podstawie odpowiednich mechanizmów prawnych. Więcej informacji: https://policies.google.com/privacy',
		en: 'This website uses Google Tag Manager and Google Analytics (Google LLC services) to analyze user searches, on-site behavior, and optimize website indexing in search engines. These tools may collect information such as visited pages, time spent on the site, traffic source, and user device. This data is processed in anonymized or pseudonymized form. Google may transfer data to third countries, including the USA, based on appropriate legal mechanisms. More information: https://policies.google.com/privacy',
	},
	'privacy-policy-section-4-title': {
		pl: '4. Cele i podstawy prawne przetwarzania',
		en: '4. Purposes and Legal Bases for Processing',
	},
	'privacy-policy-section-4-text': {
		pl: 'Dane przetwarzamy w celu: obsługi zapytań i rezerwacji (art. 6 ust. 1 lit. b RODO – działania przed zawarciem umowy), marketingu bezpośredniego własnych usług (art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes), analizy ruchu i statystyk strony (art. 6 ust. 1 lit. a RODO – zgoda na cookies analityczne), zapewnienia bezpieczeństwa i prawidłowego działania strony (art. 6 ust. 1 lit. f RODO).',
		en: 'We process data for the following purposes: handling inquiries and reservations (Art. 6(1)(b) GDPR – steps prior to entering a contract), direct marketing of our own services (Art. 6(1)(f) GDPR – legitimate interest), traffic analysis and website statistics (Art. 6(1)(a) GDPR – consent for analytics cookies), ensuring security and proper website operation (Art. 6(1)(f) GDPR).',
	},
	'privacy-policy-section-5-title': {
		pl: '5. Pliki cookies',
		en: '5. Cookies',
	},
	'privacy-policy-section-5-text': {
		pl: 'Pliki cookies to niewielkie pliki tekstowe zapisywane na Twoim urządzeniu. Używamy cookies niezbędnych do działania strony oraz cookies analitycznych (Google Analytics), które uruchamiamy wyłącznie po wyrażeniu przez Ciebie zgody za pomocą banera cookies. Zgodę możesz w każdej chwili wycofać, usuwając cookies w ustawieniach przeglądarki.',
		en: 'Cookies are small text files stored on your device. We use cookies necessary for the website to function and analytics cookies (Google Analytics), which we activate only after you give consent via the cookie banner. You can withdraw consent at any time by deleting cookies in your browser settings.',
	},
	'privacy-policy-section-6-title': {
		pl: '6. Okres przechowywania danych',
		en: '6. Data Retention Period',
	},
	'privacy-policy-section-6-text': {
		pl: 'Dane z formularza kontaktowego przechowujemy przez okres niezbędny do udzielenia odpowiedzi i realizacji usługi, nie dłużej niż 3 lata od ostatniego kontaktu. Dane analityczne są przechowywane zgodnie z polityką Google Analytics (domyślnie do 14 miesięcy). Zapis zgody na cookies przechowujemy lokalnie w przeglądarce do momentu jego usunięcia.',
		en: 'Contact form data is stored for the period necessary to respond and provide the service, no longer than 3 years from the last contact. Analytics data is stored according to Google Analytics policy (by default up to 14 months). Cookie consent is stored locally in your browser until it is deleted.',
	},
	'privacy-policy-section-7-title': {
		pl: '7. Twoje prawa',
		en: '7. Your Rights',
	},
	'privacy-policy-section-7-text': {
		pl: 'Przysługuje Ci prawo do: dostępu do danych, sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu wobec przetwarzania oraz wycofania zgody w dowolnym momencie (bez wpływu na zgodność z prawem przetwarzania przed wycofaniem). Masz również prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (PUODO), ul. Stawki 2, 00-193 Warszawa.',
		en: 'You have the right to: access your data, rectification, erasure, restriction of processing, data portability, object to processing, and withdraw consent at any time (without affecting the lawfulness of processing before withdrawal). You also have the right to lodge a complaint with the President of the Personal Data Protection Office (PUODO), ul. Stawki 2, 00-193 Warsaw, Poland.',
	},
	'privacy-policy-section-8-title': {
		pl: '8. Odbiorcy danych',
		en: '8. Data Recipients',
	},
	'privacy-policy-section-8-text': {
		pl: 'Twoje dane mogą być przekazywane podmiotom świadczącym usługi hostingowe, poczty elektronicznej oraz Google LLC w związku z korzystaniem z Google Analytics. Podmioty te przetwarzają dane wyłącznie na nasze zlecenie i zgodnie z obowiązującymi umowami powierzenia przetwarzania danych.',
		en: 'Your data may be transferred to entities providing hosting, email services, and Google LLC in connection with the use of Google Analytics. These entities process data only on our behalf and under applicable data processing agreements.',
	},
	'privacy-form-notice-before': {
		pl: 'Wysyłając formularz, akceptujesz naszą',
		en: 'By submitting this form, you accept our',
	},
	'privacy-form-notice-link': {
		pl: 'Politykę prywatności',
		en: 'Privacy Policy',
	},
	'privacy-form-notice-after': {
		pl: '.',
		en: '.',
	},
	'contact-form-name': {
		pl: 'Imię i nazwisko',
		en: 'Full name',
	},
	'contact-form-email': {
		pl: 'Adres e-mail',
		en: 'Email address',
	},
	'contact-form-message': {
		pl: 'Wiadomość',
		en: 'Message',
	},
	'contact-form-submit': {
		pl: 'Wyślij wiadomość',
		en: 'Send message',
	},
	'contact-form-name-placeholder': {
		pl: 'Jan Kowalski',
		en: 'John Smith',
	},
	'contact-form-email-placeholder': {
		pl: 'jan@example.com',
		en: 'john@example.com',
	},
	'contact-form-message-placeholder': {
		pl: 'Opisz swoje zapytanie...',
		en: 'Describe your inquiry...',
	},
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
	const [lang, setLang] = useState('pl');

	// Simple toggle
	const toggleLanguage = () => {
		setLang((prev) => (prev === 'pl' ? 'en' : 'pl'));
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
