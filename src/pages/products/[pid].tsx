import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

interface Product {
	id: string;
	name: string;
}

export const getStaticProps: GetStaticProps<{ product: Product }> = async ({ params }) => {
	const index = Number(params?.pid) - 1;
	const product = [
		{ id: "1", name: "Product 1" },
		{ id: "2", name: "Product 2" },
		{ id: "3", name: "Product 3" },
	][index];

	return { props: { product } };
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = [{ params: { pid: "1" } }];

	return { paths, fallback: "blocking" };
};

export default function Product({ product }: InferGetStaticPropsType<typeof getStaticProps>) {
	console.log(product);
	return <div>{product.id}</div>;
}
