import type { GetStaticProps, InferGetStaticPropsType } from "next"

export async function getStaticProps(context: GetStaticProps) {
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
  return (
    <section>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
        </div>
      ))}
    </section>
  )
}
