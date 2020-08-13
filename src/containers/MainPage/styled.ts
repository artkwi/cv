import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';

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
    text-align: left;

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
    position: relative;
`;

export const ProfileImageWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 450px;
    overflow: hidden;
`;

export const ProfileBackground1 = styled.img`
    position: absolute;
    bottom: 0;
    width: 100%;
    min-height: 100%;
    z-index:2;
    top: -212px;

    ${media.greaterThan('medium')`
        width: 100%;
        height: auto;
    `}
`;
export const ProfileBackground = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const ProfileBackgroundTop = styled.div`
    background-color: transparent;
    height: 50%;
`;

export const ProfileBackgroundBottomWrapper = styled.div`
    height: 50%;
`;

export const ProfileBackgroundBottom = styled.div`
    background-color: ${({ theme }) => theme.colors.purple};
    background-image: linear-gradient(to right bottom, #191919, #2e2b4c, #413e84, #5550c0, #6c63ff);
    height: 50%;
`;

export const ProfileInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 10px 40px;
    flex-direction: column;
    margin-top: 70px;
    
    ${media.greaterThan('medium')`
        flex-direction: row;
        margin-top: 0;
    `}
`;

export const Figure = styled.figure`
    z-index: 5;
    width: 130px;
    height: 130px;
    overflow: hidden;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.white};
    filter: drop-shadow(2px 4px 6px black);

    ${media.greaterThan('medium')`
        width: 200px;
        height: 200px;
        margin-bottom: 40px;
    `}
`;

export const ProfileImage = styled.img`
    width: 100%;
    height: auto;
    transition: all 0.5s;
    transform: scale(1.05);
    /* filter: grayscale(100%); */
    &:hover {
        transform: scale(1);
        /* filter: grayscale(0); */
    }
`;

export const ProfileSignature = styled.h1`
z-index: 5;
filter: drop-shadow(2px 4px 6px black);
    position: relative;
    color: #FFFFFF;
    font-size: ${({ theme }) => theme.fontSize.xl}px;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 3px;
    margin-top: 30px;
    text-align: center;

    ${media.greaterThan('medium')`
        margin-top: 60px;
    `}
`;

export const AboutMeDescription = styled.p`
    padding: 80px 40px 140px;
    position: relative;
    line-height: 1.5;
    text-align: center;
    margin: 0 auto;
    font-size: ${({ theme }) => theme.fontSize.l}px;

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

    ${media.greaterThan('medium')`
        max-width: 60%;
    `}
`;

export const Dates = styled.p`
    color: ${({ theme }) => theme.colors.dates};
    font-size: ${({ theme }) => theme.fontSize.xxs}px;
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.colors.textDescription};
    padding: 20px 0 40px;
    margin-right: auto;
    line-height: 1.7;
    
    ${media.greaterThan('medium')`
        max-width: 50%;
    `}
`;
