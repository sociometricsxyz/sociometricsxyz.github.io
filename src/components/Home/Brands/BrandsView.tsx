import * as React from 'react';
import {
  Brand,
  BrandContent,
  BrandHeader,
  ColorSign,
  Container, Divider, Header,
  HeaderBackground,
  HeaderWrapper,
  Inner,
  List,
  PersonImage
} from './BrandsStyle';

const Brands: React.FC = () => {
  return (
    <Container name="brands">
      <Inner>
        <Header>
          <HeaderWrapper>
            <HeaderBackground
              type="desktop"
              dangerouslySetInnerHTML={{
                __html: require('@assets/vectors/rect-bg.svg?include'),
              }}
            />
            <HeaderBackground
              type="mobile"
              dangerouslySetInnerHTML={{
                __html: require('@assets/vectors/rect-bg-mobile.svg?include'),
              }}
            />
            <ColorSign
              dangerouslySetInnerHTML={{
                __html: require('@assets/icons/color-sign.svg?include'),
              }}
            />
            <h2>Nasze marki</h2>
            <p>Poznaj szeroką gamę tworzonych przez nas rozwiązań</p>
          </HeaderWrapper>
          <PersonImage src={require('@assets/images/person-walking.png')} />
        </Header>
        <List>
          <Brand>
            <BrandHeader background="#005669">
              <img src={require('@assets/images/brands/mypolitics.png')} />
            </BrandHeader>
            <BrandContent>
              <span>
                Stworzyliśmy test poglądów politycznych, z którego skorzystało
                wiele milionów Polek i Polaków, w tym kilkudziesięciu polityków. Analizuje odpowiedzi i na podstawie kilkudziesięciu odpowiedzi dopasowuje od
                poglądy, najbliższą partię czy miejsce na kompasie politycznym.
              </span>
              <a href="https://mypolitics.pl">Zobacz</a>
            </BrandContent>
          </Brand>
        </List>
        <Divider dangerouslySetInnerHTML={{ __html: require("@assets/vectors/colored-line.svg?include") }}/>
      </Inner>
    </Container>
  );
};

export default Brands;
