import Searchbar from './Searchbar/Searchbar';
import axios from 'axios';
import React, { Component } from 'react';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import css from './App.module.css'
 

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      results: [],
      isLoading: false,
      error: null,
      page: 1,
      showButton: false,
    };
  }

  SwitchLoading() {
    this.setState(({ isLoading }) => ({ isLoading: !isLoading }));
  }

  componentDidMount() {
    this.getPictures();
  }
  componentDidUpdate(_prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ results: [], page: 1, error: null });
      this.getPictures();
    }
  }

  getPictures = async () => {
    let query = this.state.query;
    let page = this.state.page;

    this.SwitchLoading();
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=34020653-837b1231ff9ac2e46753275a8&q&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState(({ results }) => ({
        results: [...results, ...response.data.hits],
        page: page + 1,
      }));
    } catch (err) {
      this.setState({ error: err });
    } finally {
      this.SwitchLoading();
    }
  };

  getQuery = ev => {
    const query = ev.query;

    if (this.props.query !== query) {
      this.setState({ query: query });
    }
  };

  render() {
    const { results, isLoading } = this.state;

    return (
      <div className={css.App}>
        {isLoading && <Loader />}
        <Searchbar onSubmit={this.getQuery} />
        {results.length > 0 ? <ImageGallery images={results} /> : null}
        {!isLoading && results.length >= 15 && (
          <Button getPictures={this.getPictures} />
        )}
      </div>
    );
  }
}

export { App };
