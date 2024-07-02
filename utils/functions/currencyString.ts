export const currencyStringToFloat = (value: string | number): number  => {
    if (typeof value === 'number') {
        return value;
      }
      
      // Eliminar el símbolo de dólar y las comas si es una cadena
      const cleanedStr: string = value.replace(/[$,]/g, '');
      
      // Convertir la cadena a un número flotante
      const floatNumber: number = parseFloat(cleanedStr);
      
      return floatNumber;
}

export const isoStringToDate = (isoString: string): string => {
    // Crear un objeto Date a partir de la cadena ISO
    const date = new Date(isoString);
  
    // Obtener el año, mes y día
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11, por eso se añade 1
    const day = String(date.getDate()).padStart(2, '0');
  
    // Formatear la fecha en YYYY-MM-DD
    const formattedDate = `${year}-${month}-${day}`;
  
    return formattedDate;
  }

  export const floatToCurrencyString = (value: number): string => {
    return `$${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  }