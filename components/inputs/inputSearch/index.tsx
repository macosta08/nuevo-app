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
  onClick?: any;
  onKeyDown?: any;
};

function InputSearch({
  type,
  name,
  label,
  placeholder,
  required = false,
  children,
  value,
  extraClassNames = '',
  onKeyDown,
  onChange,
  defaultValue = '',
  disabled = false,
  readOnly = false,
  onClick,
}: InputType) {
  return (
    <label
      htmlFor={name}
      className={`font-secondaryFont ${
        children ? 'relative h-full' : 'flex flex-col'
      } ${extraClassNames}`}
    >
      <span>
        {label}
        {required && <span className='text-red-900'> * </span>}
      </span>
      {defaultValue ? (
        <div className='relative flex'>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={`${
              disabled
                ? 'border border-x-2 border-b-2 border-grey-700  bg-grey-700 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'
                : 'text-darkBlue500 border focus:border-purple-500'
            } py-2 pl-2 ${
              type === 'text' ? 'pr-2' : 'pr-8'
            } w-full rounded-xl border-x-2 border-b-2 border-b-purple-500 bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] focus:border-2  focus:outline-none`}
            required={required}
            onChange={onChange}
            onKeyDown={onKeyDown}
            defaultValue={defaultValue}
            disabled={disabled}
            readOnly={readOnly}
          />
          <span className='absolute inset-y-0 right-0 flex items-center pr-3'>
            <button type='button' onClick={onClick}>
              <img
                src='img/icons/search.svg'
                alt='search'
                className='h-[20px] w-[20px]'
              />
            </button>
          </span>
        </div>
      ) : (
        <div className='relative flex '>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={`${
              disabled
                ? 'border-inputBorder border-x-2 border-b-2  border-grey-700 bg-grey-700 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'
                : 'border-inputBorder border-x-2 border-b-2  border-b-purple-500  bg-white '
            } py-2 pl-2  ${
              type === 'text' ? 'pr-2' : 'pr-8'
            } w-full rounded-[10px] border-x-2 border-b-2 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]  focus:border-2 focus:outline-purple-500`}
            required={required}
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={value}
            disabled={disabled}
          />
          <span className='absolute inset-y-0 right-0 flex items-center pr-3'>
            <button type='button' onClick={onClick} onKeyDown={onKeyDown}>
              <img
                src='/img/icons/search.svg'
                alt='search'
                className='h-[20px] w-[20px]'
              />
            </button>
          </span>
        </div>
      )}
      {children}
    </label>
  );
}

export default InputSearch;
