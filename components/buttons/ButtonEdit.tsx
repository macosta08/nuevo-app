import * as React from 'react';
import ReactLoading from 'react-loading';

type ButtonType = {
  text?: string;
  type: 'button' | 'submit' | 'reset';
  priority:
    | 'primary'
    | 'secondary'
    | 'pagination'
    | 'danger'
    | 'smaller'
    | 'success'
    | 'none';
  children?: React.ReactNode;
  rounded?: boolean;
  disabled?: any;
  onClick?: any;
  loading?: boolean;
  onfocus?: any;
  extraClassNames?: any;
};

function ButtonEdit({
  text = null,
  type,
  priority,
  rounded = false,
  disabled = false,
  loading = false,
  children,
  onClick,
  onfocus,
  extraClassNames,
}: ButtonType) {
  const btnType = () => {
    if (priority === 'primary') {
      return `bg-bluePreva text-white w-[115px] h-9 border-solid border-2 rounded-none  border-bluePreva hover:bg-white hover:text-bluePreva transition flex justify-center items-center`;
    }
    if (priority === 'secondary') {
      return `btn text-primary font-medium shadow-md bg-grey border-2 border-primary  hover:border-gray-100`;
    }
    if (priority === 'pagination') {
      return `btn btn-primary`;
    }
    if (priority === 'danger') {
      return `btn-danger`;
    }
    if (priority === 'smaller') {
      return `p-1 rounded`;
    }
    if (priority === 'success') {
      return `button-success `;
    }

    return '';
  };
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={`${btnType()} ${
        rounded ? 'rounded-full' : 'rounded-lg '
      } ${extraClassNames}`}
      onFocus={onfocus}
      onClick={onClick}
      disabled={disabled}
    >
      <div className='flex items-center justify-center gap-4'>
        {loading && <ReactLoading type='spin' height={30} width={30} />}

        {children && <span className={`${text && 'mr-2'} `}>{children}</span>}
        {text && text}
      </div>
    </button>
  );
}

export default ButtonEdit;
