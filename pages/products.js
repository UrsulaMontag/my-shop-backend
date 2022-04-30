import getProducts from "../src/services/get-products";
import ProductGrid from "../src/components/ProductGrid";
import { SWRConfig } from "swr";
import { swrFetcher } from "../src/lib/swr-fetcher";

export async function getStaticProps() {
  const products = await getProducts();

  return {
    props: {
      fallback: {
        // folgende Daten (aus lokaler JSON Datei) sollen als Fallback genutzt werden, wenn über Server folgende Route anfragt wird
        // (wenn über Browser Anfrage stattfindet, dann sollen Daten von der API geladen werden)
        "api/products": [],
      },
    },
  };
}

export default function Products({ fallback }) {
  return (
    <SWRConfig value={{ fetcher: swrFetcher, fallback }}>
      <h1>Produkte</h1>
      <ProductGrid />
    </SWRConfig>
  );
}
