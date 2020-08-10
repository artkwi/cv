import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';
import { Section, SectionInner } from '../../containers/MainPage/styled';
import { IconManager } from '..';

const diploma = keyframes`
   0% {
       transform: rotate(-20deg) translate(30px, 0px); 
    }
    50% {
        transform: rotate(-30deg) translate(25px, -5px);
    }
    100% {
        transform: rotate(-20deg) translate(30px, 0px);;
    }
`;

const head = keyframes`
    0% {
        transform: rotate(0deg) translate(-10px, 0px);
    }
    50% {
        transform: rotate(-2deg) translate(-10px, 5px);
    }
    100% {
         transform: rotate(0deg) translate(-10px, 0px);
    }
`;

export const SectionStyled = styled(Section)`
    text-align: right;
`;

export const SectionInnerStyled = styled(SectionInner)``;

export const Dates = styled.p`
    color: ${({ theme }) => theme.colors.dates};
    font-size: ${({ theme }) => theme.fontSize.xxs}px;
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.colors.textDescription};
    padding: 20px 0 40px;
    max-width: unset;
    margin-left: auto;
    ${media.greaterThan('medium')`
        max-width: 50%;
    `}
`;

export const EducationSVG = styled(IconManager)`
    font-size: 200px;
    position: absolute;
    font-size: 170px;
    position: absolute;
    left: 40px;
    top: 120px;
    z-index: -1;

    #diploma {
        animation: ${diploma} 5s linear alternate infinite;
        transform-box: fill-box;
        transform-origin: center;
        transform: rotate(-20deg) translate(30px, 0px);
    }

    #top, #pompon {
        animation: ${head} 4s linear alternate infinite;
        transform-origin: top;
        transform-box: fill-box;
    }

    ${media.greaterThan('medium')`
        position: absolute;
        left: 50px;
        font-size: 400px;
        top: 40px;
    `}
`;