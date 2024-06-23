import { createContext, useContext, useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
const ToastContext = createContext(null);

const ToastContextProvider = ({ children }) => {
  const [toastState, setToastState] = useState({ message: '', type: '' });

  useEffect(() => {
    if (toastState.message !== '') {
      if (toastState.type === 'error') {
        toast.error(toastState.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else if (toastState.type === 'success') {
        toast.success(toastState.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    }
  }, [toastState]);

  return (
    <ToastContext.Provider
      value={{
        toastState,
        setToastState,
      }}
    >
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

/* custom hook */
export const useToastContext = () => useContext(ToastContext);

export { ToastContext, ToastContextProvider };
