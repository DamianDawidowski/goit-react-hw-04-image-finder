import React from 'react';
import css from './Button.module.css';
import propTypes from 'prop-types';

const Button = ({ getPictures }) => {
  return (
    <button className={css.Button} type="button" onClick={getPictures}>
      Load more
    </button>
  );
};

Button.propTypes = {
  getPictures: propTypes.func.isRequired,
};

export default Button;
