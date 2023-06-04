// import css from './Searchbar.module.css';
 
import { Component } from 'react';
 import PropTypes from 'prop-types';

export class Searchbar extends Component {
  handleFormSubmit = event => {
    // console.log(1);
    event.preventDefault();
    const { onSubmit  } = this.props;
    const query = event.target.name.value;
    onSubmit({ query });
    event.target.reset();
    //  console.log(2);
  };

  render() {
    return (
      <header class="searchbar">
        <form class="form" onSubmit={this.handleFormSubmit}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            name="name"
            
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
  getquery: PropTypes.func.isRequired,
};

export default Searchbar;
