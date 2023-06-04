import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css'
import propTypes from 'prop-types';

 

const ImageGallery = ({ images }) => (
  <ul className={css.ImageGallery}>
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
      />
    ))}
  </ul>
);



ImageGallery.propTypes = {
  userImage: propTypes.string.isRequired,
  tag: propTypes.string,
  name: propTypes.string.isRequired,
  location: propTypes.string,
  stats: propTypes.shape({
    followers: propTypes.number,
    views: propTypes.number,
    likes: propTypes.number,
  }),
};

export default ImageGallery;
