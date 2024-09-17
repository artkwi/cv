import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';

const fadeInAnimation = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;}
`;

export const Main = styled.main`
    height: 100%;
    letter-spacing: 1px;
    font-family: Roboto, sans-serif;
    background-color: ${({ theme }) => theme.colors.black};
`;

export const LanguageButton = styled.button`
    position: absolute;
    z-index: 9;
    top: 15px;
    left: 0;
    font-size: 45px;
    display: flex;
    opacity: 0;
    margin-left: 8px;
    animation: ${fadeInAnimation} 1s ease-out 2s forwards;

    ${media.greaterThan('medium')`
        top: 60px;
    `}
`;

export const AnimatedBackground = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 0;
`;

export const Section = styled.section`
    font-family: Exo, sans-serif;
    padding: 15px;
    text-align: left;

    &:first-of-type {
        opacity: 0;
        padding: 0px 0px 20px;
        animation: ${fadeInAnimation} 1s ease-out 1s forwards;
    }
`;

export const SectionInner = styled.div`
    clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 90%);
    background-color: ${({ theme }) => theme.colors.sectionInner};
    padding: 100px 10%;
    position: relative;
`;

export const Dates = styled.p`
    color: ${({ theme }) => theme.colors.dates};
    font-size: ${({ theme }) => theme.fontSize.xxs}px;
    margin-top: 10px;

    &:first-of-type {
        margin-top: 0;
    }
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.colors.textDescription};
    padding: 20px 0;
    margin-right: auto;
    line-height: 1.7;

    ${media.greaterThan('medium')`
        max-width: 50%;
    `}
`;
