import Product from "./Product";

export default function ProductGrid({ products }) {
  return (
    <>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Product
              name={product.name}
              description={product.description}
              price={product.price}
              category={product.category}
              tags={product.tags}
            />
          </li>
        );
      })}
    </>
  );
}
