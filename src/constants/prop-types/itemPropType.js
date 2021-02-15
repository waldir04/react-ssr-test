import PropTypes from 'prop-types';

const itemPropType = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  picture: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.shape({
    amount: PropTypes.number,
    currency: PropTypes.string,
    decimals: PropTypes.number
  })
});

export default itemPropType;
