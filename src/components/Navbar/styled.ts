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

export const Item = styled.li`
    position: relative;
    z-index: 25;
    background: green;
    padding: 20px;
    text-align: center;
`;

export const Items = styled.ul<{ isOpen: boolean }>`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:before {
        content: '';
        transition: all 0.2s;
        background-color: ${({ theme }) => theme.colors.blue};
        transform: ${({ isOpen }) => (isOpen ? 'scale(1)' : 'scale(0)')};
        width: 300vmax;
        height: 300vmax;
        position: absolute;
        transform-origin: 50% 50%;
        top: -150vmax;
        right: -150vmax;
        border-radius: 50%;
        overflow: hidden;
        will-change: transform;
    }

    ${Item} {
        opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
        transition: all 0.2s;
        will-change: opacity;
    }

    ${media.greaterThan('medium')`
        background-color: red;
    `}
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
    z-index: 30;
`;

export const Lines = styled.span<{ isOpen: boolean }>`
    ${lineCSS};
    height: ${({ isOpen }) => (isOpen ? '0' : '2px')};
    &:after,
    &:before {
        content: '';
        ${lineCSS};
        background-color: ${({ isOpen, theme }) =>
            isOpen ? theme.colors.black : theme.colors.white};
        position: absolute;
        transform: translate(0, 8px);
        transform: ${({ isOpen }) => isOpen && 'rotate(-45deg)'};
    }

    &:before {
        transform: translate(0, -8px);
        transform: ${({ isOpen }) => isOpen && 'rotate(45deg)'};
    }
`;
