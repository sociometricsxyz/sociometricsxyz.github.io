import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
export const BASE_PATH =
  typeof window !== "undefined"
    ? window.location.origin
    : publicRuntimeConfig.BASE_PATH || "https://sociometrics.xyz/";

export const paths = {
  home: "/",
};

export const titleTemplate = "%s | Sociometrics";
