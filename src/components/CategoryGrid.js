import Category from "./Category";

export default function CategoryGrid({ categories }) {
  return (
    <>
      {categories.map((category) => {
        return (
          <li key={category.id}>
            <Category name={category.name} description={category.description} />
          </li>
        );
      })}
    </>
  );
}
