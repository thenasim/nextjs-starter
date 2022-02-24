import { useCurrentTheme } from "@/utils/hooks";
import { BiMoon } from "react-icons/bi";
import { BiSun } from "react-icons/bi";

export const DarkModeButton = () => {
  const { isDark, toggleTheme } = useCurrentTheme();

  return (
    <button
      aria-label="Toggle dark mode button"
      onClick={toggleTheme}
      className="px-3 py-3 text-base font-semibold text-gray-800 bg-gray-100 rounded-md focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus-visible:ring-2 dark:focus-visible:ring-gray-700 focus-visible:ring-gray-200 ring-offset-1 ring-offset-body-main"
    >
      {isDark ? <BiSun size="1.3em" /> : <BiMoon size="1.3em" />}
    </button>
  );
};
