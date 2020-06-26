import styled from 'styled-components';
import media from 'styled-media-query';

export const Main = styled.main`
    height: 100vh;
`;

export const BackgroundImg = styled.img`
    position: fixed;
    z-index: -1;
    height: 100%;
    width: auto;

    ${media.greaterThan('medium')`
        height: auto;
        width: 100%;
    `}
`;

export const Section = styled.section`
    height: calc(100vh - 50px);

    &:first-of-type {
        padding-top: 100px;
    }
`;
