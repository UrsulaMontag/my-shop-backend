import getProducts from "../src/services/get-products";
import ProductGrid from "../src/components/ProductGrid";

export async function getStaticProps() {
  const products = await getProducts();

  return {
    props: {
      fallback: {
        "api/products": products,
      },
    },
  };
}

export default function Products({ fallback }) {
  return (
    <SWRConfig>
      <h1>Produkte</h1>
      <ProductGrid products={products} />
    </SWRConfig>
  );
}
