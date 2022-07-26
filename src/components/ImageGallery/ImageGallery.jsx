import PropTypes from 'prop-types';
import { ImageGalleryList, ImageGalleryListItem } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ items }) => {
  console.log({ items });
  return (
    <ImageGalleryList>
      {items.map(item => (
        <ImageGalleryListItem key={item.id}>
          <ImageGalleryItem item={item} />
        </ImageGalleryListItem>
      ))}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
