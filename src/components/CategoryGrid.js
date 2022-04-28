import Product from "./Category";

export default function CategoryGrid({ categories }) {
  return (
    <>
      {categories.map((category) => {
        return (
          <li key={category.id}>
            <Product name={category.name} description={category.description} />
          </li>
        );
      })}
    </>
  );
}
