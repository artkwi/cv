import * as Styled from './styled';
import React from 'react';
import c from '../../shared/copy/mainPage';

interface IProps {
    lang: string;
}

const Skills: React.FunctionComponent<IProps> = ({ lang }) => {
  return (
    <Styled.SectionStyled>
      <Styled.SectionInnerStyled>
        {/* <Parallax className="custom-class" x={[200, 0]} tagOuter="figure"> */}
        {/* <Styled.SkillsImg src={skillsSVG} alt="" /> */}
        <Styled.SkillsStyled name={'skills'} />
        {/* </Parallax> */}
        {/* <Parallax className="custom-class" x={[-100, 0]} tagOuter="figure"> */}
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
        {/* </Parallax> */}
      </Styled.SectionInnerStyled>
    </Styled.SectionStyled>
  );
};

export default Skills;
