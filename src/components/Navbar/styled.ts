import styled from 'styled-components';

export const Items = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

export const Item = styled.li`
    background: yellow;
    padding: 20px;
    text-align: center;
`;
