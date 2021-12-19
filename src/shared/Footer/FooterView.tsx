import Link from 'next/link';
import React from 'react';
import {
    Container,
    DesktopNav,
    DesktopNavElement,
    Inner,
    Logo
} from './FooterStyle';

const Footer: React.FC = () => {
  return (
    <Container>
      <Inner
        dangerouslySetInnerHTML={{
            __html: require('@assets/vectors/line.svg?include'),
          }}
      />
      <Inner>
        <Logo
          dangerouslySetInnerHTML={{
            __html: require('@assets/icons/logo.svg?include'),
          }}
        />
        <DesktopNav>
          <Link href="/polityka-prywatnosci.pdf" passHref>
            <DesktopNavElement>Polityka prywatności</DesktopNavElement>
          </Link>
          <Link href="/statut.pdf" passHref>
            <DesktopNavElement>Statut</DesktopNavElement>
          </Link>
          <Link href="#brands" passHref>
            <DesktopNavElement>Nasze marki</DesktopNavElement>
          </Link>
          <Link href="#contact" passHref>
            <DesktopNavElement>Kontakt</DesktopNavElement>
          </Link>
        </DesktopNav>
      </Inner>
    </Container>
  );
};

export default Footer;
