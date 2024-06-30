import React, { InputHTMLAttributes } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  type,
  placeholder,
  ...rest
}) => (
  <div>
    <label className='text-gray-700  dark:text-gray-200'>
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className='form-radio mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300'
      {...rest}
    />
  </div>
);

export default TextInput;
