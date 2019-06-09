import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import style from './css/GalleryItem.module.css';

export default class GalleryItem extends Component {
  static propTypes = {
    smallImage: PropTypes.string.isRequired,
    largeImage: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  };

  state = {
    modalOpen: false,
  };

  handleOpenModal = () => {
    this.setState({ modalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const {
      smallImage,
      largeImage,
      views,
      comments,
      downloads,
      likes,
    } = this.props;

    const { modalOpen } = this.state;

    return (
      <>
        <img className={style.img} src={smallImage} alt="" />
        <div className={style.stats}>
          <p className={style.statsItem}>
            <i className="material-icons">thumb_up</i>
            {likes}
          </p>
          <p className={style.statsItem}>
            <i className="material-icons">visibility</i>
            {views}
          </p>
          <p className={style.statsItem}>
            <i className="material-icons">comment</i>
            {comments}
          </p>
          <p className={style.statsItem}>
            <i className="material-icons">cloud_download</i>
            {downloads}
          </p>
        </div>
        <button
          onClick={this.handleOpenModal}
          type="button"
          className={style.fullscreenButton}
        >
          <i className="material-icons">zoom_out_map</i>
        </button>{' '}
        {modalOpen && (
          <Modal
            largeImage={largeImage}
            handleCloseModal={this.handleCloseModal}
          />
        )}
      </>
    );
  }
}

/* eslint-disable */

// const GalleryItem = ({
//   smallImage,
//   largeImage,
//   views,
//   comments,
//   downloads,
//   likes,
// }) => (
//   <>
//     <img className={style.img} src={smallImage} alt="" />
//     <div className={style.stats}>
//       <p className={style.statsItem}>
//         <i className="material-icons">thumb_up</i>
//         {likes}
//       </p>
//       <p className={style.statsItem}>
//         <i className="material-icons">visibility</i>
//         {views}
//       </p>
//       <p className={style.statsItem}>
//         <i className="material-icons">comment</i>
//         {comments}
//       </p>
//       <p className={style.statsItem}>
//         <i className="material-icons">cloud_download</i>
//         {downloads}
//       </p>
//     </div>
//     <button type="button" className={style.fullscreenButton}>
//       <i className="material-icons">zoom_out_map</i>
//     </button>{' '}
//   </>
// );

// export default GalleryItem;
