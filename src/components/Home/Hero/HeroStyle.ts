import styled from 'styled-components';
import breakpoint from "styled-components-breakpoint";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: min(768px, 100vh);
  margin-bottom: 4rem;

  ${breakpoint("xs", "md")`
    height: 80vh;
    min-height: 33rem;
    margin-bottom: 6rem;
  `}
`;

export const Inner = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 1rem;
  text-align: left;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: flex-start;
  align-items: flex-start;
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
  color: ${({ theme }) => theme.colors.primary};

  h1 {
    font-size: 3.5rem;
    max-width: 50rem;
    line-height: 1.1;
    margin: 0;

    ${breakpoint("xs", "md")`
        font-size: 2.5rem;
    `}
  }

  p {
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.5;
    opacity: 0.75;
    max-width: 45rem;
    font-weight: ${({ theme }) => theme.fontWeight.primary.regular};

    ${breakpoint("xs", "md")`
        font-size: 1.25rem;
    `}
  }

  h1, p {
    margin-bottom: 0.75rem;
  }

  a {
    padding: 0.75rem 1rem;
    border-radius: 2rem;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryLight};
    transition: 0.2s ease-out;
    text-decoration: none;
    font-size: 1.25rem;

    &:hover {
      transform: scale(1.1);
    }
  }

  a:last-child {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  
  a:not(:last-child) {
    margin-right: 0.75rem;
  }
`;

export const BackgroundWrapper = styled.div`
  div {
    max-width: 1200px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  img {
    position: absolute;
    right: 2rem;
    bottom: 4rem;
    width: 35%;
    max-width: 40rem;

    ${breakpoint("xs", "md")`
        display: none;
        bottom: 0;
    `}
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: auto;
  z-index: 1;
  padding: 0 1rem;

  svg {
    position: absolute;
    bottom: -4rem;
    left: 0;
    width: 100%;
    max-width: 1200px;
    height: auto;
    margin: auto;

    ${breakpoint("xs", "md")`
        position: absolute;
        width: 250%;
        left: -50%;
        bottom: -8rem;
    `}
  }
`;