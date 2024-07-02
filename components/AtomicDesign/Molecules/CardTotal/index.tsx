import React from 'react';
import { floatToCurrencyString } from 'utils/functions/currencyString';

interface CardTotalProps {
  totalIngreso: number;
  totalEgreso: number;
}

const CardTotal: React.FC<CardTotalProps> = ({ totalIngreso, totalEgreso }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Total</h2>
        <div className="flex justify-between">
          <span className="text-gray-700">Ingreso:</span>
          <span className="text-green-500">{floatToCurrencyString(totalIngreso)}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-gray-700">Egreso:</span>
          <span className="text-red-500">{floatToCurrencyString(totalEgreso)}</span>
        </div>
      </div>
    </div>
  );
}

export default CardTotal;
