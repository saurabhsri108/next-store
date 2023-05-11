import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {Inter} from "next/font/google";
import Head from "next/head";
import Header from "@/containers/Header";
import Footer from "@/containers/Footer";
import {ClerkProvider} from "@clerk/nextjs";
import Script from "next/script";
import {AnimatePresence, motion} from "framer-motion";

const loadNetcoreScript = () => {
    setTimeout(() => {
        try {
            //@ts-ignore
            smartech("create", process.env.NEXT_PUBLIC_NC_PANEL_IDENTIFIER);
            //@ts-ignore
            smartech("register", process.env.NEXT_PUBLIC_NC_WEBSITE_IDENTIFIER);

            // fire initial event
            // @ts-ignore
            smartech("debug", "1");

            console.log("Hello")
        } catch (e) {
            //
        }
    }, 3000);
};

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter"
});

const variants = {
    initialState: {opacity: 0},
    animateState: {opacity: 1},
    exitState: {opacity: 0}
};

export default function App({Component, pageProps, router}: AppProps) {
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
                    src="https://cmp.osano.com/16CPMHTaM5wJawf/0588f738-df1c-44a2-9bba-5c7e55e784c6/osano.js"/>
            <Script id="partytown-gtm" strategy="afterInteractive" dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NC987FC');`
            }}/>
            <Script
                src="//cdnt.netcoresmartech.com/smartechclient.js"
                strategy="afterInteractive"
                onLoad={loadNetcoreScript}></Script>
            <ClerkProvider {...pageProps}>
                <Header/>
                <AnimatePresence initial={false} mode="wait">
                    <motion.main
                        initial="initialState"
                        animate="animateState"
                        exit="exitState"
                        transition={{
                            duration: 0.2
                        }}
                        variants={variants}
                        key={router.pathname}
                        className={`${inter.variable} font-inter`}>
                        <Component {...pageProps} />
                    </motion.main>
                </AnimatePresence>
                <Footer/>
            </ClerkProvider>
        </>
    );
}
