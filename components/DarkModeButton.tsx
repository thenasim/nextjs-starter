import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

// Icons
import { BsMoon } from "react-icons/bs";
import { FiSun } from "react-icons/fi";

export const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle dark mode button"
      onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
      className="px-3 py-3 text-base font-semibold text-gray-800 bg-gray-100 rounded-md focus:outline-none dark:bg-gray-800 dark:text-gray-100"
    >
      {mounted ? theme === "dark" ? <FiSun /> : <BsMoon /> : <BsMoon />}
    </button>
  );
};
