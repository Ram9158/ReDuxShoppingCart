import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const CartItems = useSelector((state) => state.Cart.items);
  // console.log(CartItems.price);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {CartItems.map((items) => {
          return (
            <CartItem
              key={items.id}
              item={{
                id: items.id,
                title: items.name,
                quantity: items.quantity,
                total: items.totalPrice,
                price: items.price,
              }}
            />
          );
        })}
        {/* <CartItem
          item={{ title: "Test Item", quantity: 40, total: 18, price: 6 }}
        /> */}
      </ul>
    </Card>
  );
};

export default Cart;
