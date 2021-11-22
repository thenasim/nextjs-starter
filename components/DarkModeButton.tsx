import { useCurrentTheme } from "@/utils/useCurrentTheme";
import { BiMoon } from "react-icons/bi";
import { BiSun } from "react-icons/bi";

export const DarkModeButton = () => {
  const { isDark, toggleTheme } = useCurrentTheme();

  return (
    <button
      aria-label="Toggle dark mode button"
      onClick={toggleTheme}
      className="px-3 py-3 text-base font-semibold text-gray-800 bg-gray-100 rounded-md focus:outline-none dark:bg-gray-800 dark:text-gray-100"
    >
      {isDark ? <BiSun size="1.3em" /> : <BiMoon size="1.3em" />}
    </button>
  );
};
