import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';

const underlineAnimation = keyframes`
    0%   {width: 0%}
    100% {width: 95%;}  
`;

const underlineDescriptionAnimation = keyframes`
    0%   {width: 0%}
    100% {width: 50%;}  
`;

export const Main = styled.main`
    height: 100%;
    letter-spacing: 1px;
    font-family: Roboto, sans-serif;
    background-color: #000000;
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

export const AnimatedBackground = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 0;
`;

export const Section = styled.section`
    font-family: Exo, sans-serif;
    padding: 15px;
    text-align: center;

    &:first-of-type {
        /* height: 100vh; */
        padding: 0px 0px 20px;
    }
`;

export const SectionInner = styled.div`
    clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 90%);
    background-color: #151719;
    padding: 80px 40px;
`;

export const ProfileImageWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 100px 0 40px 0;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin: 0 -15px;
`;

export const ProfileBackground = styled.img`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: auto;
`;

export const Figure = styled.figure`
    z-index: 5;
    width: 130px;
    height: 130px;
    overflow: hidden;
    border-radius: 50%;
    border: 2px solid #ffffff;

    ${media.greaterThan('medium')`
        width: 200px;
        height: 200px;
    `}
`;

export const ProfileImage = styled.img`
    width: 100%;
    height: auto;
    transition: all 0.5s;
    transform: scale(1.05);
    filter: grayscale(100%);
    &:hover {
        transform: scale(1);
        filter: grayscale(0);
    }
`;

export const ProfileSignatureWrapper = styled.div`
    overflow: hidden;
    margin-top: 40px;
`;

export const ProfileSignature = styled.p`
    position: relative;
    color: #0000008a;
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 3px;

    &:before {
        content: '';
        display: block;
        width: 0%;
        height: 3px;
        background-color: #0000008a;
        margin: auto;
        margin-bottom: 2px;
        animation: ${underlineAnimation} 0.5s ease-out 1s forwards;
    }
`;

export const AboutMeDescription = styled.p`
    padding: 80px 40px 140px;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        display: block;
        width: 0;
        height: 1px;
        background-color: #f7b226;
        bottom: 0px;
        left: 50%;
        transform: translate(-50%, 0);
        animation: ${underlineDescriptionAnimation} 0.5s ease-out 1s forwards;
    }
`;

export const Dates = styled.p`
    color: #c0c0c0;
    font-size: 13px;
`;

export const Description = styled.p`
    color: #f3f3f3;
    padding: 20px 0 40px;
`;
