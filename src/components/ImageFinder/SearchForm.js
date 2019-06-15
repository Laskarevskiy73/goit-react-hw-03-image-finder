import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './css/SearchForm.module.css';

export default class SearchForm extends Component {
  state = {
    query: '',
    page: 1,
  };

  handleChangeFieldSearch = ({ target }) => {
    this.setState({ query: target.value });
  };

  handleSubmitForm = event => {
    event.preventDefault();

    const { onSubmit } = this.props;

    onSubmit(this.state);

    this.resetField();
  };

  resetField = () => this.setState({ query: '' });

  render() {
    const { query } = this.state;

    return (
      <div>
        <form className={style.searchForm} onSubmit={this.handleSubmitForm}>
          <input
            className={style.searchFormInput}
            onChange={this.handleChangeFieldSearch}
            value={query}
            type="text"
            autoComplete="off"
            placeholder="Search images..."
          />
        </form>
      </div>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
