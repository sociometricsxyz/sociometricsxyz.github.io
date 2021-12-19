import Layout from "@layout";
import "modern-normalize/modern-normalize.css";
import { AppProps } from "next/app";
import NextNprogress from "nextjs-progressbar";
import * as React from "react";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <NextNprogress />
    </>
  );
};

export default App;
