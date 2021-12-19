import styled from 'styled-components';
import breakpoint from "styled-components-breakpoint";

export const Container = styled.section<{ name: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${breakpoint("md")`
     margin-bottom: 2rem;
  `}
`;

export const Inner = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 1rem;
  text-align: left;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  ${breakpoint("xs", "md")`
    flex-direction: column;
  `}
`;

export const HeaderWrapper = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  padding: 6rem;

  ${breakpoint("xs", "sm")`
    padding: 6rem 4rem;
  `}

  h2 {
    font-size: 2rem;
    margin: 0;
    line-height: 1;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1;
    opacity: 0.75;
    font-weight: ${({ theme }) => theme.fontWeight.primary.regular};
  }

  svg, h2, p {
    margin-bottom: 0.75rem;
  }

  a {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: 2rem;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryLight};
    transition: 0.2s ease-out;
    text-decoration: none;
    font-size: 1rem;
    margin-top: 0.75rem;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const HeaderBackground = styled.div<{ type: string }>`
  display: none;

  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    left: 0;
    top: 0;
  }

  @media only screen and (max-width: 500px) {
    ${({ type }) => type == "desktop" ? "" : "display: unset;"}
  }

  @media only screen and (min-width: 500px) {
    ${({ type }) => type == "desktop" ? "display: unset;" : ""}
  }
`;

export const ColorSign = styled.div`
  svg {
    height: auto;

    path {
      fill: #61C0F9;
    }
  }
`;

export const HandImage = styled.img`
  width: 40%;
  max-width: 20rem;
  margin-right: 0;
  margin-bottom: -3rem;

  ${breakpoint("sm")`
    width: 30%;
    max-width: 20rem;
    margin-right: 2rem;
  `}
`;
