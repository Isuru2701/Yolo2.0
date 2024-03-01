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
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}

      >
        <Typography sx={{ p: 10 }}> Are you a content creator? </Typography>
        <Typography sx={{ p: 2 }}> </Typography>
      </Popover>
    </>
  );

}
