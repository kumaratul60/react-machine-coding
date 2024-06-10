import { useContext } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkThemeMode: () => {},
  lightThemeMode: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

// Named Export
// export const useTheme = () => {
//   return useContext(ThemeContext);
// };

// Default Export
export default function useTheme() {
  return useContext(ThemeContext);
}
