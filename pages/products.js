import getProducts from "../src/services/get-products";
import ProductGrid from "../src/components/ProductGrid";

export function getStaticProps() {
  const products = getProducts();

  return {
    props: { products },
  };
}

export default function Products({ products }) {
  return (
    <>
      <h1>Produkte</h1>
      <ProductGrid products={products} />
    </>
  );
}
