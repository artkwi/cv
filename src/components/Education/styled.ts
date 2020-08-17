import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';
import { IconManager } from '..';
import {
  Dates,
  Description,
  Section,
  SectionInner
} from '../../containers/MainPage/styled';

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

export const DatesStyled = styled(Dates)`
    text-align: left;
    margin-left: unset;
    margin-right: auto;
    max-width: 50%;
    
    ${media.greaterThan('medium')`
        margin-left: auto;
        margin-right: unset;
    `}
`;

export const DescriptionStyled = styled(Description)`
    margin-left: auto;
    margin-right: unset;
    text-align: left;
`;

export const EducationSVG = styled(IconManager)`
    display: none;
    font-size: 200px;
    position: absolute;
    font-size: 170px;
    position: absolute;
    left: 40px;
    /* top: 135px; */
    z-index: -1;

    #diploma {
        animation: ${diploma} 5s linear alternate infinite;
        transform-box: fill-box;
        transform-origin: center;
        transform: rotate(-20deg) translate(30px, 0px);
    }

    #top,
    #pompon {
        animation: ${head} 4s linear alternate infinite;
        transform-origin: top;
        transform-box: fill-box;
    }

    ${media.greaterThan('medium')`
        display: block;
        position: absolute;
        left: 50px;
        font-size: 400px;
        /* top: 40px; */
    `}
`;
