import React from 'react';
import PropTypes from 'prop-types';
import GalleryItem from './GalleryItem';
import style from './css/Gallery.module.css';

const Gallery = ({ items, onClick }) => (
  <>
    <ul className={style.gallery}>
      {items.map(item => (
        <li className={style.galleryItem} key={item.id} id={item.id}>
          <GalleryItem
            smallImage={item.smallImage}
            largeImage={item.largeImage}
            views={item.views}
            comments={item.comments}
            downloads={item.downloads}
            likes={item.likes}
          />
        </li>
      ))}
    </ul>
    <div className={style.wrapButton}>
      <button onClick={onClick} className={style.loadMore} type="button">
        Load more
      </button>
    </div>
  </>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      smallImage: PropTypes.string.isRequired,
      largeImage: PropTypes.string.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Gallery;
