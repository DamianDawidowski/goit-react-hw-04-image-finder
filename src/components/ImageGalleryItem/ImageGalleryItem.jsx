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
   this.setState({isShown: false})  
    console.log("ddd "+this.isShown);
  }

  render() {
    const { webformatURL } = this.props;
    return (
      <li className={css.ImageGalleryItem + ' ' + css.ImageGalleryItemImage}>
        <img src={webformatURL} alt="_blank" onClick={this.handleClick} />
        {/* {isShown && <Modal largeImageURL={largeImageURL} />} */}
        {this.isShown && <p>AAAA</p>}
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
