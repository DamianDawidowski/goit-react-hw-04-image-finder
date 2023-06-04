import css from './Modal.module.css';
import propTypes from 'prop-types';

const Modal = ({ largeImageURL, handleClick }) => {
  return (
    <div className={css.Overlay} onClick={() => handleClick()}>
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
