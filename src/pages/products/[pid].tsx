import type { GetServerSideProps, InferGetServerSidePropsType } from "next"

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  params,
}) => {
  const { cookies } = req
  console.log({ cookies, params })

  const product = [
    { id: crypto.randomUUID(), name: "Product 1" },
    { id: crypto.randomUUID(), name: "Product 2" },
    { id: crypto.randomUUID(), name: "Product 3" },
  ][1]

  return { props: { product } }
}

export default function Product({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <div>{product.id}</div>
}
