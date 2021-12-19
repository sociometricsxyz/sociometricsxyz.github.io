import { useCookieConsent } from '@use-cookie-consent/core';
import Head from 'next/head';
import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const scripts = {
};

const scriptsConsent = {
  marketing: [],
  necessary: [],
  statistics: [],
};

const Container = styled.div`
  position: fixed;
  left: 1rem;
  bottom: 1rem;
  max-width: 35rem;
  padding: 1.5rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
  background: #E9EEF8;
  border: 1px solid rgba(204, 208, 217, 0.1);
  z-index: 1000;
  font-weight: 500;

  h1 {
    font-size: 1.2rem;
    line-height: 1.2;
  }

  p {
    color: #274171;
    opacity: 0.75;
  }

  .more {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    line-height: 1.5;

    label {
      cursor: pointer;
      color: #274171;
      opacity: 0.75;
    }

    h2 {
      font-size: 1rem;
      color: #274171;
      margin-bottom: 0.25rem;
    }
  }

  button {
    background: #274171;
    color: #fff;
    font-weight: 600;
    padding: 0.75rem;
    border: 0;
    border-radius: 0.25rem;
    cursor: pointer;

    &:last-child {
      margin-left: 0.5rem;
      background: transparent;
      color: #274171;
      border: 1px solid #274171;
    }
  }
`;

const HeadCookie: React.FC = () => {
  const {
    consent: currentConsent,
    acceptAllCookies,
    acceptCookies,
  } = useCookieConsent();
  const [showMore, setShowMore] = useState(false);
  const scripts = Object.entries(scriptsConsent)
    .filter(([k, v]) => currentConsent[k])
    .map(([k, v]) => v.flat())
    .flat();

  const [consents, setConsents] = useState({
    marketing: false,
    necessary: true,
    statistics: false,
  });

  const showModal = Object.keys(currentConsent).length === 0;

  return (
    <>
      <Head>
        {scripts}
      </Head>
      {showModal && (
          <Container>
          <h1>Akceptacja plików cookie</h1>
          <p>
            Strona korzysta z plików cookie. Zarówno z tych niezbędnych -
            umożliwiających korzystanie z serwisu oraz z dodatkowych,
            wspierających analitykę i marketing. Kliknij, aby zaakceptować wybrane
            pliki cookie.
          </p>
          {showMore && (
            <div className="more">
              <h2>Wybierz cookie do akceptacji</h2>
              <label>
                <input
                  type="checkbox"
                  disabled
                  checked={consents.necessary}
                  onChange={(e) =>
                    setConsents({ ...consents, necessary: e.target.checked })
                  }
                />{' '}
                Funkcjonalne
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={consents.statistics}
                  onChange={(e) =>
                    setConsents({ ...consents, statistics: e.target.checked })
                  }
                />{' '}
                Analityczne
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={consents.marketing}
                  onChange={(e) =>
                    setConsents({ ...consents, marketing: e.target.checked })
                  }
                />{' '}
                Marketingowe
              </label>
            </div>
          )}
          <div className="buttons">
            <button
              onClick={
                showMore ? () => acceptCookies(consents) : acceptAllCookies
              }
            >
              Akceptuj cookie
            </button>
            <button onClick={() => setShowMore(!showMore)}>Wybierz cookie</button>
          </div>
        </Container>
      )}
    </>
  );
};

export default HeadCookie;
