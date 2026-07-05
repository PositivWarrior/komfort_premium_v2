'use client';

import { usePrivacy } from '../context/PrivacyContext';
import { useLanguage } from '../context/LanguageContext';

export default function CookieBanner() {
  const { consentReady, showCookieBanner, acceptCookies, openPrivacyModal } = usePrivacy();
  const { t } = useLanguage();

  if (!consentReady || !showCookieBanner) {
    return null;
  }

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-live="polite"
      aria-label={t('cookie-banner-title')}
    >
      <div className="cookie-banner__inner">
        <div className="cookie-banner__content">
          <p className="cookie-banner__title">{t('cookie-banner-title')}</p>
          <p className="cookie-banner__text">{t('cookie-banner-text')}</p>
        </div>

        <div className="cookie-banner__actions">
          <button type="button" className="btn-gold cookie-banner__accept" onClick={acceptCookies}>
            {t('cookie-banner-accept')}
          </button>
          <button
            type="button"
            className="cookie-banner__policy-link"
            onClick={openPrivacyModal}
          >
            {t('cookie-banner-privacy-link')}
          </button>
        </div>
      </div>
    </div>
  );
}
