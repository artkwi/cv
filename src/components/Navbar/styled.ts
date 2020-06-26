import styled, { css } from 'styled-components';
import media from 'styled-media-query';

const lineCSS = css`
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 1px;
    height: 2px;
    width: 100%;
    transition: all 0.2s;
`;

export const Nav = styled.nav`
    position: fixed;
    width: 100%;
`;

export const Items = styled.ul<{ isOpen: boolean }>`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    /* display: grid; */
    /* grid-template-columns: repeat(4, 1fr); */
    height: 100vh;
    background-color: blue;
    ${media.greaterThan('medium')`
        background-color: red;
    `}

`;

export const Item = styled.li`
    background: green;
    padding: 20px;
    text-align: center;
`;

// TODO - change to button
export const MenuBtn = styled.a<{ isOpen: boolean }>`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    height: 30px;
    width: 30px;
    position: absolute;
    top: 10px;
    right: 20px;
    z-index: 10;
`;

export const Lines = styled.span<{ isOpen: boolean }>`
    ${lineCSS};
    height: ${({ isOpen }) => (isOpen ? '0' : '2px')};
    &:after,
    &:before {
        content: '';
        ${lineCSS};
        background-color: ${({ isOpen, theme }) => (isOpen ? theme.colors.black : theme.colors.white)};
        position: absolute;
        transform: translate(0, 8px);
        transform: ${({ isOpen }) => isOpen && 'rotate(-45deg)'};
    }

    &:before {
        transform: translate(0, -8px);
        transform: ${({ isOpen }) => isOpen && 'rotate(45deg)'};
    }
`;
