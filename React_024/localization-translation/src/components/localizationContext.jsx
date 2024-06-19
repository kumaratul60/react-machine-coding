import { createContext, useContext, useState } from "react";

const localizedString = {
  en: {
    greeting: "Hello, world!",
    welcome: "Welcome to my app",
  },
  es: {
    greeting: "Hola, mundo!",
    welcome: "¡Bienvenido a mi aplicación!",
  },
};

const LocalizationContext = createContext();

export const useLocalization = () => {
    return useContext(LocalizationContext)
}

// eslint-disable-next-line react/prop-types
export function LocalizationProvider({ children }) {

    const [locale, setLocale] = useState("en")

    const translate = (key) => {
        return localizedString[locale][key]

    }

    return (
      <LocalizationContext.Provider value={{ locale, setLocale, translate }}>
        {children}
      </LocalizationContext.Provider>
    );
}