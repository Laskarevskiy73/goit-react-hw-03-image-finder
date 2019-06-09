import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Gallery from './Gallery';
import { getImageByQuery } from '../../services/getImageAPI';
import mapper from './mapper';
import style from './css/PageSearchImage.module.css';

export default class PageSearchImage extends Component {
  state = {
    requestedPictures: [],
    page: '',
    query: '',
  };

  componentDidUpdate(prevState) {
    const { requestedPictures } = this.state;

    if (prevState.requestedPictures !== requestedPictures) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handleSubmit = ({ query }) => {
    this.setState(prevState =>
      prevState.query !== query
        ? {
            query,
            page: 1,
          }
        : {
            page: 1,
          },
    );

    getImageByQuery(query)
      .then(({ data: { hits } }) =>
        this.setState({ requestedPictures: mapper(hits) }),
      )
      .catch(error => error);
  };

  handleClickButton = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));

    const { page, query } = this.state;

    getImageByQuery(query, page).then(({ data: { hits } }) => {
      this.setState(prev => ({
        requestedPictures: [...prev.requestedPictures, ...mapper(hits)],
      }));
    });
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
