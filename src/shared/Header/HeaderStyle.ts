import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const Container = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
`;

export const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    width: 100%;
    margin: auto;
    max-width: 1200px;
    position: relative;

    ${breakpoint("md")`
        padding: 3rem 1rem;
    `}
`;

export const Logo = styled.a`
    display: flex;
    position: relative;
    height: 1.5rem;

    ${breakpoint("md")`
        height: 2rem;
    `}

    svg {
        height: 1.5rem;
        width: auto;
        position: absolute;
        top: 0;

        ${breakpoint("md")`
            font-size: 2rem;
        `}
    }
`;

export const DesktopNavElement = styled.a`
    font-weight: ${({ theme }) => theme.fontWeight.primary.regular};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 1.25rem;

    &:hover {
        text-decoration: underline;
    }

    &:not(:last-child) {
        margin-right: 1rem;

        ${breakpoint("md")`
            margin-right: 1.5rem;
        `}
    }

    &:last-child {
        padding: 0.5rem 0.75rem;
        border-radius: 2rem;
        border: 1px solid ${({ theme }) => theme.colors.primary};
        transition: 0.2s ease-out;

        ${breakpoint("md")`
            padding: 0.75rem 1rem;
        `}

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
`;
