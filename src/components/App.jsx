import css from 'styles.module.css'
 
import Searchbar from './Searchbar/Searchbar';
 
import axios from 'axios';
import React, { Component } from 'react';

const ArticleList = ({ images }) => (
  <ul className={css.ImageGallery}>
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <li
        key={id}
        className={css.ImageGalleryItem + ' ' + css.ImageGalleryItemImage}
      >
        <img  src={webformatURL} alt="_blank"  />
          
      </li>
    ))}
  </ul>
);

 
class App extends Component {
  constructor() {
    super();  
    this.state = {
       
      query: 'cat',
      results: [],
    };
  }

  async componentDidMount() {
    // const response = await axios.get(
    //   `https://pixabay.com/api/?q=${this.state.query}&page=1&key=34020653-837b1231ff9ac2e46753275a8&q&image_type=photo&orientation=horizontal&per_page=5`
    // );
     const response2 = await axios.get(
       `https://pixabay.com/api/?q=cat&page=1&key=34020653-837b1231ff9ac2e46753275a8&q&image_type=photo&orientation=horizontal&per_page=5`
     );
    this.setState({ results: response2.data.hits });
    console.log(this.state.query);
    // this.setState({ images: null });
  }

  // async fetchImages() {
  //   const response = await axios.get(
  //     `https://pixabay.com/api/?q=${this.state.query}&page=1&key=34020653-837b1231ff9ac2e46753275a8&q&image_type=photo&orientation=horizontal&per_page=12`
  //   );
  //   this.setState({ images: response.data.hits });
  //   console.log(this.state.query);
  //   // this.setState({ images: null });
  // }

  render() {
  
    const { results } = this.state; ;
    console.log(results);
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        {results.length > 0 ? <ArticleList images={results} /> : null}
      </div>
    );
  }
}

export { App };
