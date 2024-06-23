import React from 'react';
import handleDownload from 'utils/downloadFile';
import { useToastContext } from 'context/toast';

interface DownloadButtonProps {
  fileName: string; // Este sería el path del archivo en el bucket
  children: any;
}

function DownloadButton({ fileName, children }: DownloadButtonProps) {
  const { setToastState } = useToastContext();
  return (
    <button
      type='button'
      onClick={() =>
        handleDownload({
          bucket: 'examenes-realizados',
          fileName,
          setToastState,
        })
      }
    >
      {children}
    </button>
  );
}

export default DownloadButton;
