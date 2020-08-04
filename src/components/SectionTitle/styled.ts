import styled from 'styled-components';

export const Heading = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    font-size: ${({ theme }) => (theme.fontSize.xl)}px;
    font-weight: 700;
    color: #f7b226;
    z-index: 1;
    position: relative;
`;
