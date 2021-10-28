import { useCurrentTheme } from "@/utils/useCurrentTheme";
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";

export const DarkModeButton = () => {
  const { isDark, toggleTheme } = useCurrentTheme();

  return (
    <button
      aria-label="Toggle dark mode button"
      onClick={toggleTheme}
      className="px-3 py-3 text-base font-semibold text-gray-800 bg-gray-100 rounded-md focus:outline-none dark:bg-gray-800 dark:text-gray-100"
    >
      {isDark ? <FiSun /> : <FiMoon />}
    </button>
  );
};
