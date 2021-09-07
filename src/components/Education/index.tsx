import * as Styled from './styled';
import React from 'react';
import { copy as c } from '../../shared/copy/mainPage';

interface IProps {
    lang: string;
}

const Education: React.FunctionComponent<IProps> = ({ lang }) => {
    return (
        <Styled.SectionStyled data-aos="fade-up">
            <Styled.SectionInnerStyled>
                <Styled.EducationSVG name={'education'} />
                <Styled.DatesStyled>
                    {c[lang].educationDate1}
                </Styled.DatesStyled>
                <Styled.DescriptionStyled>
                    {c[lang].education1}
                </Styled.DescriptionStyled>
                <Styled.DatesStyled>
                    {c[lang].educationDate2}
                </Styled.DatesStyled>
                <Styled.DescriptionStyled>
                    {c[lang].education2}
                </Styled.DescriptionStyled>
                <Styled.DatesStyled>
                    {c[lang].educationDate3}
                </Styled.DatesStyled>
                <Styled.DescriptionStyled>
                    {c[lang].education3}
                </Styled.DescriptionStyled>
            </Styled.SectionInnerStyled>
        </Styled.SectionStyled>
    );
};

export default Education;
