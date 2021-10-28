import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const useCurrentTheme = () => {
  const { theme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const activeTheme = theme === "system" ? systemTheme : theme;
  const isDark = mounted && activeTheme === "dark";
  const isLight = mounted && activeTheme === "light";

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    if (activeTheme === "light") {
      return setTheme("dark");
    }
    return setTheme("light");
  };

  return { isDark, isLight, toggleTheme };
};
