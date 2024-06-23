export default function renameResApi(response) {
  // comentario
  const options = response
    ?.map((item) => {
      if (item.codigo !== '' && item.codigo) {
        return {
          id: item.codigo,
          name: item.nombre || item.razonSocial,
        };
      }
      return null;
    })
    .filter(Boolean);

  return options;
}
