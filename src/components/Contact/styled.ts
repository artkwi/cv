import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-items: center;
    padding: 40px 20px;
`;

export const IconWrapper = styled.a`
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    cursor: pointer;
    
    svg,
    path {
        transition: all 0.1s;
    }
    &:hover {
        svg,
        path {
            fill: ${({ theme }) => theme.colors.white};
        }
    }

    ${media.greaterThan('medium')`
        font-size: 55px;
    `}
`;
