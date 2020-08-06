import styled from 'styled-components';

export const Heading = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    font-size: ${({ theme }) => (theme.fontSize.xxl)}px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.h2};
    z-index: 1;
    position: relative;
`;
