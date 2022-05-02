import getCategories from "../src/services/get-categories";
import CategoryGrid from "../src/components/CategoryGrid";
import { SWRConfig } from "swr";
import { swrFetcher } from "../src/lib/swr-fetcher";

export async function getStaticProps() {
  const categories = await getCategories();
  return {
    props: {
      fallback: {
        "/api/categories": categories,
      },
    },
  };
}

export default function Categories({ fallback }) {
  return (
    <SWRConfig value={{ fetcher: swrFetcher, fallback }}>
      <h1>Kategorien</h1>
      <CategoryGrid />
    </SWRConfig>
  );
}
