import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';

const underlineDescriptionAnimation = keyframes`
    0%   {width: 0%;}
    100% {width: 50%;}  
`;

const aboutAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-100px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);    
    }
`;

export const ProfileImageWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
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

export const ProfileBackgroundBottom = styled.div`
    background-color: ${({ theme }) => theme.colors.purple};
    background-image: linear-gradient(
        to right bottom,
        #191919,
        #2e2b4c,
        #413e84,
        #5550c0,
        #6c63ff
    );
    height: 50%;
    transition: opacity 0.5s;

    ${media.greaterThan('medium')`
        opacity: 0;
    `}
`;

export const ProfileInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 40px;
    flex-direction: column;
    margin-top: 70px;

    ${media.greaterThan('medium')`
        flex-direction: column;
        margin-top: 0;
        margin-top: 100px;
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
    opacity: 0;
    animation: ${aboutAnimation} 0.5s ease-out 3s forwards;

    ${media.greaterThan('medium')`
        width: 200px;
        height: 200px;
        margin-bottom: 20px;
    `}
`;

export const ProfileImage = styled.img`
    width: 100%;
    height: auto;
    transition: all 0.5s;
    transform: scale(1.05);
    &:hover {
        transform: scale(1);
    }
`;

export const ProfileSignature = styled.h1`
    z-index: 5;
    filter: drop-shadow(2px 4px 6px black);
    position: relative;
    color: #ffffff;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 3px;
    margin-top: 30px;
    text-align: center;
    margin-bottom: 20px;
    transition: font-size 0.5s;
    opacity: 0;
    animation: ${aboutAnimation} 0.5s ease-out 2.5s forwards;

    ${media.greaterThan('medium')`
        margin-bottom: 0;
        font-size: 40px;
    `}
`;

export const AboutMeDescription = styled.p`
    padding: 30px;
    position: relative;
    line-height: 1.5;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 100px;
    font-size: ${({ theme }) => theme.fontSize.m}px;
    opacity: 0;
    animation: ${aboutAnimation} 0.5s ease-out 2s forwards;

    &:after {
        content: '';
        position: absolute;
        display: block;
        width: 0;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.white};
        bottom: 0px;
        left: 50%;
        transform: translate(-50%, 0);
        animation: ${underlineDescriptionAnimation} 0.5s ease-out 2s forwards;
    }

    ${media.greaterThan('medium')`
        padding: 30px 0;
        max-width: 60%;
        font-size: ${({ theme }) => theme.fontSize.l}px;
    `}
`;
