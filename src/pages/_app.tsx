import "@/styles/globals.css"
import { Inter } from "next/font/google"
import Head from "next/head"
import Header from "@/containers/Header"
import Footer from "@/containers/Footer"
import { ClerkProvider } from "@clerk/nextjs"
import { AnimatePresence, motion } from "framer-motion"
import type { AppProps, NextWebVitalsMetric } from "next/app"
import Script from "next/script"
import { Partytown } from "@builder.io/partytown/react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const variants = {
  initialState: { opacity: 0 },
  animateState: { opacity: 1 },
  exitState: { opacity: 0 },
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (process.env.NODE_ENV !== "production") {
    console.log(metric)
  }
}

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS 13 | Learn NextJS 13 with old architecture</title>
        <meta
          name="description"
          content="Learn NextJS 13 pages directory architecture"
        />
        <Partytown
          debug={true}
          forward={["dataLayer.push", "__tag_assistant_forwarder"]}
          resolveUrl={(url) => {
            if (url.pathname.includes("debug/bootstrap")) {
              var proxyUrl = new URL("/party-proxy")
              // @ts-ignore
              proxyUrl.searchParams.append("url", url)
              console.log({ proxyUrl, url })
              return proxyUrl
            }
            return url
          }}
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
            className={`${inter.variable} font-inter`}
          >
            <Component {...pageProps} />
          </motion.main>
        </AnimatePresence>
        <Footer />
      </ClerkProvider>
      <Script
        id="gtm-script"
        type="text/partytown"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("GTM script is ready")
        }}
        dangerouslySetInnerHTML={{
          __html: `
            (function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
              });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
              j.async = true;
              j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', '${process.env.NEXT_PUBLIC_GTM_ID}');
          `,
        }}
      />
    </>
  )
}
