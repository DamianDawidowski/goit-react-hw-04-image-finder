import css from './Modal.module.css';
import propTypes from 'prop-types';

const Modal = ({ largeImageURL, toggleModal }) => {
  return (
    <div className={css.Overlay} onClick={() => toggleModal()}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: propTypes.string,
  handleClick: propTypes.func.isRequired,
};

export default Modal;
