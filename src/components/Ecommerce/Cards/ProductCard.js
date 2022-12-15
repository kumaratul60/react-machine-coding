import styles from "./productcard.module.css";

function ProductCard({ state, product, dispatch }) {
  let filtered = state.cart.filter((item) => {
    return item.id === product.id;
  });

  let inCart = filtered.length > 0;

  const addHandler = (e) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...product,
        qty: 1,
      },
    });
  };
  const removeHandler = (e) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        ...product,
        qty: 0,
      },
    });
  };
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>{product.title.slice(0, 12)}</div>
      <div className={styles.cardBody}>
        <img src={product.image} className={styles.pImg} alt="" />
      </div>
      <div className={styles.cardFooter}>
        <p>{product.description.slice(0, 40)}</p>
        <span>read more...</span>
        <div className={styles.footer2}>
          <p>Price : $ {product.price}</p>
          <p>
            Rating : {product.rating.rate}{" "}
            <span className={styles.count}>({product.rating.count})</span>
          </p>
        </div>
        <h4>{product.category}</h4>
        {inCart ? (
          <button className={styles.remove} onClick={removeHandler}>
            Remove from cart
          </button>
        ) : (
          <button className={styles.add} onClick={addHandler}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
