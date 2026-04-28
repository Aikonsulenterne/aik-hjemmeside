"use client";

/**
 * Knap der genåbner Cookiebot-banneret så brugeren kan ændre/trække samtykke.
 * Kræver at Cookiebot er loadet (ellers vises intet).
 */
export default function CookieConsentLink({
  className = "",
}: {
  className?: string;
}) {
  function openCookieSettings() {
    const cookiebot = (
      window as unknown as { Cookiebot?: { renew?: () => void } }
    ).Cookiebot;
    cookiebot?.renew?.();
  }

  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className={className}
    >
      Administrer cookies
    </button>
  );
}
