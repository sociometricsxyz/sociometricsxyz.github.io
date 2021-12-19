import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const PageContainer = styled.main<{ gapBase?: number }>`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: ${({ gapBase = 8 }) => gapBase}rem;
  overflow: hidden;

  ${breakpoint("xs", "md")`
    grid-gap: ${({ gapBase = 8 }) => gapBase / 4}rem;
  `};

  ${breakpoint("md", "lg")`
    grid-gap: ${({ gapBase = 8 }) => gapBase / 2}rem;
  `};
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(360px,1fr));
  grid-gap: 2rem;

  ${breakpoint("xs", "md")`
    grid-gap: 1rem;
  `};

  @media only screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;
