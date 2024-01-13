import Footer from "@/containers/Footer";
import Header from "@/containers/Header";
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { GoogleTagManager } from "@next/third-parties/google";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const variants = {
  initialState: { opacity: 0 },
  animateState: { opacity: 1 },
  exitState: { opacity: 0 },
};

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (process.env.NODE_ENV !== "production") {
    console.log(metric);
  }
}

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS 13 | Learn NextJS 13 with old architecture</title>
        <meta name="description" content="Learn NextJS 13 pages directory architecture" />
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
            className={`${inter.variable} font-inter`}
          >
            <Component {...pageProps} />
          </motion.main>
        </AnimatePresence>
        <Footer />
      </ClerkProvider>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
      {/*			<Script*/}
      {/*				strategy="lazyOnload"*/}
      {/*				id="gtm-script"*/}
      {/*				dangerouslySetInnerHTML={{*/}
      {/*					__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':*/}
      {/*new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],*/}
      {/*j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=*/}
      {/*'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);*/}
      {/*})(window,document,'script','dataLayer',"${process.env.NEXT_PUBLIC_GTM_ID}");`,*/}
      {/*				}}*/}
      {/*			/>*/}
    </>
  );
}
