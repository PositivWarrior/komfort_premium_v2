'use client';

import { useEffect } from 'react';
import { usePrivacy } from '../context/PrivacyContext';
import { useLanguage } from '../context/LanguageContext';

const POLICY_SECTION_KEYS = [
  'privacy-policy-section-1',
  'privacy-policy-section-2',
  'privacy-policy-section-3',
  'privacy-policy-section-4',
  'privacy-policy-section-5',
  'privacy-policy-section-6',
  'privacy-policy-section-7',
  'privacy-policy-section-8',
];

export default function PrivacyPolicyModal() {
  const { isPrivacyModalOpen, closePrivacyModal } = usePrivacy();
  const { t } = useLanguage();

  useEffect(() => {
    if (!isPrivacyModalOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closePrivacyModal();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPrivacyModalOpen, closePrivacyModal]);

  if (!isPrivacyModalOpen) {
    return null;
  }

  return (
    <div className="privacy-modal" role="presentation">
      <button
        type="button"
        className="privacy-modal__backdrop"
        aria-label={t('privacy-modal-close')}
        onClick={closePrivacyModal}
      />

      <div
        className="privacy-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-modal-title"
      >
        <div className="privacy-modal__header">
          <h2 id="privacy-modal-title" className="privacy-modal__title">
            {t('privacy-policy-title')}
          </h2>
          <button
            type="button"
            className="privacy-modal__close"
            aria-label={t('privacy-modal-close')}
            onClick={closePrivacyModal}
          >
            ×
          </button>
        </div>

        <div className="privacy-modal__body">
          <p className="privacy-modal__updated">{t('privacy-policy-updated')}</p>

          {POLICY_SECTION_KEYS.map((key) => (
            <section key={key} className="privacy-modal__section">
              <h3>{t(`${key}-title`)}</h3>
              <p>{t(`${key}-text`)}</p>
            </section>
          ))}
        </div>

        <div className="privacy-modal__footer">
          <button type="button" className="btn-gold" onClick={closePrivacyModal}>
            {t('privacy-modal-close')}
          </button>
        </div>
      </div>
    </div>
  );
}
