import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';
import { IconManager } from '..';
import {
  Description,
  Section,
  SectionInner
} from '../../containers/MainPage/styled';

const bar = keyframes`
    0% {
        transform: scaleX(1);
    }
    20% {
        transform: scaleX(0.6);
    }
    40% {
        transform: scaleX(0.6);
    }
    60% {
        transform: scaleX(0.8);
    }
    80% {
        transform: scaleX(0.8);
    }
    100% {
        transform: scaleX(1);
    }
`;

const leaf = keyframes`
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(40deg);
    }
    }
    100% {
         transform: rotate(0deg);
    }
`;

const head = keyframes`
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(7deg);
    }
    }
    100% {
         transform: rotate(0deg);
    }
`;

export const SectionStyled = styled(Section)``;

export const SectionInnerStyled = styled(SectionInner)``;

export const Dates = styled.p`
    color: ${({ theme }) => theme.colors.dates};
    font-size: ${({ theme }) => theme.fontSize.xxs}px;
`;

export const DescriptionStyled = styled(Description)``;

export const SkillsStyled = styled(IconManager)`
    font-size: 170px;
    position: absolute;
    right: 40px;
    bottom: 40px;
    transition: font-size 0.5s;
    z-index: -1;

    #bar1,
    #bar2,
    #bar3,
    #bar4,
    #bar5 {
        animation: ${bar} 5s linear alternate infinite;
        transform-box: fill-box;
    }

    #bar2,
    #bar4,
    #bar5 {
        animation-delay: 2s;
    }

    #leaf1,
    #leaf2 {
        animation: ${leaf} 4s linear alternate infinite;
        transform-origin: bottom;
        transform-box: fill-box;
    }

    #leaf2 {
        animation: ${leaf} 4s linear alternate infinite;
        animation-delay: 2s;
        transform-origin: bottom;
        transform-box: fill-box;
    }

    #head {
        animation: ${head} 4s linear alternate infinite;
        transform-origin: bottom;
        transform-box: fill-box;
    }

    ${media.greaterThan('medium')`
        font-size: 500px;
        position: absolute;
        bottom: 0;
    `}
`;
