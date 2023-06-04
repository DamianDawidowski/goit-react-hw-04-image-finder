  import Modal from 'components/Modal/Modal';
import css from '../../styles.module.css';
import propTypes from 'prop-types';
import { Component } from 'react';
 
class ImageGalleryItem extends Component {
  // const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {

  constructor() {
    super();
    this.state = {
     isShown: false,
    };
       
  }
  handleClick = ev => {
       console.log(this.state.isShown);
   this.setState({ isShown: !this.state.isShown });  
    console.log('ddd ' + this.state.isShown);
  }

  render() {
    let isShown = this.state.isShown;
    const { webformatURL, largeImageURL } = this.props;
    return (
      <li className={css.ImageGalleryItem + ' ' + css.ImageGalleryItemImage}>
        <img src={webformatURL} alt="_blank" onClick={this.handleClick} />
        {isShown && (
          <Modal largeImageURL={largeImageURL} handleClick={this.handleClick} />
        )}
      </li>
    );
  }
}
ImageGalleryItem.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool,
};

export default ImageGalleryItem;
