// import css from './Searchbar.module.css';
import propTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  return (
    <header class="searchbar">
      <form class="form">
        <button
          type="submit"
          class="button"
          onClick={() => {
            onSubmit( );
          }}
        >
          <span class="button-label">Search</span>
        </button>

        <input
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      type: propTypes.string.isRequired,
      amount: propTypes.number.isRequired,
      currency: propTypes.string.isRequired,
      id: propTypes.number,
    })
  ),
};

export default Searchbar;
