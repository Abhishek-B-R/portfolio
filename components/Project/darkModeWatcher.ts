import { useEffect, useState } from "react";

export const useDarkModeWatcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // default to false

  useEffect(() => {
    // This block only runs on the client
    const checkDark = () =>
      document.documentElement.classList.contains("dark");

    // Set initial mode
    setIsDarkMode(checkDark());

    const observer = new MutationObserver(() => {
      setIsDarkMode(checkDark());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return isDarkMode;
};
