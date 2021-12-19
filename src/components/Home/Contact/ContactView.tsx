import * as React from 'react';
import {
  Container, HandImage, Header,
  HeaderBackground,
  HeaderWrapper,
  Inner
} from './ContactStyle';

const Contact: React.FC = () => {
  return (
    <Container name="contact">
      <Inner>
        <Header>
          <HandImage src={require('@assets/images/hand.png')} />
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
            <h2>Kontakt</h2>
            <p>Jesteśmy otwarci na współpracę. Skontaktuj się z nami!</p>
            <div>
              <a href="mailto:kontakt@sociometrics.xyz">kontakt@sociometrics.xyz</a>
            </div>
          </HeaderWrapper>
        </Header>
      </Inner>
    </Container>
  );
};

export default Contact;
