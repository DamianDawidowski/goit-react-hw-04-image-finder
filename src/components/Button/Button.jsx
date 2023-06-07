import React from 'react';
import css from './Button.module.css';
import propTypes from 'prop-types';

const Button = ({ loadMore }) => {
  return (
    <button className={css.Button} type="button" onClick={loadMore}>
      Load more
    </button>
  );
};

Button.propTypes = {
  getPictures: propTypes.func.isRequired,
};

export default Button;
