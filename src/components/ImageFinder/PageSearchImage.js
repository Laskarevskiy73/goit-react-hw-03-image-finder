import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';
import Gallery from './Gallery';
import { getImageByQuery } from '../../services/getImageAPI';
import mapper from './mapper';
import style from './css/PageSearchImage.module.css';

export default class PageSearchImage extends Component {
  static defaultProps = {
    query: '',
  };

  static propTypes = {
    query: PropTypes.string,
  };

  state = {
    requestedPictures: [],
    page: 1,
    query: '',
  };

  componentDidUpdate(prevProps) {
    const { query } = this.state;

    if (prevProps.query !== query) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handleSubmit = ({ query }) => {
    const { page } = this.state;

    getImageByQuery(query, page)
      .then(({ data: { hits } }) =>
        this.setState({
          query,
          requestedPictures: mapper(hits),
          page: page + 1,
        }),
      )
      .catch(error => error);
  };

  handleClickButton = () => {
    const { query, page } = this.state;

    getImageByQuery(query, page)
      .then(({ data: { hits } }) =>
        this.setState(prevState => ({
          requestedPictures: [...prevState.requestedPictures, ...mapper(hits)],
          page: page + 1,
        })),
      )
      .catch(error => error);
  };

  render() {
    const { requestedPictures } = this.state;

    return (
      <div className={style.pageSearchImage}>
        <SearchForm onSubmit={this.handleSubmit} />
        {requestedPictures.length > 0 && (
          <Gallery items={requestedPictures} onClick={this.handleClickButton} />
        )}
      </div>
    );
  }
}
