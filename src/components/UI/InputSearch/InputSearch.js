import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Input from './../Input/Input';

import classes from './InputSearch.module.scss';

const inputSearch = ({ search, changed }) => {
  const [query, setQuery] = useState(search);

  useEffect(() => {
    if (typeof search !== 'undefined') {
      setQuery(search);
    }
  }, [])

  const handleChange = (value) => {
    setQuery(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isNewSearch()) {
      changed(query);
    }
  };

  const isNewSearch = () => {
    return !!query && query !== search;
  };

  return (
    <form className={classes.InputSearch} role="search" onSubmit={handleSubmit}>
      <Input type="text" value={search} changed={(value) => handleChange(value)} />
      <button type="submit" aria-label="Buscar">
        <img src="/assets/img/icon/search.svg" alt="Search" />
      </button>
    </form>
  );
};

const propsAreEqual = (prevProps, nextProps) => {
  return prevProps.search === nextProps.search;
};

inputSearch.propTypes = {
  changed: PropTypes.func,
  search: PropTypes.string
};

inputSearch.defaultProps = {
  search: ''
};

export default React.memo(inputSearch, propsAreEqual);