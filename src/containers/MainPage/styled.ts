import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';

const underlineAnimation = keyframes`
    0%   {width: 0%;}
    100% {width: 95%;}  
`;

const underlineDescriptionAnimation = keyframes`
    0%   {width: 0%;}
    100% {width: 50%;}  
`;

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
    padding-left: 8px;
    animation: ${fadeInAnimation} 1s ease-out 1s forwards;

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
    text-align: center;

    &:first-of-type {
        /* height: 100vh; */
        opacity: 0;
        padding: 0px 0px 20px;
        animation: ${fadeInAnimation} 1s ease-out 1s forwards;
    }
`;

export const SectionInner = styled.div`
    clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 90%);
    background-color: ${({ theme }) => theme.colors.sectionInner};
    padding: 80px 40px;
`;

export const ProfileImageWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 100px 0 40px 0;
    align-items: center;
    justify-content: center;
    overflow: hidden;
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
    border: 2px solid ${({ theme }) => theme.colors.white};

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
    font-size: ${({ theme }) => theme.fontSize.xl}px;
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
        animation: ${underlineAnimation} 0.5s ease-out 1.5s forwards;
    }
`;

export const AboutMeDescription = styled.p`
    padding: 80px 40px 140px;
    position: relative;
    line-height: 1.4;

    &:after {
        content: '';
        position: absolute;
        display: block;
        width: 0;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.h2};
        bottom: 0px;
        left: 50%;
        transform: translate(-50%, 0);
        animation: ${underlineDescriptionAnimation} 0.5s ease-out 1s forwards;
    }
`;

export const Dates = styled.p`
    color: ${({ theme }) => theme.colors.dates};
    font-size: ${({ theme }) => theme.fontSize.xxs}px;
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.colors.textDescription};
    padding: 20px 0 40px;
`;
