import useSWR from "swr";
import Product from "./Product";

export default function ProductGrid() {
  const { data, error } = useSWR("/api/products"); //serverseitig werden Fallbackdaten benutzt, clientseitig werden Daten geladen

  if (error) {
    return <h3>Error: {error.message}</h3>;
  }
  //console.log(data, "--------------------------------------");
  return (
    <ul>
      {data.map((product) => {
        return (
          <li key={product.id}>
            <Product
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              category={product.category}
              tags={product.tags}
            />
          </li>
        );
      })}
    </ul>
  );
}
