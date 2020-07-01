import styled from 'styled-components';
import media from 'styled-media-query';

export const Main = styled.main`
    height: 100vh;
`;

export const BackgroundImg = styled.img`
    position: fixed;
    z-index: -1;
    width: auto;
    max-height: 100%;
    max-width: unset;

    ${media.greaterThan('medium')`
        max-width: 100%;
        height: auto;
        max-height: unset;
    `}
`;

export const Section = styled.section`
    height: calc(100vh - 50px);

    &:first-of-type {
        padding-top: 100px;
    }
`;
