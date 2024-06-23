import { createContext, useContext } from 'react';

export const BatchContext = createContext(null);

export function useBatches() {
  return useContext(BatchContext);
}
