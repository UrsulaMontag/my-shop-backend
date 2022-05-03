import ProductCreateForm from "../src/components/ProductCreateForm";
import getProducts from "../src/services/get-products";

export async function getServerSideProps() {
  const products = await getProducts();
  return {
    props: { products },
  };
}

export default function EditProduct({ products }) {
  return (
    <>
      <h1>Editiere ein Produkt</h1>
      <ProductCreateForm products={products} />
    </>
  );
}
