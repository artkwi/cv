import styled from 'styled-components';

export const Heading = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background-color: ${({ theme }) => (theme.colors.whiteTransparent)};
    font-size: ${({ theme }) => (theme.fontSize.xl)}px;
`;
