import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../../Modal/Modal';
import { ImageGalleryImg } from './ImageGalleryItem.styled';

export function ImageGalleryItem({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <ImageGalleryImg src={item.webformatURL} onClick={openModal} alt="" />
      {isModalOpen && <Modal src={item.largeImageURL} onClose={closeModal} />}
    </div>
  );
}

ImageGalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
};
