import * as Styled from './styled';
import React from 'react';
import c from '../../shared/copy/mainPage';

interface IProps {
    lang: string;
}

const Experience: React.FunctionComponent<IProps> = ({ lang }) => {
  return (
    <Styled.SectionStyled data-aos="fade-up">
      <Styled.SectionInnerStyled>
        <Styled.ExperienceSVG name={'experience'} />
        <Styled.DatesStyled>{c[lang].experienceDate0}</Styled.DatesStyled>
        <Styled.DescriptionStyled>
          {c[lang].experience0}
        </Styled.DescriptionStyled>
        <Styled.DatesStyled>{c[lang].experienceDate1}</Styled.DatesStyled>
        <Styled.DescriptionStyled>
          {c[lang].experience1}
        </Styled.DescriptionStyled>
        <Styled.DatesStyled>{c[lang].experienceDate2}</Styled.DatesStyled>
        <Styled.DescriptionStyled>
          {c[lang].experience2}
        </Styled.DescriptionStyled>
        <Styled.DatesStyled>{c[lang].experienceDate3}</Styled.DatesStyled>
        <Styled.DescriptionStyled>
          {c[lang].experience3}
        </Styled.DescriptionStyled>
      </Styled.SectionInnerStyled>
    </Styled.SectionStyled>
  );
};

export default Experience;
