import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';
import { Section, SectionInner } from './../../containers/MainPage/styled';
import { IconManager } from './../../components';

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

export const SectionStyled = styled(Section)``;

export const SectionInnerStyled = styled(SectionInner)``;

export const Dates = styled.p`
    color: ${({ theme }) => theme.colors.dates};
    font-size: ${({ theme }) => theme.fontSize.xxs}px;
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.colors.textDescription};
    padding: 20px 0 40px;
`;

export const SkillsStyled = styled(IconManager)`
    font-size: 200px;
    position: absolute;

    font-size: 170px;
    position: absolute;
    right: 40px;
    bottom: 15px;

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

    ${media.greaterThan('medium')`
    font-size: 500px;
    position: absolute;
    right: 50px;
    bottom: 0;
    `}
`;