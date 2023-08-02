import Container from "@/components/Container"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <Container className="flex w-full flex-col items-start justify-between px-8 py-4 md:flex-row md:items-center">
      <section className="flex max-w-[29rem] flex-1 flex-col items-start justify-center py-12 md:justify-start md:py-20">
        <h1 className="mb-2 text-4xl font-bold md:mb-4 md:text-5xl">
          We don’t sell products, we deliver aspirations.
          <span className="mt-4 block w-1/4 rounded-lg border-b-4 border-b-slate-950"></span>
        </h1>
        <p className="text-md mb-4 text-slate-700 md:mb-8 md:text-xl">
          Get your most desired aspiration delivered to your home. Fast, Secure,
          and 100% satisfaction.
        </p>
        <Link
          href="/products"
          className="rounded-sm bg-slate-800 px-6 py-4 text-white hover:bg-slate-950 focus:bg-slate-950 md:rounded-md md:px-8 md:py-6 md:text-lg"
        >
          Shop Now
        </Link>
      </section>
      <section className="hidden md:flex">
        <Image
          src="/assets/shopping-bags.svg"
          alt="Shopping Bag Illustration"
          width={640}
          height={640}
          className="w-40rem"
          priority
        />
      </section>
    </Container>
  )
}
