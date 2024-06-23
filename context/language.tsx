import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
const LanguageStatusContext = createContext(null);

const LanguageStatusProvider = ({ children }) => {
  const defaultLanguage = 'es';
  const languageSecundary = 'en';
  let routes = useRouter();

  const [languageState, setLanguageState] = useState(defaultLanguage);

  useEffect(() => {
    const lang = navigator['userLanguage'] || navigator.language;
    setLanguageState(lang.substring(0, 2));
  }, []);
  return (
    <LanguageStatusContext.Provider
      value={{
        defaultLanguage,
        languageSecundary,
        languageState,
        setLanguageState,
      }}
    >
      {children}
    </LanguageStatusContext.Provider>
  );
};

/* custom hook */
export const useLanguageStatusContext = () => useContext(LanguageStatusContext);

export { LanguageStatusContext, LanguageStatusProvider };
