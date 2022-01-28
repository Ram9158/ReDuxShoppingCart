import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Dummy_Products = [
  {
    id: "p1",
    price: 10,
    title: "My first Product",
    description: "These product is related to our Company ",
  },
  {
    id: "p2",
    price: 45,
    title: "My second Product",
    description: "These product is related to our Services ",
  },
  {
    id: "p3",
    price: 15,
    title: "My third Product",
    description: "These product is related to our WebSite ",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_Products.map((products) => {
          return (
            <ProductItem
              key={products.id}
              id={products.id}
              title={products.title}
              price={products.price}
              description={products.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
