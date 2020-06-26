import styled, { css } from 'styled-components';

const lineCSS = css`
    background-color: #fff;
    border-radius: 1px;
    height: 2px;
    width: 100%;
    transition: all 0.2s;
`;

export const Items = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

export const Item = styled.li`
    background: yellow;
    padding: 20px;
    text-align: center;
`;

export const MenuBtn = styled.a<{ isOpen: boolean }>`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    height: 30px;
    width: 30px;
    background: red;
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
        background-color: ${({ isOpen }) => (isOpen ? '#000' : '#FFF')};
        position: absolute;
        transform: translate(0, 8px);
        transform: ${({ isOpen }) => isOpen && 'rotate(-45deg)'};
    }

    &:before {
        transform: translate(0, -8px);
        transform: ${({ isOpen }) => isOpen && 'rotate(45deg)'};
    }
`;
