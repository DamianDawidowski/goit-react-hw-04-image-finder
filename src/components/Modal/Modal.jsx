import css from '../../styles.module.css';
import propTypes from 'prop-types';

const Modal = ({ largeImageURL, handleClick }) => {
  return (
    <div className={css.Overlay} onClick={e => handleClick()}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool,
};

export default Modal;
