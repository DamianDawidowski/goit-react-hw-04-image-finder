import Modal from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';
import propTypes from 'prop-types';
import { Component } from 'react';

class ImageGalleryItem extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     isShown: false,
  //   };
  // }
  // handleClick = ev => {
  //   this.setState({ isShown: !this.state.isShown });
  // };

  render() {
    // let isShown = this.state.isShown;
    const { webformatURL, largeImageURL, editModal } = this.props;
    return (
      <li className={css.ImageGalleryItem + ' ' + css.ImageGalleryItemImage}>
        <img
          src={webformatURL}
          alt="_blank"
          onClick={editModal}
          data-source={largeImageURL}
        />
      </li>
    );
  }
}
ImageGalleryItem.propTypes = {
  webformatURL: propTypes.string.isRequired,
  largeImageURL: propTypes.string,
};

export default ImageGalleryItem;
