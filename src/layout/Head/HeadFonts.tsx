import * as R from "ramda";
import * as React from "react";

const fontsPreloadPaths = [
  "Baloo2/Baloo2-Regular.ttf",
  "Baloo2/Baloo2-Bold.ttf",
];

const HeadFonts: React.FC = () => {
  const toFontPreloadLink = (path: string) => (
    <link
      key={path}
      rel="preload"
      as="font"
      crossOrigin=""
      href={`/static/fonts/${path}`}
    />
  );

  const fontsPreload = R.map(toFontPreloadLink, fontsPreloadPaths);

  return <>{fontsPreload}</>;
};

export default HeadFonts;
