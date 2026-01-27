import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-YS25EYM317";

/**
 * Initialize Google Analytics
 */
export const initGA = (): void => {
  if (MEASUREMENT_ID && typeof window !== "undefined") {
    ReactGA.initialize(MEASUREMENT_ID, {
      gaOptions: {
        anonymizeIp: true, // GDPR compliance
      },
    });
  }
};

/**
 * Track page view
 */
export const logPageView = (path?: string): void => {
  if (MEASUREMENT_ID) {
    const page = path || window.location.pathname + window.location.search;
    ReactGA.send({ hitType: "pageview", page });
  }
};

/**
 * Track custom events
 */
export const logEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number
): void => {
  if (MEASUREMENT_ID) {
    ReactGA.event({
      category,
      action,
      label,
      value,
    });
  }
};

/**
 * Check if analytics is enabled
 */
export const isAnalyticsEnabled = (): boolean => {
  return !!MEASUREMENT_ID;
};
