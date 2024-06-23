import ReactLoading from 'react-loading';
import React from 'react';

type ButtonType = {
  text?: string;
  type: 'button' | 'submit' | 'reset';
  priority:
    | 'primary'
    | 'secundary'
    | 'third'
    | 'fourth'
    | 'delete'
    | 'load'
    | 'bluegray'
    | 'brochure'
    | 'ghost'
    | 'link'
    | 'iconb'
    | 'icon';
  size: 'large' | 'medium' | 'small' | 'ssmall';
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: any;
  loading?: boolean;
  extraClassName?: string;
  icon?: string;
};

function ButtonIcon({
  text = null,
  type,
  priority,
  disabled = false,
  loading = false,
  size,
  children,
  onClick,
  extraClassName = null,
  icon,
}: ButtonType) {
  const btnType = () => {
    if (priority === 'primary') {
      return `${
        size === 'medium'
          ? 'px-3 py-1 w-[365px] h-[50px]'
          : `px-4 py-2 w-[365px] h-[50px]`
      } font-thirdFont text-[20px] ${
        disabled
          ? 'bg-grey-500 text-white '
          : 'bg-purple-600 text-white hover:bg-purple-600/60'
      }`;
    }
    if (priority === 'secundary') {
      return `${
        size === 'small'
          ? 'w-[200px] h-[50px] px-3 py-1'
          : `w-[200px] h-[50px] px-6 py-2`
      } font-fourthFont text-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ; ${
        disabled
          ? 'bg-grey-500 text-white '
          : 'bg-purple-600 text-white hover:bg-purple-600/60'
      }`;
    }
    if (priority === 'third') {
      return `${
        size === 'small'
          ? 'w-[200px] h-[50px] px-3 py-1'
          : `w-[200px] h-[50px] px-6 py-2 px-6 py-2`
      } font-fourthFont text-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ${
        disabled
          ? 'text-purple-2000 bg-white border border-purple-2000  '
          : 'text-purple-2000 bg-white  border border-purple-2000'
      }`;
    }
    if (priority === 'fourth') {
      return `${size === 'small' ? 'px-2 py-1' : `px-6 py-2`} font-thirdFont  ${
        disabled
          ? 'text-purple-2000 bg-white rounded-full border border-purple-2000'
          : 'text-purple-2000 bg-white  border border-purple-2000'
      }`;
    }
    if (priority === 'delete') {
      return `${size === 'small' ? 'px-3 py-1' : `px-6 py-2`} font-semibold ${
        disabled ? 'bg-white text-white ' : 'bg-purple-300 text-white'
      }`;
    }
    if (priority === 'load') {
      return `${size === 'small' ? 'px-3 py-1' : `px-6 py-2`} font-semibold ${
        disabled ? 'bg-white text-white ' : 'bg-white hover:bg-greyCustom'
      }`;
    }

    if (priority === 'icon') {
      return `${
        size === 'ssmall'
          ? 'w-[40px] h-[38px] pl-2  py-1'
          : `w-[200px] h-[50px] px-6 py-2`
      } font-fourthFont text-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ; ${
        disabled
          ? 'bg-grey-500 text-white '
          : 'bg-purple-600 text-white hover:bg-purple-600/60'
      }`;
    }

    if (priority === 'iconb') {
      return `${
        size === 'ssmall'
          ? 'w-[40px] h-[38px] pl-2  py-1'
          : `w-[200px] h-[50px] px-6 py-2 px-6 py-2`
      } font-fourthFont text-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ${
        disabled
          ? 'text-purple-2000 bg-white border border-purple-2000  '
          : 'text-purple-2000 bg-white  border border-purple-2000'
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
      className={`${btnType()} rounded-[10px] ${extraClassName}`}
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
        <span className='flex items-center pr-2'>
          <button type='button'>
            <img
              src={icon}
              alt='icon'
              className='h-[16px] w-[16px] md:h-[24px] md:w-[24px]'
            />
          </button>
        </span>
        {text && text}
      </div>
    </button>
  );
}

export default ButtonIcon;
