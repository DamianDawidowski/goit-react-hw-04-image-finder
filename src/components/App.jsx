import css from 'styles.module.css';

import Searchbar from './Searchbar/Searchbar';

import axios from 'axios';
import React, { Component } from 'react';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      results: [],
      isLoading: false,
      error: null,
      page: 1,
    };
  }

  // async componentDidMount() {
  //   this.setState({ isLoading: true });
  //   const response = await axios.get(
  //     `https://pixabay.com/api/?q=${this.state.query}&page=1&key=34020653-837b1231ff9ac2e46753275a8&q&image_type=photo&orientation=horizontal&per_page=5`
  //   );

  //   this.setState({
  //     results: response.data.hits,
  //     isLoading: false,
  //   });
  //   console.log('zapytanie to: ' + this.state.query);
  //   // this.setState({ images: null });
  // }
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
    console.log('1 state query is: ' + query);
    this.SwitchLoading();
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=34020653-837b1231ff9ac2e46753275a8&q&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState(({ results }) => ({
        results: response.data.hits,
        
      }));
      console.log('new results are: ' + this.response.data.hits);
    } catch (err) {
      this.setState({ error: err });
    } finally {
      //     console.log('1 loading is: ' + this.state.isLoading);
      this.SwitchLoading();
      //    console.log('2 loading is: ' + this.state.isLoading);
    }
  };

  getQuery = ev => {
    const query = ev.query;
    console.log('ev is: ' + ev.query);
    if (this.props.query !== query) {
      //  console.log('works'  );
      this.setState({ query: query });
    }
    console.log('2 state query is: ' + this.state.query);
  };

  render() {
    const { results, isLoading } = this.state;
    //console.log(results);
    return (
      <div>
        {isLoading && <Loader />}
        <Searchbar onSubmit={this.getQuery}  />
        {results.length > 0 ? (
          <ImageGallery images={results} />
        ) : (
          <p>BRAK OBRAZKOW</p>
        )}
      </div>
    );
  }
}

export { App };
