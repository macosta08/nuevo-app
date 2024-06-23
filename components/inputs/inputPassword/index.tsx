import * as React from 'react';

type InputType = {
  type: React.HTMLInputTypeAttribute;
  name: string;
  label?: string;
  extraClassNames?: string;
  placeholder: string;
  required?: boolean;
  children?: React.ReactNode;
  value?: any;
  onChange?: any;
  defaultValue?: any;
  disabled?: boolean;
  readOnly?: boolean;
};

function InputPassword({
  type,
  name,
  label,
  placeholder,
  required = false,
  children,
  value,
  extraClassNames = '',
  onChange,
  defaultValue = '',
  disabled = false,
  readOnly = false,
}: InputType) {
  return (
    <label
      htmlFor={name}
      className={`${
        children ? 'relative h-full' : 'flex flex-col'
      } ${extraClassNames}`}
    >
      <span>
        {label}
        {required && <span className='text-red-900'> * </span>}
      </span>
      {defaultValue ? (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={`${
            disabled
              ? 'border-inputBorder border-x-2 border-b-2   border-grey-700 bg-grey-700 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'
              : 'border-inputBorder text-darkBlue500  focus:border-purple-500'
          } py-2 pl-2 ${
            type === 'text' ? 'pr-2' : 'pr-8'
          } w-full   rounded-xl border-x-2 border-b-2   border-b-purple-500 bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] focus:border-2  focus:outline-none`}
          required={required}
          onChange={onChange}
          defaultValue={defaultValue}
          disabled={disabled}
          readOnly={readOnly}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={`${
            disabled
              ? 'border-inputBorder border-x-2 border-b-2   border-grey-700 bg-grey-700 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'
              : 'border-inputBorder border-x-2 border-b-2   border-b-purple-500  bg-white '
          } py-2 pl-2  ${
            type === 'text' ? 'pr-2' : 'pr-8'
          } w-full rounded-[10px] border-x-2 border-b-2  shadow-[0px_4px_4px_rgba(0,0,0,0.25)]  focus:border-2 focus:outline-purple-500`}
          required={required}
          onChange={onChange}
          value={value}
          disabled={disabled}
        />
      )}
      {children}
    </label>
  );
}

export default InputPassword;
