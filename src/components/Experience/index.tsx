import * as Styled from './styled';
import React from 'react';
import c from '../../shared/copy/mainPage';

interface IProps {
    lang: string;
}

const Experience: React.FunctionComponent<IProps> = ({ lang }) => {
  return (
    <Styled.SectionStyled>
      <Styled.SectionInnerStyled>
        <Styled.ExperienceSVG name={'experience'} />
        <Styled.Dates>{c[lang].experienceDate0}</Styled.Dates>
        <Styled.Description>
          {c[lang].experience0}
        </Styled.Description>
        <Styled.Dates>{c[lang].experienceDate1}</Styled.Dates>
        <Styled.Description>
          {c[lang].experience1}
        </Styled.Description>
        <Styled.Dates>{c[lang].experienceDate2}</Styled.Dates>
        <Styled.Description>
          {c[lang].experience2}
        </Styled.Description>
        <Styled.Dates>{c[lang].experienceDate3}</Styled.Dates>
        <Styled.Description>
          {c[lang].experience3}
        </Styled.Description>
      </Styled.SectionInnerStyled>
    </Styled.SectionStyled>
  );
};

export default Experience;
