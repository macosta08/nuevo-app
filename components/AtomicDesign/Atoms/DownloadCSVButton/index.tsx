import { Button } from '@components/ui/button';
import React from 'react';
import { IngresosEgresosProps } from 'types';

function convertToCSV(array: any[]): string {
  const headers = Object.keys(array[0]).join(',');
  const rows = array.map((obj) => {
    return Object.values(obj)
      .map((value) => {
        if (typeof value === 'object' && value !== null) {
          return Object.values(value).join(',');
        }
        return value;
      })
      .join(',');
  });

  return `${headers}\n${rows.join('\n')}`;
}

function downloadCSV(csv: string, filename: string): void {
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');

  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

const DownloadCSVButton = ({ data }: { data: IngresosEgresosProps[] }) => {
  const handleDownload = () => {
    const csv = convertToCSV(data);
    downloadCSV(csv, 'reporte.csv');
  };

  return (
    <Button variant='link' onClick={handleDownload}>
      Descargar CSV
    </Button>
  );
};

export default DownloadCSVButton;
