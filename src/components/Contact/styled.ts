import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 40px 20px;
`;

export const IconWrapper = styled.div`
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
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
        font-size: 60px;
    `}
`;
