import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/containers/Header";
import Footer from "@/containers/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS 13 | Learn NextJS 13 with old architecture</title>
        <meta
          name="description"
          content="Learn NextJS 13 pages directory architecture"
        />
      </Head>
      <ClerkProvider {...pageProps}>
        <Header />
        <main className={`${inter.variable} font-inter`}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </ClerkProvider>
    </>
  );
}
