import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/containers/Header";
import Footer from "@/containers/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { AnimatePresence, motion } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const variants = {
  initialState: { opacity: 0 },
  animateState: { opacity: 1 },
  exitState: { opacity: 0 },
};

export default function App({ Component, pageProps, router }) {
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
        <AnimatePresence initial={false} mode="wait">
          <motion.main
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 0.2,
            }}
            variants={variants}
            key={router.pathname}
            className={`${inter.variable} font-inter`}>
            <Component {...pageProps} />
          </motion.main>
        </AnimatePresence>
        <Footer />
      </ClerkProvider>
    </>
  );
}
