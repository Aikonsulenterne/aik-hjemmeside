"use client";

import { useEffect, useState } from "react";

type CalBookingProps = {
  calUsername?: string;
  className?: string;
};

export default function CalBooking({
  calUsername,
  className = "",
}: CalBookingProps) {
  const [consentGiven, setConsentGiven] = useState(false);
  const username = calUsername || process.env.NEXT_PUBLIC_CAL_USERNAME;

  useEffect(() => {
    // Check Cookiebot consent before loading Cal.com
    if (typeof window !== "undefined") {
      const checkConsent = () => {
        const cookiebot = (window as unknown as { Cookiebot?: { consent?: { marketing: boolean } } }).Cookiebot;
        if (cookiebot?.consent?.marketing) {
          setConsentGiven(true);
        }
      };

      // Check immediately
      checkConsent();

      // Listen for consent changes
      window.addEventListener("CookiebotOnAccept", checkConsent);
      return () =>
        window.removeEventListener("CookiebotOnAccept", checkConsent);
    }
  }, []);

  useEffect(() => {
    if (!consentGiven || !username) return;

    // Load Cal.com embed script
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [consentGiven, username]);

  if (!username) {
    return (
      <div className={`bg-gray-50 rounded-2xl p-8 text-center ${className}`}>
        <p className="text-gray-500">
          Booking er ikke konfigureret endnu. Ring til os i stedet:{" "}
          <a
            href="tel:+4525547074"
            className="text-primary font-semibold hover:underline"
          >
            +45 25 54 70 74
          </a>
        </p>
      </div>
    );
  }

  if (!consentGiven) {
    return (
      <div className={`bg-gray-50 rounded-2xl p-8 text-center ${className}`}>
        <p className="text-gray-500 mb-4">
          For at vise booking-kalenderen skal du acceptere marketing-cookies.
        </p>
        <button
          onClick={() => {
            const cookiebot = (window as unknown as { Cookiebot?: { renew: () => void } }).Cookiebot;
            cookiebot?.renew();
          }}
          className="text-primary font-semibold hover:underline"
        >
          Administrer cookies
        </button>
      </div>
    );
  }

  return (
    <div
      className={className}
      data-cal-link={username}
      data-cal-config='{"layout":"month_view"}'
    />
  );
}
