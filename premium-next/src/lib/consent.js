export const CONSENT_STORAGE_KEY = 'komfort_premium_cookie_consent';

export function getStoredConsent() {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) {
      return null;
    }

    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function hasAnalyticsConsent() {
  const consent = getStoredConsent();
  return consent?.analytics === true;
}

export function saveConsent({ analytics = true } = {}) {
  if (typeof window === 'undefined') {
    return;
  }

  const payload = {
    analytics,
    timestamp: new Date().toISOString(),
  };

  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(payload));
}
