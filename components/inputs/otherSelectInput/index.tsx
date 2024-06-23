import * as React from 'react';
import Select from 'react-select';

const stylesSelect = {
  container: (styles) => ({
    ...styles,
    marginTop: '0 !important',
    marginLeft: '1px !important',
    marginRight: '2px !important',
  }),
  control: (styles) => ({
    ...styles,
    borderRadius: '10px',
    borderBottom: '2px solid  #3D06D7',
    borderTop: '0',
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: '#3D06D7',
  }),
  singleValue: (styles) => ({
    ...styles,
    color: '#000000',
  }),
  menuList: (styles) => ({
    ...styles,
    color: '#000000',
  }),
  placeholder: (styles) => ({
    ...styles,
    color: '#B0B4B8',
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: '#B0B4B8',
  }),

  indicatorSeparator: (styles) => ({ ...styles, display: 'none' }),
  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
};

const themeSelect = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: '#3D06D7',
    primary50: '#FFFFFF',
    primary25: '#FFFFFF',
    danger: '#3D06D7',
    dangerLight: '#3D06D7',
    neutral0: '#FFFFFF', // background
    neutral30: '#3D06D7', // hover:border
    neutral40: '#3D06D7', // hover:icons
    neutral60: '#3D06D7', // focus:icons
  },
});

type OtherSelectType = {
  opts: { value: any; label: string }[];
  setSelected: React.Dispatch<React.SetStateAction<any>>;
  isMulti?: boolean;
  selectName?: string;
  placeholder: string;
  text: string;
  required?: boolean;
  isClearable?: boolean;
  defaultValue?: {};
  isDisabled?: boolean;
};
function OtherSelectInput({
  opts,
  isMulti = false,
  setSelected,
  selectName,
  placeholder,
  text,
  required = true,
  defaultValue = null,
  isClearable = false,
  isDisabled,
}: OtherSelectType) {
  return (
    <div className='my-3 w-full'>
      <span className='pb-1 text-sm'>
        {text}
        {required && <span className='text-red-900'> * </span>}
      </span>
      <Select
        menuPortalTarget={document.body}
        isClearable={isClearable}
        isMulti={isMulti}
        isDisabled={isDisabled}
        name={selectName}
        options={opts?.map(({ value, label }) => ({
          value,
          label,
        }))}
        defaultValue={
          Array.isArray(defaultValue)
            ? defaultValue.map(({ value, label }) => ({
                value,
                label,
              }))
            : defaultValue
        }
        placeholder={placeholder}
        onChange={
          isMulti
            ? (selected: any): void => setSelected([...selected])
            : (selected: any): void => setSelected(selected)
        }
        styles={stylesSelect}
        theme={themeSelect}
      />
    </div>
  );
}

export default OtherSelectInput;
