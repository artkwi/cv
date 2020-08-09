import * as Styled from './styled';
import React from 'react';
import c from './../../shared/copy/mainPage';

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
        <Styled.Description>
          {c[lang].htmlSkills.join(', ')}
        </Styled.Description>
        <Styled.Description>
          {c[lang].jsSkills.join(', ')}
        </Styled.Description>
        <Styled.Description>
          {c[lang].databaseSkills.join(', ')}
        </Styled.Description>
        <Styled.Description>
          {c[lang].OOPSkill}
        </Styled.Description>
        <Styled.Description>
          {c[lang].otherSkills.join(', ')}
        </Styled.Description>
        <Styled.Description>
          {c[lang].languageSkill}
        </Styled.Description>
        {/* </Parallax> */}
      </Styled.SectionInnerStyled>
    </Styled.SectionStyled>
  );
};

export default Skills;
