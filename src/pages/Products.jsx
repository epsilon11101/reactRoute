import { Link } from "react-router-dom";

const ProductsPage = () => {
  const PRODUCTS = [
    { id: "p1", title: "product1" },
    { id: "p2", title: "product2" },
    { id: "p3", title: "product3" },
  ];

  return (
    <>
      {" "}
      <h1>Products Page</h1>
      <ul>
        {PRODUCTS.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductsPage;
