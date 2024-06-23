import { createContext, useContext, useState } from 'react';
const AndContext = createContext(null);

const AndContextProvider = ({ children }) => {
  const [and, setAnd] = useState({});
  return (
    <AndContext.Provider
      value={{
        and,
        setAnd,
      }}
    >
      {children}
    </AndContext.Provider>
  );
};

/* custom hook */
export const useAndContext = () => useContext(AndContext);

export { AndContext, AndContextProvider };
