import Link from "next/link";
import * as React from "react";
import { BackgroundWrapper, Container, Content, Divider, Inner, LinksContainer } from "./HeroStyle";

const Hero: React.FC = () => {
  return (
    <>
      <Container>
      <Inner>
        <BackgroundWrapper>
          <div>
            <img src={require("@assets/images/hero-image.png")} alt="sociometrics illustration" />
            <Divider dangerouslySetInnerHTML={{ __html: require("@assets/vectors/colored-line.svg?include") }}/>
          </div>
        </BackgroundWrapper>
        <Content>
          <h1>Tworzymy odpowiedzialne społecznie rozwiązania</h1>
          <p>
            Nasze marki zmieniają świat stosując innowacyjne rozwiązania, najnowszymi technologiami budujemy społeczeństwo jutra.
          </p>
          <LinksContainer>
            <Link href="#contact">
              Kontakt
            </Link>
            <Link href="#brands">
              Nasze marki
            </Link>
          </LinksContainer>
        </Content>
      </Inner>
    </Container>
    </>
  )
}

export default Hero;