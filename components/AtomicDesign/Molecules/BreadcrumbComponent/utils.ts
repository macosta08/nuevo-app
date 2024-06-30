import { NextRouter } from "next/router";

export const completedArrayRouters = (router: NextRouter) => {
    const path = router.asPath.split('?')[0]; // Ignorar parámetros de consulta
    const parts = path.split('/').filter((part) => part);
  
    // Construye los enlaces incrementales
    return parts.map((part, index) => {
      const link = '/' + parts.slice(0, index + 1).join('/');
      return { name: part, link };
    });
  };
  export const capitalizeSentence = (str: string) => {
    if (!str) return '';
    str = str.replace(/-/g, ' '); // Reemplazar guiones con espacios
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  export const contarSlash = (cadena: string) =>
    (cadena.match(/\//g) || []).length;
  
  export  const isAlphanumericWithFixedLength = (str: string) => {
    // Expresión regular para verificar si hay al menos una letra
    const hasLetter = /[a-zA-Z]/.test(str);
    // Expresión regular para verificar si hay al menos un número
    const hasNumber = /[0-9]/.test(str);

    // Retorna true si el string contiene al menos una letra y un número
    return hasLetter && hasNumber;
  };  