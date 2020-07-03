import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';

// TODO - remove if not used
const bgAnimation = keyframes`
  0%   {background-color: #000000;}
  50%  {background-color: #332a2a;}
  100% {background-color: #000000;}
`;

const underlineAnimation = keyframes`
    0%   {width: 0%}
    100% {width: 95%;}  
`;

export const Main = styled.main`
    /* animation: ${bgAnimation} 6s linear infinite; */
    height: 100%;
    /* background-color: ${({ theme }) => theme.colors.black}; */
    font-family: Roboto, sans-serif;
    background-color: #000000;
    /* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='565' height='67.8' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23222' stroke-width='8.4' stroke-opacity='0.89'%3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E"); */
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
    font-family: Exo, sans-serif;
    height: calc(100vh - 50px);
    padding: 15px;
    text-align: center;

    &:first-of-type {
        height: 100vh;
        padding-top: 0px;
    }
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
    /* background-color: #fff; */
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

export const Dates = styled.p`
    color: red;
`;
