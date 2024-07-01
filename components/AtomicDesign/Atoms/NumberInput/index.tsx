import React, { InputHTMLAttributes } from 'react';
import { FormikErrors } from 'formik';
import { NumericFormat } from 'react-number-format';

interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  thousandSeparator?: boolean;
}

const NumberInput: React.FC<NumberInputProps> = ({
  label,
  placeholder,
  error,
  ...rest
}) => (
  <div>
    <label className='text-gray-700  dark:text-gray-200'>{label}</label>
    <NumericFormat {...rest}   
        placeholder={placeholder} 
        thousandSeparator={thousandSeparator}
        className='form-radio disabled:bg-slate-200 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300'
    />
    {typeof error === 'string' ? (
        <div className="error">{error}</div>
    ) : null}
  </div>
);

export default NumberInput;

