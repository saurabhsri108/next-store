import type { InferGetStaticPropsType } from "next"
import Link from "next/link"

export const getStaticProps = async () => {
  console.log("Server:::", process.env.NEXT_PUBLIC_GTM_ID)
  console.log("Server:::", process.env.GTM_ID)
  const products = [
    { id: crypto.randomUUID(), name: "Product 1" },
    { id: crypto.randomUUID(), name: "Product 2" },
    { id: crypto.randomUUID(), name: "Product 3" },
  ]
  return { props: { products } }
}

export default function Products({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log("Browser:::", process.env.NEXT_PUBLIC_GTM_ID)
  console.log("Browser:::", process.env.GTM_ID)
  return (
    <section>
      {products.map((product) => (
        <Link href={`/products/${product.id}`} key={product.id}>
          <p>{product.name}</p>
        </Link>
      ))}
    </section>
  )
}
