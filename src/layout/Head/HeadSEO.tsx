import { BASE_PATH } from "@constants";
import useCanonicalUrl from "@utils/hooks/useCanonicalUrl";
import { DefaultSeo } from "next-seo";
import React from "react";

const HeadSEO: React.FC = () => {
  const { url } = useCanonicalUrl();

  return (
    <DefaultSeo
      title="Sociometrics"
      description="Tworzymy odpowiedzialne społecznie rozwiązania"
      canonical={url}
      openGraph={{
        url,
        type: "website",
        site_name: "Sociometrics",
        description: "Tworzymy odpowiedzialne społecznie rozwiązania",
        locale: 'pl_PL',
        images: [
          {
            url: `${BASE_PATH}/static/thumbnail.png`,
            width: 1200,
            height: 630,
            alt: "Sociometrics thumbnail",
          },
        ],
      }}
    />
  );
};

export default HeadSEO;
