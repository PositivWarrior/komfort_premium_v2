'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import {
  getStoredConsent,
  hasAnalyticsConsent,
  saveConsent,
} from '../lib/consent';

const PrivacyContext = createContext(null);

export function PrivacyProvider({ children }) {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [consentReady, setConsentReady] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    setAnalyticsConsent(hasAnalyticsConsent());
    setShowCookieBanner(!stored);
    setConsentReady(true);
  }, []);

  const openPrivacyModal = useCallback(() => {
    setIsPrivacyModalOpen(true);
  }, []);

  const closePrivacyModal = useCallback(() => {
    setIsPrivacyModalOpen(false);
  }, []);

  const acceptCookies = useCallback(() => {
    saveConsent({ analytics: true });
    setAnalyticsConsent(true);
    setShowCookieBanner(false);
  }, []);

  return (
    <PrivacyContext.Provider
      value={{
        isPrivacyModalOpen,
        openPrivacyModal,
        closePrivacyModal,
        consentReady,
        showCookieBanner,
        acceptCookies,
        analyticsConsent,
      }}
    >
      {children}
    </PrivacyContext.Provider>
  );
}

export function usePrivacy() {
  const context = useContext(PrivacyContext);

  if (!context) {
    throw new Error('usePrivacy must be used within a PrivacyProvider');
  }

  return context;
}
