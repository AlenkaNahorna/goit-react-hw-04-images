import { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../Modal/Modal';
import { ImageGalleryImg } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { item } = this.props;
    const { isModalOpen } = this.state;
    return (
      <div>
        <ImageGalleryImg
          src={item.webformatURL}
          onClick={this.openModal}
          alt=""
        />
        {isModalOpen && (
          <Modal src={item.largeImageURL} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}
