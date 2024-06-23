import { createContext, useContext, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

const WhereContext = createContext(null);
const isBrowser = typeof window !== `undefined`;

function WhereContextProvider({ children }) {
  const session: any = useSession();
  const rolContable = session[0]?.user?.roles.some(
    (itemRol) => itemRol.name !== 'Contable' && itemRol.name !== 'Operaciones'
  );
  const [whereValue, setWhere] = useState({
    AND: [
      {
        reservationState: {
          not: {
            equals: 'Eliminada',
          },
        },
      },
      rolContable && {
        reservationState: {
          not: {
            equals: 'Borrador',
          },
        },
      },
    ],
  });

  useEffect(() => {
    const localData: any = isBrowser
      ? localStorage.getItem('accomodationSelectors')
      : whereValue;
    if (localData) {
      setWhere(JSON.parse(localData));
    }
  }, []);

  const setWhereValue = (value) => {
    if (isBrowser) {
      localStorage.setItem('accomodationSelectors', JSON.stringify(value));
    }
    setWhere(value);
  };

  return (
    <WhereContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        whereValue,
        setWhereValue,
      }}
    >
      {children}
    </WhereContext.Provider>
  );
}

export const useWhereContext = () => useContext(WhereContext);

export { WhereContext, WhereContextProvider };
