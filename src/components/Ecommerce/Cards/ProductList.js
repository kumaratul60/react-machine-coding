import ProductCard from "./ProductCard";
import styles from "./productlist.module.css";
import { useEffect } from "react";

function ProductList({ state, dispatch }) {
  function sortLowHandler() {
    let sortedProducts = state.products.sort((a, b) => {
      return a.price - b.price;
    });
    dispatch({
      type: "SORT_LOW",
      payload: sortedProducts,
    });
  }
  function sortHighHandler() {
    let sortedProducts = state.products.sort((a, b) => {
      return b.price - a.price;
    });
    dispatch({
      type: "SORT_HIGH",
      payload: sortedProducts,
    });
  }
  useEffect(() => {
    dispatch({
      type: "SHOW_CART",
    });
  }, []);

  return state && state.loading ? (
    "loading....."
  ) : (
    <>
      <h1>View Our Products</h1>

      <div className={styles.cardContainer}>
        <div className={styles.sort}>
          Sort By Price:{" "}
          <span className={styles.sortBtn} onClick={sortLowHandler}>
            Low to High{" "}
          </span>
          <span className={styles.sortBtn} onClick={sortHighHandler}>
            High to Low
          </span>
        </div>
        <div className={styles.sort}>
          Sort By Rating:
          <span className={styles.sortBtn} onClick={sortLowHandler}>
            Low to High{" "}
          </span>
          <span className={styles.sortBtn} onClick={sortHighHandler}>
            High to Low
          </span>
        </div>
        {state &&
          state.products.map((item) => {
            return (
              <ProductCard
                state={state}
                product={item}
                dispatch={dispatch}
                key={item.id}
              />
            );
          })}
      </div>
    </>
  );
}

export default ProductList;
