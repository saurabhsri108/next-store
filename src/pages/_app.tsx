import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/containers/Header";
import Footer from "@/containers/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";

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

      {/*<Partytown debug={true} forward={["dataLayer.push"]} />*/}
      <Script id="osano-consent" strategy="afterInteractive"
              src="https://cmp.osano.com/16CPMHTaM5wJawf/0588f738-df1c-44a2-9bba-5c7e55e784c6/osano.js" />
      <Script id="partytown-gtm" strategy="afterInteractive" dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NC987FC');`
      }} />
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
