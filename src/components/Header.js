import Link from "next/link";

export default function Header() {
  return (
    <>
      <Link href="/products">Products</Link>;
      <Link href="/categories">Kategorien</Link>;
      <Link href="/create-product">Erstelle einProdukt</Link>;
      <Link href="/create-categories">Erstelle eine Kategorie</Link>;
    </>
  );
}
