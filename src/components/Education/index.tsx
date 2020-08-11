import * as Styled from './styled';
import React from 'react';
import c from '../../shared/copy/mainPage';

interface IProps {
    lang: string;
}

const Education: React.FunctionComponent<IProps> = ({ lang }) => {
  return (
    <Styled.SectionStyled>
      <Styled.SectionInnerStyled>
        <Styled.EducationSVG name={'education'} />
        <Styled.Dates>{c[lang].educationDate1}</Styled.Dates>
        <Styled.DescriptionStyled>
          {c[lang].education1}
        </Styled.DescriptionStyled>
        <Styled.Dates>{c[lang].educationDate2}</Styled.Dates>
        <Styled.DescriptionStyled>
          {c[lang].education2}
        </Styled.DescriptionStyled>
        <Styled.Dates>{c[lang].educationDate3}</Styled.Dates>
        <Styled.DescriptionStyled>
          {c[lang].education3}
        </Styled.DescriptionStyled>
      </Styled.SectionInnerStyled>
    </Styled.SectionStyled>
  );
};

export default Education;
