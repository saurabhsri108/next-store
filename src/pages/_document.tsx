import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="overflow-auto scrollbar-hide">
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NC987FC" height="0" width="0" style="display: none; visibility: hidden;" />`
        }}
      />
      <Main />
      <NextScript />
      </body>
    </Html>
  );
}