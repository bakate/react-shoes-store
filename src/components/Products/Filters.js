import React, { useContext } from 'react';
import { ProductContext } from '../../context/products';

export default function Filters() {
  const {
    filters: { search, category, shipping, price },
    updateFilters,
    sorted,
  } = useContext(ProductContext);
  return (
    <section className="filters-section">
      <h2 className="section-title">Rechercher un article</h2>
      <form className="filters-form">
        <div>
          {/* search input */}
          <div className="form-group">
            <label htmlFor="search">Cherche un article</label>
            <input
              type="text"
              name="search"
              id="search"
              className="form-control"
              value={search}
              onChange={updateFilters}
            />
          </div>
          {/* end of search form */}
          {/* select category */}
          <div className="form-group">
            <label htmlFor="category">catégories</label>
            <select
              name="category"
              id="category"
              className="form-control"
              value={category}
              onChange={updateFilters}
            >
              <option value="all">tout</option>
              <option value="adidas">adidas</option>
              <option value="nike">nike</option>
              <option value="puma">puma</option>
              <option value="converse">converse</option>
            </select>
          </div>
          {/* end of category */}
          {/* free shipping */}
          <div className="form-group">
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shipping}
              onChange={updateFilters}
            />
            <label htmlFor="shipping">livraison offerte</label>
          </div>
          {/* end of free shipping */}
        </div>
        {/* price */}
        <div className="price-group">
          <p>prix</p>
          <label>
            <input
              type="radio"
              name="price"
              id="all"
              value="all"
              checked={price === 'all'}
              onChange={updateFilters}
            />
            tout
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="0"
              checked={price === 0}
              onChange={updateFilters}
            />
            0 - 100€
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="100"
              checked={price === 100}
              onChange={updateFilters}
            />
            100 - 200€
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="200"
              checked={price === 200}
              onChange={updateFilters}
            />
            plus de 200€
          </label>
        </div>
        {/* end of price */}
      </form>
      <h6>Nombre d'articles :{sorted.flat().length} </h6>
      <hr />
    </section>
  );
}
