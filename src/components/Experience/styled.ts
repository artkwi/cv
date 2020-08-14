import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';
import { IconManager } from '..';
import {
  Description,
  Section,
  SectionInner
} from '../../containers/MainPage/styled';

const arm = keyframes`
    0% {
       transform: rotate(0deg); 
    }
    40% {
       transform: rotate(0deg); 
    }
    50% {
        transform: rotate(4deg);
    }
    60% {
        transform: rotate(0deg); 
    }
    100% {
        transform: rotate(0deg);
    }
`;

const commit = keyframes`
    0% {
       opacity: 0.2; 
    }
    60% {
       opacity: 0.2; 
    }
    80% {
       opacity: 0.7; 
    }
    100% {
        opacity: 0.7; 
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
    text-align: left;
`;

export const SectionInnerStyled = styled(SectionInner)``;

export const Dates = styled.p`
    color: ${({ theme }) => theme.colors.dates};
    font-size: ${({ theme }) => theme.fontSize.xxs}px;
`;

export const DescriptionStyled = styled(Description)`
    margin-right: auto;
`;

export const ExperienceSVG = styled(IconManager)`
    position: absolute;
    font-size: 170px;
    position: absolute;
    top: 80px;
    z-index: -1;
    right: 45px;
    transition: font-size 0.5s;

    #head {
        animation: ${head} 4s linear alternate infinite;
        transform-origin: top;
        transform-box: fill-box;
    }

    #arm {
        animation: ${arm} 4s linear alternate infinite;
        transform-origin: right;
        transform-box: fill-box;
    }

    #c_last {
        animation: ${commit} 4s linear alternate infinite;
    }

    ${media.greaterThan('medium')`
        position: absolute;
        font-size: 400px;
        top: 40px;
    `}
`;
