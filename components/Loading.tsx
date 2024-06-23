import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

interface LoadingInterface {
  open: boolean;
}

function Loading({ open = true }: LoadingInterface) {
  return (
    <Backdrop
      open={open}
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <CircularProgress color='inherit' />
    </Backdrop>
  );
}

export default Loading;
