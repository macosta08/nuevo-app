import React, { InputHTMLAttributes } from 'react';
import { FormikErrors } from 'formik';

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  extraclass?: boolean;
}

const RadioInput: React.FC<RadioInputProps> = ({
  label,
  type = 'radio', // Default to 'radio' type
  placeholder,
  error,
  extraclass,
  ...rest
}) => (
  <div className={`w-full border bg-white p-4 rounded-md ${extraclass ? 'border-green-600' : 'border-red-600'}`}>
    <label className='flex items-center cursor-pointer'>
      <input
        type={type}
        className='hidden'
        {...rest}
      />
      <div className='flex items-center justify-center w-6 h-6 border-2 border-gray-400 rounded-md'>
        {/* Circle for checked state */}
        <div className={`w-4 h-4 rounded-full ${extraclass ? 'bg-green-600' : 'bg-red-600'} ${rest.checked ? 'block' : 'hidden'}`}></div>
      </div>
      <span className='ml-2 text-gray-700 dark:text-gray-200'>{label}</span>
    </label>
    {typeof error === 'string' ? (
      <div className='error text-red-500 mt-2'>{error}</div>
    ) : null}
  </div>
);

export default RadioInput;
