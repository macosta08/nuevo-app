import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
import { Dispatch, SetStateAction, ReactNode } from 'react';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import Image from 'next/image';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
    },
    closeButton: {
      color: theme.palette.grey[500],
    },
    body: {
      placeSelf: 'center',
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <div className='flex justify-between space-x-3 px-2'>
        <div className='title-table flex items-center gap-2 font-primaryFont text-2xl '>
          {children}
          <div className=' flex '>
            <div className=' h-1 w-1/6 rounded-md ' />
            <div className=' mx-2 h-1 w-3 rounded-md' />
          </div>
        </div>

        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
          style={{ outline: 'none' }}
        >
          {/* <CloseIcon /> */}
          <Image src='/img/icons/closeIcon.svg' alt='' height={30} width={30} />
        </IconButton>
      </div>
    </MuiDialogTitle>
  );
});
const DialogContent = withStyles(() => ({
  root: {
    placeSelf: 'center',
    width: '100%',
  },
}))(MuiDialogContent);

type ComponentProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  modalTitle?: string | '';
};

function Modal({ open, setOpen, children, modalTitle = '' }: ComponentProps) {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      className='font-larsseit'
      open={open}
      onClose={handleClose}
      aria-labelledby='form-dialog-title'
    >
      {modalTitle && (
        <DialogTitle id='customized-dialog-title' onClose={handleClose}>
          <Image
            src='/img/icons/filterCircle.svg'
            alt=''
            height={40}
            width={40}
          />
          {modalTitle}
        </DialogTitle>
      )}
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}

export default Modal;
