import * as React from 'react';
import NumberFormat from 'react-number-format';

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

function Input({
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
              ? 'text-inputBorder shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] border-[2px] border-purple-500  opacity-90'
              : 'border-inputBorder text-darkBlue500 shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] hover:border-purple-200  focus:border-purple-500'
          } py-2 pl-2 ${
            type === 'date' ? 'pr-2' : 'pr-8'
          } w-full   rounded-xl  border focus:border-2  focus:outline-none`}
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
              ? 'border-inputBorder text-inputBorder border-[2px] border-opacity-25 opacity-90'
              : 'border-inputBorder text-darkBlue500 hover:border-darkBlue100 focus:border-darkBlue100'
          } py-2 pl-2  ${
            type === 'date' ? 'pr-2' : 'pr-8'
          } w-full rounded-[10px] border-[2px] border-b-purple-500 shadow-[0_4px_4px_rgba(0,0,0,0.25)] focus:border-2 focus:outline-none`}
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

type NumberInputType = {
  name: string;
  label?: string;
  placeholder: string;
  required?: boolean;
  children?: React.ReactNode;
  value?: string;
  onChange?: any;
  extraClassNames?: string;
  thousandSeparator?: boolean;
  prefix?: string;
  suffix?: string;
  fixedDecimalScale?: boolean;
  decimalScale?: number;
  allowNegative?: boolean;
  format?: string;
  defaultValue?: string;
  allowLeadingZeros?: boolean;
  disabled?: boolean;
};

function NumberInput({
  name,
  label,
  placeholder,
  required = false,
  children,
  value,
  onChange,
  thousandSeparator = true,
  allowNegative = false,
  decimalScale = 0,
  fixedDecimalScale = false,
  allowLeadingZeros = false,
  extraClassNames = '',
  prefix = '',
  suffix = '',
  format = '',
  defaultValue = '',
  disabled = false,
}: NumberInputType) {
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
      {format ? (
        <NumberFormat
          name={name}
          placeholder={placeholder}
          thousandSeparator={thousandSeparator}
          fixedDecimalScale={fixedDecimalScale}
          decimalScale={decimalScale}
          allowNegative={allowNegative}
          allowLeadingZeros={allowLeadingZeros}
          prefix={prefix}
          suffix={suffix}
          format={format}
          className={`${
            disabled
              ? 'border border-purple-800 border-opacity-25 opacity-90'
              : 'hover:border-darkBlue100 focus:border-darkBlue100 border border-purple-800'
          } w-full rounded-xl border py-2   pl-2  pr-8 focus:border-2  focus:outline-none`}
          required={required}
          onChange={onChange}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
        />
      ) : (
        <NumberFormat
          name={name}
          placeholder={placeholder}
          thousandSeparator={thousandSeparator}
          fixedDecimalScale={fixedDecimalScale}
          decimalScale={decimalScale}
          allowNegative={allowNegative}
          allowLeadingZeros={allowLeadingZeros}
          prefix={prefix}
          suffix={suffix}
          className={`${
            disabled
              ? 'border-inputBorder text-inputBorder border border-opacity-25 opacity-90'
              : 'border-inputBorder text-darkBlue500 hover:border-darkBlue100 focus:border-darkBlue100'
          } w-full rounded-xl border py-2   pl-2  pr-8 focus:border-2  focus:outline-none`}
          required={required}
          onChange={onChange}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
        />
      )}
      {children}
    </label>
  );
}

type TextareaType = {
  label: string;
  name: string;
  required?: boolean;
  rows?: number;
  cols?: number;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
};

function Textarea({
  label,
  name,
  cols = 30,
  rows = 6,
  required = false,
  defaultValue = '',
  placeholder = '',
  disabled = false,
}: TextareaType) {
  return (
    <label htmlFor={name} className='flex flex-col'>
      <span className=' text-darkBlue500   '>
        {label}
        {required && <span className='text-red-900'> * </span>}
      </span>
      <textarea
        name={name}
        id=''
        cols={cols}
        rows={rows}
        className={`${
          disabled
            ? 'border-inputBorde border  border-opacity-25 opacity-90'
            : 'hover:border-darkBlue100 focus:border-darkBlue100 border border-purple-800 bg-white'
        } w-full rounded-xl border py-2   pl-2  pr-8 focus:border-2  focus:outline-none`}
        defaultValue={defaultValue && defaultValue}
        placeholder={placeholder}
        disabled={disabled}
      />
    </label>
  );
}

export { Input, NumberInput, Textarea };
