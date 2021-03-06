import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const input = ({ changed, type, value }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (typeof value !== 'undefined') {
      setInputValue(value);
    }
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;

    setInputValue(value);

    if (typeof changed === 'function') {
      changed(value);
    }
  };

  return (
    <input
      className="p1"
      type={type}
      value={inputValue}
      onChange={handleChange} />
  );
};

input.propTypes = {
  changed: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string
};

input.defaultProps = {
  type: 'text'
};

export default input;
