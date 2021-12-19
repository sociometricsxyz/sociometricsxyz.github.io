import Link from "next/link";
import React from "react";
import { Container, DesktopNav, DesktopNavElement, Inner, Logo } from "./HeaderStyle";

const Header: React.FC = () => {
  return (
    <Container>
      <Inner>
          <Logo className="hide-full-xs" dangerouslySetInnerHTML={{ __html: require("@assets/icons/logo.svg?include") }} />
          <DesktopNav>
              <Link href="/statut.pdf" passHref>
                  <DesktopNavElement>
                      Statut
                  </DesktopNavElement>
              </Link>
              <Link href="#brands" passHref>
                  <DesktopNavElement>
                      Nasze marki
                  </DesktopNavElement>
              </Link>
              <Link href="#contact" passHref>
                  <DesktopNavElement>
                      Kontakt
                  </DesktopNavElement>
              </Link>
          </DesktopNav>
      </Inner>
    </Container>
  );
};

export default Header;
