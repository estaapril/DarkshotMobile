import { darkMode, lightMode } from "../styles/global";

const useTheme = (isDark) => {
  const theme = isDark ? darkMode : lightMode;
  return { theme };
};

export default useTheme;
