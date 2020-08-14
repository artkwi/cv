import * as Styled from './styled';
import React from 'react';
import c from '../../shared/copy/mainPage';

interface IProps {
    lang: string;
}

const Skills: React.FunctionComponent<IProps> = ({ lang }) => {
  return (
    <Styled.SectionStyled>
      <Styled.SectionInnerStyled data-aos="fade-up" data-aos-offset="300">
        <Styled.SkillsStyled name={'skills'} />
        <Styled.DescriptionStyled>
          {c[lang].htmlSkills.join(', ')}
        </Styled.DescriptionStyled>
        <Styled.DescriptionStyled>
          {c[lang].jsSkills.join(', ')}
        </Styled.DescriptionStyled>
        <Styled.DescriptionStyled>
          {c[lang].databaseSkills.join(', ')}
        </Styled.DescriptionStyled>
        <Styled.DescriptionStyled>
          {c[lang].OOPSkill}
        </Styled.DescriptionStyled>
        <Styled.DescriptionStyled>
          {c[lang].otherSkills.join(', ')}
        </Styled.DescriptionStyled>
        <Styled.DescriptionStyled>
          {c[lang].languageSkill}
        </Styled.DescriptionStyled>
      </Styled.SectionInnerStyled>
    </Styled.SectionStyled>
  );
};

export default Skills;
