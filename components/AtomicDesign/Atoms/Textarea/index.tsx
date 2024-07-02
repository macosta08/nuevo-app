import React, { TextareaHTMLAttributes, useRef } from 'react';
import { FormikErrors } from 'formik';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  error,
  ...rest
}) => {
  return (
    <div className='w-full'>
      <label className='text-gray-700 dark:text-gray-200'>{label}</label>
      <textarea
        placeholder={placeholder}
        className='form-textarea disabled:bg-slate-200 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300'
        rows={5}
        {...rest}
      />
      {typeof error === 'string' ? (
        <div className='error text-red-500 mt-2'>{error}</div>
      ) : null}
    </div>
  );
};

export default TextArea;
