import * as React from 'react';
import Select from 'react-select';
import NumberFormat from 'react-number-format';
import ReactLoading from 'react-loading';
import { renameEnums } from 'utils/codeFunctions';
import { nanoid } from 'nanoid';

type ButtonType = {
  text?: string;
  type: 'button' | 'submit' | 'reset';
  priority:
    | 'primary'
    | 'secundary'
    | 'delete'
    | 'load'
    | 'bluegray'
    | 'brochure'
    | 'ghost'
    | 'link'
    | 'icon';
  size: 'large' | 'medium' | 'small';
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: any;
  loading?: boolean;
  negative?: boolean;
  extraClassName?: string;
};

function Button({
  text = null,
  priority,
  disabled = false,
  loading = false,
  size,
  children,
  onClick,
  negative = false,
  extraClassName = null,
  type,
}: ButtonType) {
  const btnType = () => {
    if (priority === 'primary') {
      return `${size === 'small' ? 'px-3 py-1' : `px-4 py-2`} font-semibold ${
        disabled
          ? ` ${
              negative ? 'bg-inputBorder text-darkBlue500' : 'bg-inputBorder'
            } text-white`
          : `${
              negative
                ? 'bg-white hover:bg-greyCustom'
                : 'bg-yellow500 text-darkBlue500  hover:bg-darkBlue500 hover:text-white'
            } `
      }`;
    }
    if (priority === 'secundary') {
      return `${size === 'small' ? 'px-3 py-1' : `px-6 py-2`} font-base ${
        disabled
          ? ` ${
              negative ? 'bg-inputBorder text-darkBlue500' : 'bg-inputBorder'
            } text-white`
          : `${
              negative
                ? 'bg-white hover:bg-greyCustom'
                : ' bg-darkBlue500 text-white hover:bg-yellow500 hover:text-darkBlue500  '
            } `
      }`;
    }
    if (priority === 'delete') {
      return `${size === 'small' ? 'px-3 py-1' : `px-6 py-2`} font-semibold ${
        disabled
          ? ` ${
              negative ? 'bg-inputBorder text-darkBlue500' : 'bg-inputBorder'
            } text-white`
          : `${
              negative
                ? 'bg-white hover:bg-greyCustom'
                : ' bg-darkBlue500 text-white hover:bg-red-600 hover:text-darkBlue500  '
            } `
      }`;
    }
    if (priority === 'load') {
      return `${size === 'small' ? 'px-3 py-1' : `px-6 py-2`} font-semibold ${
        disabled
          ? ` ${
              negative ? 'bg-inputBorder text-darkBlue500' : 'bg-inputBorder'
            } text-white`
          : `${
              negative
                ? 'bg-white hover:bg-greyCustom'
                : ' bg-darkBlue500 text-white hover:bg-yellow500 hover:text-darkBlue500  '
            } `
      }`;
    }
    if (priority === 'bluegray') {
      return `${size === 'small' ? 'px-3 py-1' : `px-6 py-2`} font-base ${
        disabled
          ? ` ${
              negative ? 'bg-inputBorder text-darkBlue500' : 'bg-inputBorder'
            } text-white`
          : `${
              negative
                ? 'bg-white hover:bg-greyCustom'
                : ' bg-inputBorder text-white hover:bg-darkBlue500  hover:text-white  '
            } `
      }`;
    }
    if (priority === 'brochure') {
      return `${size === 'small' ? 'px-3 py-1' : `px-6 py-2`} font-medium ${
        disabled
          ? ` ${
              negative ? 'bg-inputBorder text-darkBlue500' : 'bg-greyCustom'
            } text-gray-600`
          : `${
              negative
                ? 'bg-white hover:bg-greyCustom'
                : ' bg-yellow500 text-black  hover:bg-darkBlue500 hover:text-white'
            } `
      }`;
    }
    if (priority === 'ghost') {
      return `${
        size === 'small' ? 'px-3 py-1' : `px-6 py-2`
      } font-bold bg-white border-2 ${
        disabled
          ? 'border-inputBorder text-inputBorder'
          : `${
              negative
                ? 'bg-darkBlue500 text-white hover:bg-darkBlue100'
                : 'text-darkBlue500 hover:border-blueLightest  border-darkBlue500 '
            }`
      }`;
    }
    if (priority === 'link') {
      return `px-1 border-b-2 rounded-none ${
        disabled
          ? 'border-inputBorder text-inputBorder'
          : `${
              negative
                ? 'hover:border-white text-white'
                : 'hover:border-darkBlue500 text-darkBlue500'
            } border-blueLightest  font-bold bg-transparent`
      }`;
    }
    if (priority === 'icon') {
      return `${
        size === 'small'
          ? 'w-8 h-8'
          : `${size === 'large' ? 'w-12 h-12' : 'w-10 h-10'}`
      } font-bold ${
        disabled
          ? `bg-inputBorder ${negative ? 'text-darkBlue500' : 'text-white'}  `
          : `${
              negative
                ? 'bg-white hover:bg-greyCustom'
                : 'bg-yellow500 text-darkBlue500  hover:bg-darkBlue500 hover:text-white'
            } `
      }`;
    }

    return '';
  };

  const changeSpingColor = () => {
    if (priority === 'primary') {
      return `#ffffff`;
    }
    if (priority === 'ghost') {
      return `#ffffff`;
    }
    if (priority === 'link') {
      return `#ffffff`;
    }
    if (priority === 'icon') {
      return `#ffffff
      `;
    }
    return '';
  };
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={`${btnType()} rounded-full ${extraClassName}`}
      onClick={onClick}
      disabled={disabled}
    >
      <div className='flex flex-row items-center justify-center'>
        {loading && (
          <ReactLoading
            type='spin'
            height={24}
            width={24}
            color={changeSpingColor()}
          />
        )}

        {children && <span className={`${text && 'px-2'} `}>{children}</span>}

        {text && text}
      </div>
    </button>
  );
}

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
              ? 'border-inputBorder text-inputBorder border border-opacity-25 opacity-90'
              : 'border-inputBorder text-darkBlue500 hover:border-darkBlue100 focus:border-darkBlue100'
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
              ? 'border-inputBorder text-inputBorder border border-opacity-25 opacity-90'
              : 'border-inputBorder text-darkBlue500 hover:border-darkBlue100 focus:border-darkBlue100'
          } py-2 pl-2  ${
            type === 'date' ? 'pr-2' : 'pr-8'
          } w-full rounded-xl border focus:border-2 focus:outline-none`}
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
              ? 'border-inputBorder text-inputBorder border border-opacity-25 opacity-90'
              : 'border-inputBorder text-darkBlue500 hover:border-darkBlue100 focus:border-darkBlue100'
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
            : 'border-inputBorder text-darkBlue500 hover:border-darkBlue100 focus:border-darkBlue100'
        } w-full rounded-xl border py-2   pl-2  pr-8 focus:border-2  focus:outline-none`}
        defaultValue={defaultValue && defaultValue}
        placeholder={placeholder}
        disabled={disabled}
      />
    </label>
  );
}

const stylesSelect = {
  container: (styles) => ({
    ...styles,
    marginTop: '0 !important',
    marginLeft: '1px !important',
    marginRight: '2px !important',
  }),
  control: (styles) => ({
    ...styles,
    borderRadius: '12px',
    borderColor: '#B0B4B8',
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: '#0A283D',
  }),
  singleValue: (styles) => ({
    ...styles,
    color: '#0A283D',
  }),
  menuList: (styles) => ({
    ...styles,
    color: '#0A283D',
  }),
  placeholder: (styles) => ({
    ...styles,
    color: '#B0B4B8',
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: '#0A283D',
  }),

  indicatorSeparator: (styles) => ({ ...styles, display: 'none' }),
  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
};

const themeSelect = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: '#14517A',
    primary50: '#FFFFFF',
    primary25: '#FFFFFF',
    danger: '#052636',
    dangerLight: '#14516A',
    neutral0: '#FFFFFF', // background
    neutral30: '#14517A', // hover:border
    neutral40: '#052636', // hover:icons
    neutral60: '#14517A', // focus:icons
  },
});

type SelectType = {
  opts: { id: any; name: string }[];
  setSelected: React.Dispatch<React.SetStateAction<any>>;
  isMulti: boolean;
  selectName: string;
  placeholder: string;
  text: string;
  required?: boolean;
  isClearable?: boolean;
  isDisabled?: boolean;
  selectedValue?:
    | { label: string; value: any }[]
    | { label: string; value: any };
  shownValue?: any;
};

function SelectInput({
  opts,
  isMulti,
  setSelected,
  selectName,
  placeholder,
  text,
  required = false,
  selectedValue = [],
  isClearable = false,
  shownValue,
  isDisabled = false,
}: SelectType) {
  return (
    <div className='w-full'>
      <span>
        {text}
        {required && <span className='text-red-900'> * </span>}
      </span>
      <Select
        menuPortalTarget={document.body}
        isClearable={isClearable}
        isDisabled={isDisabled}
        isMulti={isMulti}
        name={selectName}
        options={opts.map(({ id, name }) => ({
          value: id,
          label: renameEnums(name),
        }))}
        defaultValue={
          Array.isArray(selectedValue)
            ? selectedValue.map(({ value, label }) => ({
                value,
                label: renameEnums(label),
              }))
            : selectedValue
        }
        placeholder={placeholder}
        onChange={
          isMulti
            ? (selected: any): void => {
                setSelected(selected);
              }
            : (selected: any): void => setSelected(selected)
        }
        styles={stylesSelect}
        theme={themeSelect}
        value={shownValue}
      />
    </div>
  );
}

type SelectAsyncType = {
  isMulti?: boolean;
  defaultOptions: any;
  setSelected: React.Dispatch<React.SetStateAction<any>>;
  name: string;
  placeholder: string;
  value?: any;
  required?: boolean;
  text: string;
  onInputChange?: any;
  isDisabled?: boolean;
};

function AsyncSelectInput({
  isMulti = true,
  defaultOptions,
  setSelected,
  name,
  placeholder,
  value,
  required = false,
  text,
  onInputChange,
  isDisabled = false,
}: SelectAsyncType) {
  return (
    <div className='w-full'>
      <span>
        {text}
        {required && <span className='text-red-900'> * </span>}
      </span>
      <Select
        menuPortalTarget={document.body}
        isMulti={isMulti}
        options={defaultOptions || []}
        name={name}
        placeholder={placeholder}
        value={value}
        isDisabled={isDisabled}
        getOptionLabel={(e) => e.name}
        getOptionValue={(e) => e.id}
        onInputChange={(e) => onInputChange(e)}
        onChange={
          isMulti
            ? (selected: any): void => {
                setSelected(selected);
              }
            : (selected: any): void => setSelected(selected)
        }
        styles={stylesSelect}
        theme={themeSelect}
      />
    </div>
  );
}

function AsyncSelectInputWithKeyPress({
  isMulti = true,
  defaultOptions,
  setSelected,
  name,
  placeholder,
  value,
  required = false,
  text,
  onInputChange,
  isDisabled = false,
}: SelectAsyncType) {
  return (
    <div className='w-full'>
      <span>
        {text}
        {required && <span className='text-red-900'> * </span>}
      </span>
      <Select
        menuPortalTarget={document.body}
        isMulti={isMulti}
        options={defaultOptions || []}
        name={name}
        placeholder={placeholder}
        value={value}
        isDisabled={isDisabled}
        getOptionLabel={(e) => e.name}
        getOptionValue={(e) => e.id}
        onInputChange={(e) => onInputChange(e)}
        onChange={
          isMulti
            ? (selected: any): void => {
                setSelected(selected);
              }
            : (selected: any): void => setSelected(selected)
        }
        styles={stylesSelect}
        theme={themeSelect}
      />
    </div>
  );
}

function AsyncSelectInputCustom({
  isMulti = true,
  defaultOptions,
  setSelected,
  name,
  placeholder,
  value,
  required = false,
  text,
  onInputChange,
  isDisabled = false,
  customFunction, // se usa para ejecutar una función en secuencia cuando se cambie un valor del input en onChange
  param,
}: any) {
  return (
    <div className='w-full'>
      <span>
        {text}
        {required && <span className='text-red-900'> * </span>}
      </span>
      <Select
        menuPortalTarget={document.body}
        isMulti={isMulti}
        options={defaultOptions || []}
        name={name}
        placeholder={placeholder}
        value={value}
        isDisabled={isDisabled}
        getOptionLabel={(e) => e.name}
        getOptionValue={(e) => e.id}
        onInputChange={(e) => onInputChange(e)}
        onChange={
          isMulti
            ? (selected: any): void => {
                setSelected(selected);
                customFunction(param);
              }
            : (selected: any): void => {
                setSelected(selected);
              }
        }
        styles={stylesSelect}
        theme={themeSelect}
      />
    </div>
  );
}

type CheckBoxTypeUncontrolled = {
  name: string;
  label: string;
  extraClassNames?: string;
  checked?: boolean;
  disabled?: boolean;
  setChecked: any;
  required?: boolean;
};

function CheckboxInputUncontrolled({
  name,
  label,
  extraClassNames = '',
  checked = false,
  setChecked = null,
  disabled = false,
  required = false,
}: CheckBoxTypeUncontrolled) {
  return (
    <label
      htmlFor={name}
      className={`inline-flex items-center ${extraClassNames}`}
    >
      <input
        type='checkbox'
        className={`${
          disabled ? '' : 'hover:border-darkBlue100'
        } form-checkbox text-darkBlue100 focus:border-darkBlue100 h-6 w-6 self-center rounded-sm border border-gray-300  focus:border-2 `}
        name={name}
        onChange={() => {
          setChecked(!checked);
        }}
        checked={checked}
        disabled={disabled}
        required={required}
      />

      <span
        className={`${
          disabled ? 'opacity-50' : ''
        } text-darkBlue500 ml-2 text-lg`}
      >
        {label}
        {required && <span className='text-red-900'> * </span>}
      </span>
    </label>
  );
}
type CheckBoxType = {
  name: string;
  label: string;
  extraClassNames?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
};

function CheckboxInput({
  name,
  label,
  extraClassNames = '',
  defaultChecked = false,
  disabled = false,
}: CheckBoxType) {
  return (
    <label
      htmlFor={name}
      className={`inline-flex items-center ${extraClassNames}`}
    >
      {!defaultChecked ? (
        <input
          type='checkbox'
          className={`${
            disabled ? '' : 'hover:border-darkBlue100'
          } form-checkbox text-darkBlue100 focus:border-darkBlue100 h-6 w-6 rounded-sm border border-gray-300  focus:border `}
          name={name}
          disabled={disabled}
        />
      ) : (
        <input
          type='checkbox'
          className={`${
            disabled ? '' : 'hover:border-darkBlue100'
          } form-checkbox text-darkBlue100 focus:border-darkBlue100 h-6 w-6 rounded-sm border border-gray-300  focus:border `}
          name={name}
          defaultChecked={defaultChecked}
          disabled={disabled}
        />
      )}
      <span className={`${disabled ? 'opacity-50' : ''} ml-2 text-lg`}>
        {label}
      </span>
    </label>
  );
}

type RadioType = {
  name: string;
  opts: { value: string; label: string }[];
};

function RadioInput({ opts, name }: RadioType) {
  return (
    <div className='flex flex-col gap-1'>
      {opts.map((option) => (
        <label htmlFor={name} className='inline-flex items-center'>
          <input
            type='radio'
            className='form-radio text-darkBlue100 hover:border-darkBlue100 focus:border-darkBlue100 h-5 w-5 border border-gray-300'
            name={name}
            value={option.value}
          />
          <span className='ml-2 text-base'>{option.label}</span>
        </label>
      ))}
    </div>
  );
}

function ThTable({ children, extraClassName = '' }) {
  return (
    <th
      key={nanoid()}
      className={`subtitle-table sticky top-0  border-b border-gray-200 px-2 py-5 uppercase ${extraClassName}`}
    >
      {children}
    </th>
  );
}

function TdTable({ children, extraClassName = '' }) {
  return (
    <td
      className={`threeDots border-gray-200 px-2 py-5 text-sm capitalize ${extraClassName}`}
    >
      {children}
    </td>
  );
}

function TitlesTable({ titles }) {
  return (
    <tr className='sticky top-0'>
      {titles.map((title) => (
        <ThTable key={nanoid()} extraClassName='max-w-min'>
          {title}
        </ThTable>
      ))}
    </tr>
  );
}

export {
  Button,
  Input,
  NumberInput,
  SelectInput,
  AsyncSelectInput,
  Textarea,
  CheckboxInput,
  RadioInput,
  CheckboxInputUncontrolled,
  TdTable,
  TitlesTable,
  AsyncSelectInputCustom,
  AsyncSelectInputWithKeyPress,
};
