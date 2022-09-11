import React, {useState} from 'react';
import './modal.css';


const Modal = () => {
  const [show, setShow] = useState(false);

  const handleClose = ( ) => {
      setShow(true);
  }

  const showHideClassName = show ? "modal display-none" : "modal display-block";


  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h2>Something went wrong. </h2>
        <p>Please try another city</p>
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;