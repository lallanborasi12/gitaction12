import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const OpenCalmateApp = () => {
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const token = urlParams.get("token");
    if (token) {
      // Try to open the app using a deep link
      window.location.href = `calmateapp://magic-login?token=${token}`;
      // If the app isn't installed, fallback to Play Store
      setTimeout(() => {
        window.location.href =
          "https://play.google.com/store/apps/details?id=com.calmateapp";
      }, 1500);
    } else {
      console.warn("Token not found in query params");
    }
  }, [location.search]);

  return (
<div className="mx-auto max-w-xs mt-10 mb-10 flex flex-col items-center min-h-full h-[calc(100vh-396px)]">
      <p>Opening Calmate App...</p>
    </div>
  );
};

export default OpenCalmateApp;
