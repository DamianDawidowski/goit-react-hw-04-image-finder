import Searchbar from './Searchbar/Searchbar';
import axios from 'axios';
import React, { Component } from 'react';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import css from './App.module.css';
import Modal from './Modal/Modal';
import Error from './Error/Error';

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      results: [],
      isLoading: false,
      error: '',
      page: 1,
      showModal: false,
      largeImageURL: '',
      numberOfPages: 0,
    };
  }

  switchLoading() {
    this.setState(({ isLoading }) => ({ isLoading: !isLoading }));
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  editModal = ev => {
    this.setState({ largeImageURL: ev.target.dataset.source });

    this.toggleModal();
  };

  componentDidMount() {}
  componentDidUpdate(_prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ results: [], page: 1, error: null });
      this.getPictures();
    }

    if (prevState.page !== this.state.page) {
      this.getPictures();
    }
  }

  loadMore = () => {
    this.setState({ page: this.page + 1 });
  };

  getPictures = async () => {
    let query = this.state.query;
    let page = this.state.page;

    this.switchLoading();
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=34020653-837b1231ff9ac2e46753275a8&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState(({ results }) => ({
        results: [...results, ...response.data.hits],

        numberOfPages: Math.ceil(response.data.totalHits / 12),
      }));

      if (response.data.hits.length === 0) {
        this.setState({
          error: `No results found for: ${this.state.query}`,
        });
      }
    } catch (err) {
      this.setState({ err: 'Please try again.' });
    } finally {
      this.switchLoading();
    }
  };

  getQuery = query => {
    if (this.props.query !== query) {
      this.setState({ query: query });
    }
  };

  render() {
    const {
      page,
      results,
      isLoading,
      showModal,
      largeImageURL,
      numberOfPages,
      error,
    } = this.state;

    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.getQuery} />
        {error && <Error errorText={error} />}
        {isLoading && <Loader />}
        {results.length > 0 && (
          <ImageGallery images={results} editModal={this.editModal} />
        )}
        {showModal && (
          <Modal largeImageURL={largeImageURL} toggleModal={this.toggleModal} />
        )}

        {!isLoading && page <= numberOfPages && (
          <Button loadMore={this.loadMore} />
        )}
      </div>
    );
  }
}

export { App };
