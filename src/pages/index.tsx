import Container from "@/components/Container";
import Image from "next/image";
import ShoppingBagImage from "@/assets/shopping-bags.svg";
import Link from "next/link";

export default function Home() {
  return (
    <Container className="flex flex-col md:flex-row items-center justify-center p-4 w-full  h-[calc(100vh-11rem)]">
      <section className="flex flex-col items-start justify-start flex-1">
        <h1 className="text-4xl md:text-5xl md:mb-4 font-bold mb-2">We don’t sell products, we
          deliver
          aspirations.
          <span className="border-b-4 border-b-slate-950 w-1/4 mt-4 rounded-lg block"></span></h1>
        <p className="text-md md:text-xl md:mb-8 text-slate-700 mb-4">Get your most desired aspiration delivered to
          your home.
          Fast,
          Secure, and
          100%
          satisfaction.</p>
        <Link href="/products"
              className="bg-slate-800 hover:bg-slate-950 focus:bg-slate-950 text-white px-6 py-4 rounded-sm md:px-8 md:py-6 md:text-lg md:rounded-md">Shop
          Now</Link>
      </section>
      <section className="hidden md:flex">
        <Image src={ShoppingBagImage} alt="Shopping Bag Illustration" />
      </section>
    </Container>
  );
}