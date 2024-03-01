import React from 'react';
import { Modal } from '@mui/material';
import {Typography} from '@mui/material';
import {Popover} from '@mui/material';
export default function CCVerify() {

  return (
    <>
      <Popover
        open={true}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </>
  );

}
