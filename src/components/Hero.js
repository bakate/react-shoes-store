import React from 'react';
import PropTypes from 'prop-types';

export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1>Fais-toi Plaisir</h1>
        <p>Nous te fournissons les meilleurs baskets du marché</p>
        {children}
      </div>
    </div>
  );
}

Hero.propTypes = {
  children: PropTypes.object,
};
