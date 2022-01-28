import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { CartActions } from "../../Store/Cart-slice";
// import { createAction } from "@reduxjs/toolkit";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const addToCartItemHandler = () => {
    dispatch(
      CartActions.addItemToCartItem({
        id,
        title, //modern js syntax
        price,
      })
    );
  };
  const { title, price, description, id } = props;

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
