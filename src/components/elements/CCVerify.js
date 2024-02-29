import React from 'react';
import Modal from '@material-ui/core/Modal';
import '../../styles/modals.css'

function VerificationModal() {
    const classes = useStyles();
  
    return (
      <Modal open={true} disableBackdropClick={true}>
        <div className="cc-verfiy">
          <h2>Please verify your account</h2>
          <p>You need to verify your account before you can do anything on this page.</p>
        </div>
      </Modal>
    );
  }
  