import { withRouter } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";

import { CatalogItem } from "./CatalogItem";

import styles from "./Catalog.module.scss";

export interface dataProps {
  id: string | number;
  model: string;
  price: number;
}

const Catalog = () => {
  const [items, setItems] = useState<dataProps[]>([]);
  const [titleFilter, setTitleFilter] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [inputValue, setInputValue] = useState({ value: ' ' });
  const [showMore, setShowMore] = useState(true);
  const [count, setCount] = useState(8);

  useEffect(() => {
    // Simulating fetching data from backend
    setTimeout(() => {
      // Assuming items are fetched from the backend
      setItems([
        { id: 1, model: "Freddy", price: 10 },
        { id: 2, model: "loh", price: 15 },
        { id: 3, model: "ok", price: 12 },
        { id: 4, model: "faka", price: 18 },
      ]);
    }, 300);
  }, []);

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const enteredName: string = event.target.value;
    setTitleFilter(enteredName);
  };

  const minPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const enteredMinPrice: string | number = event?.currentTarget?.value;
    setMinPrice(enteredMinPrice);
  };

  const maxPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const enteredMaxPrice: string | number = event?.currentTarget?.value;
    setMaxPrice(enteredMaxPrice);
  };

  const showMoreButton = () => {
    setCount(count + 8);
    const newShowMore = count < items.length;
    setShowMore(newShowMore);
  };

  const filteredItems = items
    .filter(item => item.model.toLowerCase().includes(titleFilter.toLowerCase()))
    .filter(item => (minPrice === '' ? true : item.price >= +minPrice))
    .filter(item => (maxPrice === '' ? true : item.price <= +maxPrice));

  return (
    <div className={styles.item_list}>
      <div className={styles.filter}>
        <div className={styles.filter__title}>
          <input
            className={styles.input}
            type="text"
            name="search item"
            placeholder="Search restaurant"
            onChange={inputHandler}
          />
        </div>

        <p className={styles.slider__price}>
          Search item from price: {inputValue.value} $
        </p>

        <div className={styles.filter__price}>
          <input
            style={{ backgroundColor: "#d3d3d3", width: "400px" }}
            className={styles.slider}
            type="number"
            step="100"
            min="100"
            max="15000"
            value={minPrice}
            onChange={minPriceChange}
          />
          <input
            style={{ backgroundColor: "#d3d3d3", width: "400px" }}
            className={styles.slider}
            type="number"
            step="100"
            min="100"
            max="15000"
            value={maxPrice}
            onChange={maxPriceChange}
          />
        </div>
      </div>

      <div className={styles.wrapper}>
        {filteredItems.length ? (
          filteredItems.slice(0, count).map((item) => (
            <CatalogItem
              key={item.id}
              id={item.id}
              title={item.model}
              price={item.price}
            />
          ))
        ) : (
          <h2>No Items Found</h2>
        )}
      </div>

      <div className={styles.button__container}>
        {showMore && (
          <button
            className={styles.view_more_button}
            name="view more button"
            onClick={showMoreButton}
          >
            View More
          </button>
        )}
      </div>
    </div>
  );
};

export default withRouter(Catalog);
