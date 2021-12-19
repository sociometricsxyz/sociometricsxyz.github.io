import { useRouter } from "next/router";
import { BASE_PATH } from "@constants";

interface Output {
  url: string;
}

const useCanonicalUrl = (defaultPath?: string): Output => {
  const { asPath } = useRouter();
  const path = defaultPath || asPath.split("?")[0];

  return {
    url: `${BASE_PATH}/${path}`,
  };
};

export default useCanonicalUrl;
