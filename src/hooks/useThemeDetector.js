import { useEffect, useState } from "react";

export function useThemeDetector() {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkMode, setIsDarkMode] = useState(getCurrentTheme());
  const mqListener = (e) => {
    setIsDarkMode(e.matches);
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addListener(mqListener);
    return () => darkThemeMq.removeListener(mqListener);
  }, []);

  return { isDarkMode, setIsDarkMode };
}
