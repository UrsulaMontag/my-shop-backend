import getCategories from "../src/services/get-categories";
import CategoryGrid from "../src/components/CategoryGrid";

export function getStaticProps() {
  const categories = getCategories();
  return {
    props: { categories },
  };
}

export default function Categories({ categories }) {
  return (
    <>
      <h1>Kategorien</h1>
      <CategoryGrid categories={categories} />
    </>
  );
}
