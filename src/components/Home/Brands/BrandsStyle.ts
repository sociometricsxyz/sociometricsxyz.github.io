import styled from 'styled-components';
import breakpoint from "styled-components-breakpoint";

export const Container = styled.section<{ name: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${breakpoint("xs", "md")`
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

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 4rem;

  ${breakpoint("xs", "md")`
    flex-direction: column-reverse;
  `}
`;

export const HeaderWrapper = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

  svg, h2 {
    margin-bottom: 0.5rem;
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

  @media only screen and (max-width: 420px) {
    ${({ type }) => type == "desktop" ? "" : "display: unset;"}
  }

  @media only screen and (min-width: 420px) {
    ${({ type }) => type == "desktop" ? "display: unset;" : ""}
  }
`;

export const ColorSign = styled.div`
  svg {
    height: auto;
  }
`;

export const PersonImage = styled.img`
  width: 50%;
  max-width: 20rem;
  margin-left: 0;
  margin-bottom: -3rem;

  ${breakpoint("sm")`
    width: 40%;
    max-width: 20rem;
    margin-left: 2rem;
  `}
`;

export const Brand = styled.div`
  max-width: 45rem;
  position: relative;
`;

export const BrandHeader = styled.div<{ background: string }>`
  padding: 3rem;
  padding-bottom: 8rem;
  border-radius: 3rem;
  width: calc(100% - 6rem);
  background: ${({ background }) => background};

  img {
    display: block;
    height: 2rem;
    width: auto;
  }

  ${breakpoint("xs", "md")`
    padding: 2rem;
    padding-bottom: 6rem;
    border-radius: 2rem;
    width: calc(100% - 4rem);

    img {
      height: 1.5rem;
    }
  `}
`;

export const BrandContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: flex-start;
  align-items: flex-start;
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primaryLight};
  padding: 3rem;
  border-radius: 3rem;
  margin-top: -6rem;
  margin-left: 3rem;

  span {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
    opacity: 0.75;
    font-weight: ${({ theme }) => theme.fontWeight.primary.regular};
  }

  a {
    padding: 0.75rem 1.5rem;
    border-radius: 2rem;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryLight};
    transition: 0.2s ease-out;
    text-decoration: none;
    font-size: 1rem;
    margin-top: 1rem;

    &:hover {
      transform: scale(1.1);
    }
  }

  ${breakpoint("xs", "md")`
    padding: 2rem;
    border-radius: 2rem;
    margin-top: -4rem;
    margin-left: 2rem;

    span {
      font-size: 1.1rem;
    }
  `}
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > ${Brand}:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: auto;
  z-index: 1;
  margin-top: 6rem;

  svg {
    left: 0;
    width: 100%;
    max-width: 1200px;
    height: auto;
    margin: auto;

    path {
      fill: #274171;
    }

    ${breakpoint("xs", "md")`
        position: absolute;
        width: 250%;
        left: -50%;
        bottom: -8rem;
    `}
  }
`;