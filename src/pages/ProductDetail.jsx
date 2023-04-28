import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  const id = params.productId;

  return (
    <>
      <h1>Product details </h1>
      <p>{id}</p>
      <p>
        <Link to=".." relative="path">
          GO BACK
        </Link>
      </p>
    </>
  );
};

export default ProductDetail;
