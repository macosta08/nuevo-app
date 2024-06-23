import * as React from 'react';
import Select from 'react-select';
import { renameEnums } from 'utils/codeFunctions';

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

type SelectType = {
  opts: { id: string; name: string }[];
  setSelected?: React.Dispatch<React.SetStateAction<any>>;
  isMulti?: boolean;
  selectName: string;
  placeholder: string;
  text: string;
  value?: any;
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
  isClearable = true,
  shownValue,
  isDisabled = false,
  value,
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
        options={opts?.map(({ id, name }) => ({
          value: id,
          label: renameEnums(name),
        }))}
        defaultValue={
          Array.isArray(selectedValue)
            ? selectedValue.map(({ label }) => ({
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

export default SelectInput;
