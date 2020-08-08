import React, { useState } from 'react';
import * as Styled from './styled';
import { ScrollLink } from './../../components';
import c from './../../shared/copy/mainPage';

interface IProps {
    lang: string;
}

const Navbar:React.FC<IProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Styled.Nav isOpen={isOpen}>
      <Styled.MenuBtn
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        aria-label="menu"
      >
        <Styled.Lines isOpen={isOpen} />
      </Styled.MenuBtn>
      <Styled.Items isOpen={isOpen}>
        <ScrollLink to="about-me">
          <Styled.Item
            onClick={() => setIsOpen(!isOpen)} title={c[lang].aboutMe}>{c[lang].aboutMe}</Styled.Item>
        </ScrollLink>
        <ScrollLink to="skills">
          <Styled.Item onClick={() => setIsOpen(!isOpen)} title={c[lang].skills}>{c[lang].skills}</Styled.Item>
        </ScrollLink>
        <ScrollLink to="education">
          <Styled.Item onClick={() => setIsOpen(!isOpen)} title={c[lang].education}>
            {c[lang].education}
          </Styled.Item>
        </ScrollLink>
        <ScrollLink to="work-experience">
          <Styled.Item onClick={() => setIsOpen(!isOpen)} title={c[lang].experience}>
            {c[lang].experience}
          </Styled.Item>
        </ScrollLink>
        <ScrollLink to="contact">
          <Styled.Item onClick={() => setIsOpen(!isOpen)} title={c[lang].contact}>{c[lang].contact}</Styled.Item>
        </ScrollLink>
      </Styled.Items>
    </Styled.Nav>
  );
};

export default Navbar;
