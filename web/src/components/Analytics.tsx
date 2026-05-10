"use client";

import Script from "next/script";

/**
 * Analytics + Consent Management
 *
 * Flow:
 *   1. Google Consent Mode v2 initialiseres med ALT denied (GDPR-safe default)
 *   2. Cookiebot loader — viser banner, venter på bruger-valg
 *   3. Cookiebot opdaterer Consent Mode baseret på brugerens valg
 *   4. GA4 og andre scripts aktiveres kun hvis consent er givet
 *
 * Scripts tagget med data-cookieconsent="statistics|marketing" blokeres
 * automatisk af Cookiebot indtil samtykke er givet.
 */
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const cookiebotId = process.env.NEXT_PUBLIC_COOKIEBOT_ID;

  return (
    <>
      {/* 1. Google Consent Mode v2 — SKAL loades før alt andet */}
      <Script id="gcm-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied',
            'functionality_storage': 'granted',
            'security_storage': 'granted',
            'wait_for_update': 500
          });
        `}
      </Script>

      {/* 2. Cookiebot — viser consent-banner og opdaterer Consent Mode automatisk */}
      {cookiebotId && (
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid={cookiebotId}
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />
      )}

      {/* 3. Google Analytics 4 — scripts med data-cookieconsent blokeres auto af Cookiebot */}
      {gaId && (
        <>
          <Script
            id="ga4-loader"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
            data-cookieconsent="statistics"
          />
          <Script
            id="ga4-config"
            strategy="afterInteractive"
            data-cookieconsent="statistics"
          >
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                anonymize_ip: true,
                cookie_flags: 'SameSite=None;Secure'
              });
            `}
          </Script>
        </>
      )}
    </>
  );
}
