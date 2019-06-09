import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import style from './css/GalleryItem.module.css';

export default class Modal extends Component {
  overlayRef = createRef();

  static propTypes = {
    largeImage: PropTypes.string.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    alt: PropTypes.string,
  };

  static defaultProps = {
    alt: 'Large image',
  };

  componentWillMount() {
    window.removeEventListener('keyup', this.handleListenerClickButton);
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleListenerClickButton);
  }

  handleListenerClickButton = event => {
    if (event.code !== 'Escape') {
      return;
    }
    this.props.handleCloseModal();
  };

  handleClickOverlay = ({ target }) => {
    const { current } = this.overlayRef;

    if (target !== current) {
      return;
    }
    this.props.handleCloseModal();
  };

  render() {
    const { largeImage, alt } = this.props;

    return (
      <div
        onKeyUp={this.handleListenerClickButton}
        onClick={this.handleClickOverlay}
        className={style.overlay}
        role="presentation"
        ref={this.overlayRef}
      >
        <div className={style.modal}>
          <img src={largeImage} alt={alt} />
        </div>
      </div>
    );
  }
}
