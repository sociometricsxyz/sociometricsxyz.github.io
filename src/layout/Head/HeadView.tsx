import NextHead from "next/head";
import * as React from "react";
import HeadCookie from "./HeadCookie";
import HeadFonts from "./HeadFonts";
import HeadManifest from "./HeadManifest";
import HeadSEO from "./HeadSEO";

const Head: React.FC = () => {
  return (
    <>
      <NextHead>
        <HeadFonts />
        <HeadManifest />
      </NextHead>
      <HeadSEO />
      <HeadCookie />
    </>
  );
}

export default Head;
