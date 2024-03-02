import React from 'react';
import { Modal } from '@mui/material';
import { Typography } from '@mui/material';
import { Popover } from '@mui/material';
import { Button } from '@mui/material';

import '../../styles/creators.css'
export default function CCVerify() {

  return (
    <>
      <Popover
        open={true}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        style={{ backgroundColor: 'rgba(0,0,0,0.6)', width: "100%", height: '100%', color: "red" }}

      >
        <Typography sx={{ p: 10, fontSize: 20, margin: 5, color: "var(--base-grey)" }}> Are you a content creator?
          Enroll in our creators program to make a bigger audience!</Typography>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" color="primary" style={{ margin: 10 }} onClick={() => window.location.href = '/creators/enroll'}>Enroll</Button>
          <Button variant="contained" color="secondary" style={{ margin: 10 }} onClick={() => window.location.href = '/'}>No, Thanks</Button>
        </div>
      </Popover>

    </>
  );

}
