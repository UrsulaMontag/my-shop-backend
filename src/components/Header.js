import Link from "next/link";

export default function Header() {
  return (
    <>
      <Link href="/products" passHref>
        Produkte
      </Link>
      <Link href="/categories" passHref>
        Kategorien
      </Link>
      <Link href="/create-product" passHref>
        Erstelle einProdukt
      </Link>
      <Link href="/create-category" passHref>
        Erstelle eine Kategorie
      </Link>
    </>
  );
}
