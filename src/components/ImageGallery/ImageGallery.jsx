import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import propTypes from 'prop-types';

const ImageGallery = ({ images, editModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          editModal={editModal}
        />
      ))}
    </ul>
  );
};
ImageGallery.propTypes = {
  images: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      webformatURL: propTypes.string.isRequired,
      largeImageURL: propTypes.string,
    })
  ),
};

export default ImageGallery;
