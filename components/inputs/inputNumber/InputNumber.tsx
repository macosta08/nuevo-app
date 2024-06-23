import * as React from 'react';
import NumberFormat from 'react-number-format';

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
              ? 'border border-x-2 border-b-2 border-grey-700 border-opacity-25 opacity-90'
              : 'hover:border-darkBlue100 focus:border-darkBlue100 border border-grey-700'
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
              ? 'border-inputBorder text-inputBorder border-x-2 border-b-2  border-grey-700 border-opacity-25 opacity-90'
              : 'border-inputBorder text-darkBlue500 hover:border-darkBlue100 focus:border-darkBlue100'
          } w-full rounded-[10px] border-x-2 border-b-2  border-grey-700 border-b-purple-500  py-2  pl-2  pr-8 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]  focus:border-2 focus:outline-none `}
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

export default NumberInput;
