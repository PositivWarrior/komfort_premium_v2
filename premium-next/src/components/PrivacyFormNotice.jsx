'use client';

import { usePrivacy } from '../context/PrivacyContext';
import { useLanguage } from '../context/LanguageContext';

export default function PrivacyFormNotice({ className = '' }) {
  const { openPrivacyModal } = usePrivacy();
  const { t } = useLanguage();

  return (
    <p className={`privacy-form-notice ${className}`.trim()}>
      {t('privacy-form-notice-before')}{' '}
      <button type="button" className="privacy-form-notice__link" onClick={openPrivacyModal}>
        {t('privacy-form-notice-link')}
      </button>
      {t('privacy-form-notice-after')}
    </p>
  );
}
