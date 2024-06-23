const handleDownload = async ({ bucket, fileName, setToastState }) => {
  const response = await fetch(
    `/api/download?bucketName=${bucket}&fileName=${fileName}`
  );
  if (response.ok) {
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  } else {
    setToastState({
      message: 'Error',
      type: 'error',
    });
  }
};

export default handleDownload;
