import React from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function CCVerify() {

  return (
    <>
      <div
        className="modal-dark show"
        style={{ display: 'block', position: 'initial', backgroundColor: 'var(--base-black)' }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Hey there!</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Are you a content creator? Consider enrolling into our creators program to help you make a bigger splash</p>
          </Modal.Body>

          <Modal.Footer>
            <a href='creators/enroll'><Button variant="secondary">Proceed</Button></a>
            <a href='creators/enroll'><Button variant="primary">No, thanks</Button></a>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </>
  );

}
