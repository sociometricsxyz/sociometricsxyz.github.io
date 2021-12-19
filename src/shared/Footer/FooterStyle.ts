import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const Container = styled.footer`
    width: 100%;
    padding: 3rem 1rem;
`;

export const Inner = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 1200px;
    margin: auto;

    & > svg {
        width: 100%;
    }

    ${breakpoint("xs", "md")`
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}
`;

export const Logo = styled.a`
    ${breakpoint("xs", "md")`
        margin-bottom: 2rem;
    `}

    svg {
        height: 2rem;
        width: auto;
    }
`;

export const DesktopNavElement = styled.a`
    font-weight: ${({ theme }) => theme.fontWeight.primary.regular};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 1.25rem;

    ${breakpoint("xs", "md")`
        &:not(:last-child) {
            margin-bottom: 1rem;
        }
    `}

    ${breakpoint("md")`
        &:not(:last-child) {
            margin-right: 1.5rem;
        }
    `}

    &:last-child {
        padding: 0.75rem 1rem;
        border-radius: 2rem;
        border: 1px solid ${({ theme }) => theme.colors.primary};
        transition: 0.2s ease-out;

        &:hover {
            text-decoration: unset;
            background: ${({ theme }) => theme.colors.primary};
            color: ${({ theme }) => theme.colors.primaryLight};
        }
    }
`;

export const DesktopNav = styled.div`
    display: flex;
    align-items: center;

    ${breakpoint("xs", "md")`
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}
`;
