import styled, { css } from 'styled-components';
import media from 'styled-media-query';

const lineCSS = css`
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 1px;
    height: 2px;
    width: 100%;
    transition: all 0.2s;
    z-index: 35;
`;

export const Nav = styled.nav`
    position: fixed;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${media.greaterThan('medium')`
        justify-content: flex-start;
    `}
`;

export const Item = styled.li`
    position: relative;
    z-index: 45;
    background-color: #2b6d9985;
    height: 100%;
    padding: 20px;
    text-align: center;
    font-family: Roboto, sans-serif;
    overflow: hidden;

    &:after {
        content: '';
        display: block;
        position: absolute;
        background-color: #005792;
        opacity: 0.8;
        top: 0;
        bottom: 0;
        left: -100%;
        width: 100%;
        z-index: -1;
        transition: all 0.2s;
    }

    &:hover {
        &:after {
            left: 0;
        }
    }
`;

export const Items = styled.ul<{ isOpen: boolean }>`
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;

    ${Item} {
        opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
        transition: all 0.2s;
        will-change: opacity;

        ${media.greaterThan('medium')`
            opacity: 1;
            flex:1;
        `}
    }

    ${media.greaterThan('medium')`
        display: flex;
        flex-direction: row;
        height: 60px;
        justify-content: center;
    `}
`;

// TODO - change to button
export const MenuBtn = styled.button<{ isOpen: boolean }>`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    height: 30px;
    width: 30px;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 30;

    &:before {
        content: '';
        position: relative;
        transition: all 0.3s linear;
        background-color: ${({ theme }) => theme.colors.blue};
        transform: ${({ isOpen }) => (isOpen ? 'scale(1)' : 'scale(0)')};
        width: 300vmax;
        height: 300vmax;
        position: absolute;
        transform-origin: 50% 50%;
        top: calc(-150vmax + 15px);
        right: calc(-150vmax + 15px);
        border-radius: 50%;
        overflow: hidden;
        will-change: transform;
    }
    &:after {
        content: '';
        position: absolute;
        border-radius: 50%;
        display: block;
        background-color: ${({ theme }) => theme.colors.blueHard};
        width: 50px;
        height: 50px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    ${media.greaterThan('medium')`
        display: none;
    `}
`;

export const Lines = styled.span<{ isOpen: boolean }>`
    ${lineCSS};
    height: ${({ isOpen }) => (isOpen ? '0' : '2px')};
    &:after,
    &:before {
        content: '';
        ${lineCSS};
        left: 0%;
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
