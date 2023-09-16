import type { InferGetStaticPropsType } from "next";
import Link from "next/link";

export const getStaticProps = async () => {
  const products = [
    { id: "1", name: "Product 1" },
    { id: "2", name: "Product 2" },
    { id: "3", name: "Product 3" },
  ];
  return { props: { products } };
};

export default function Products({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <section>
      {products.map((product) => (
        <Link href={`/products/${product.id}`} key={product.id}>
          <p>{product.name}</p>
        </Link>
      ))}
    </section>
  );
}
