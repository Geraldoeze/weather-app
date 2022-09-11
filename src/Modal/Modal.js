
import './modal.css';

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";


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