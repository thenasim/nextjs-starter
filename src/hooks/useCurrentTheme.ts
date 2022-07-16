import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const useCurrentTheme = () => {
  const { theme, systemTheme, setTheme: setTheTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const activeTheme = theme === "system" ? systemTheme : theme;
  const isSystem = isMounted && theme === "system";
  const isDark = !isSystem && activeTheme === "dark";
  const isLight = !isSystem && activeTheme === "light";

  useEffect(() => setIsMounted(true), []);

  const setTheme = (t: "light" | "dark" | "system") => {
    setTheTheme(t);
  };

  return { isDark, isLight, isSystem, isMounted, setTheme };
};
