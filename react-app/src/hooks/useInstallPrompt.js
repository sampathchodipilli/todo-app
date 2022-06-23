import React, { useEffect, useState } from "react";

const useInstallPrompt = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      // console.log("Supports PWA");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const installPrompt = (event) => {
    event.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  return [installPrompt, supportsPWA];
};

export default useInstallPrompt;
