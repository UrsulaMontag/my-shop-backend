import getCategories from "../src/services/get-categories";
import CategoryGrid from "../src/components/CategoryGrid";
import { SWRConfig } from "swr";
import { swrFetcher } from "../src/lib/swr-fetcher";

export function getStaticProps() {
  const categories = getCategories();
  return {
    props: {
      fallback: {
        "api/categories": categories,
      },
    },
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
