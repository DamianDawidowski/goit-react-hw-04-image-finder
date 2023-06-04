import React from 'react';
import css from './Button.module.css';

const Button = ({ getPictures }) => {
  return (
    <button
      className={css.Button}
      type="button" 
      onClick={getPictures}
    >
      Load more
    </button>
  );
};

export default Button;
