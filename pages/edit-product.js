import ProductCreateForm from "../src/components/ProductCreateForm";
import getCategories from "../src/services/get-categories";
import getProducts from "../src/services/get-products";

export async function getServerSideProps() {
  const products = await getProducts();
  const categories = await getCategories();
  return {
    props: { products, categories },
  };
}

export default function EditProduct({ products, categories }) {
  return (
    <>
      <h1>Editiere ein Produkt</h1>
      <ProductCreateForm products={products} categories={categories} />
    </>
  );
}
